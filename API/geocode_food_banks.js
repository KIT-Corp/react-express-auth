/** @format */

import fetch from 'node-fetch';
import fs from 'fs';
import 'dotenv/config';
import { cfcActiveData } from './activefoodbanks0425.js';

const API_KEY = process.env.GEOAPIFY_API_KEY;

const boroughMap = {
  BK: 'Brooklyn',
  MN: 'Manhattan',
  BX: 'Bronx',
  QN: 'Queens',
  SI: 'Staten Island',
};

// delay between requests
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function enrichFoodBanksWithCoords(data) {
  const entries = Object.entries(data); // ← processes all food banks

  for (let [index, [id, bank]] of entries.entries()) {
    const address = bank.Address;

    if (!address || !address.Street || !address.Borough || !address.ZIP) {
      console.warn(`⚠️ Skipping incomplete address for ID: ${id}`);
      continue;
    }

    const fullBorough = boroughMap[address.Borough] || address.Borough;
    const fullAddress = `${address.Street}, ${fullBorough}, NY ${address.ZIP}`;
    const encoded = encodeURIComponent(fullAddress);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encoded}&format=json&apiKey=${API_KEY}`;

    try {
      console.log(`(${index + 1}/${entries.length}) Fetching: ${fullAddress}`);
      const res = await fetch(url);
      const json = await res.json();

      if (json.results?.length > 0) {
        const { lat, lon } = json.results[0];
        address.latitude = lat;
        address.longitude = lon;
        console.log(`✅ [${id}] ${lat}, ${lon}`);
      } else {
        address.latitude = null;
        address.longitude = null;
        console.warn(`⚠️ [${id}] No result`);
        console.log(JSON.stringify(json, null, 2));
      }
    } catch (err) {
      address.latitude = null;
      address.longitude = null;
      console.error(`❌ [${id}] Error:`, err.message);
    }

    await delay(200); // wait 200ms to avoid rate limit / throttle
  }

  return data;
}

enrichFoodBanksWithCoords(cfcActiveData).then((updated) => {
  fs.writeFileSync(
    'food_banks_with_coords.json',
    JSON.stringify(updated, null, 2)
  );
  console.log('🎉 Done! Saved to food_banks_with_coords.json');
});
