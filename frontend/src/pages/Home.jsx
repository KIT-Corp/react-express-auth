import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "../styles/index.css";
import pinIcon from '../photos/pinpointing.png';

export default function Home() {
    const markers = [
    // BRONX
    {
      geocode: [40.837168399999996, -73.91148156953344],
      popUp: "THE BIBLE CHURCH OF CHRIST"
    },
    {
      geocode: [40.84194726086957, -73.90103973913044], 
      popUp: "BRONX SEVENTH DAY ADVENTIST CHURCH"
    },
    {
      geocode: [40.8149924, -73.9187996],
      popUp: "BRONX TEMPLE SEVENTH DAY ADVENTIST CHURCH"
    },
    {
      geocode: [40.84259962162162, -73.8886302027027],
      popUp: "GETHSEMANE BAPTIST CHURCH"
    },
    {
      geocode: [40.877161, -73.833183],
      popUp: "BLACK FORUM OF CO-OP CITY"
    },
    {
      geocode: [40.855318999999994, -73.86599198407393],
      popUp: "JEWISH COMMUNITY COUNCIL OF PELHAM PARKWAY"
    },
    {
      geocode: [40.86570418181818, -73.88648109090909],
      popUp: "PART OF THE SOLUTION (P.O.T.S.)"
    },
    {
      geocode: [40.822746550000005, -73.91339435967181],
      popUp: "THE SALVATION ARMY BRONX CITADEL"
    },
    {
      geocode: [40.80828, -73.916618],
      popUp: "ST. ANN'S CHURCH OF MORRISANIA"
    },
    {
      geocode: [40.806229040816326, -73.91585134693878],
      popUp: "ST. LUKES FOOD PANTRY"
    },
    // BROOKLYN
        {
      geocode: [40.68684706122449, -73.98066667346939],
      popUp: "NEXT STEP COMMUNITY CHURCH"
    },
    {
      geocode: [40.67833555, -73.98284706675807], 
      popUp: "COMMUNITY HELP IN PARK SLOPE INC"
    },
    {
      geocode: [40.6543811, -73.93328435000001],
      popUp: "CHRISTIAN FELLOWSHIP SEVENTH DAY ADVENTIST COMMUNITY SVCS-S.K."
    },
    {
      geocode: [40.664633, -73.9347869],
      popUp: "KINGS BAY Y FOOD PANTRY"
    },
    {
      geocode: [40.66745675, -73.92134083379345],
      popUp: "EBENEZER SEVENTH DAY ADVENTIST CHURCH"
    },
    {
      geocode: [40.6537508, -73.9339737],
      popUp: "GOD'S BATTALION OF PRAYER CHURCH"
    },
    {
      geocode: [40.68545, -73.974105],
      popUp: "HANSON PLACE SEVENTH DAY ADVENTIST CHURCH"
    },
    {
      geocode: [40.80828, -73.9476864],
      popUp: "HEBRON SEVENTH DAY ADVENTIST CHURCH"
    },
    {
      geocode: [40.6503867, 73.9535233714168],
      popUp: "HOLY CROSS FOOD PANTRY - BROOKLYN"
    },
    //QUEENS
        {
      geocode: [40.837168399999996, -73.91148156953344],
      popUp: "ALLEN OUTREACH MINISTRY FEEDING PROGRAM"
    },
    {
      geocode: [40.75379485, -73.86500129999999], 
      popUp: "CORONA SEVENTH DAY ADVENTIST CHURCH"
    },
    {
      geocode: [40.7564755, -73.90191999999999],
      popUp: "CORPUS CHRISTI FOOD PANTRY"
    },
    {
      geocode: [40.70486295, -73.79869129234513],
      popUp: "THE SALVATION ARMY JAMAICA CITADEL CORPS"
    },
    {
      geocode: [40.71856175, -73.80966593130327],
      popUp: "ST. NICHOLAS OF TOLENTINE CHURCH - F.P."
    },
    {
      geocode: [40.684799, -73.813799],
      popUp: "ST. TERESA OF AVILA COMMUNITY SERVICES"
    },
    {
      geocode: [40.698874, -73.8368659],
      popUp: "HOLY CHILD JESUS FOOD PANTRY"
    },
    {
      geocode: [40.6609784, -73.8328876],
      popUp: "OUR LADY OF GRACE MINISTRY"
    },
    //MANHATTAN
        {
      geocode: [40.80393265, -73.95499852451394],
      popUp: "FOOD BANK FOR NEW YORK CITY"
    },
    {
      geocode: [40.6353054, -74.0098857], 
      popUp: "CHRIST CHURCH UNITED METHODIST"
    },
    {
      geocode: [40.68295, -73.9708],
      popUp: "CHURCH OF THE ANNUNCIATION"
    },
    {
      geocode: [40.73412295, -73.9957630143274],
      popUp: "ASCENSION OUTREACH, INCH"
    },
    {
      geocode: [40.68295, -73.9708],
      popUp: "CONVENT AVENUE BAPTIST CHURCH"
    },
    {
      geocode: [40.806962, -73.96587373509871],
      popUp: "COMMUNITY IMPACT"
    },
    {
      geocode: [40.717531300000005, -73.97937575],
      popUp: "DEWITT REFORMED CHURCH"
    },
    {
      geocode: [40.822746550000005, -73.91339435967181],
      popUp: "THE SALVATION ARMY MANHATTAN CITADEL"
    },
    {
      geocode: [40.791919, -73.947326],
      popUp: "ST. CECILIA'S PARISH SERVICES"
    },
    {
      geocode: [40.78941, -73.977345],
      popUp: "ST. IGNATIUS EPISCOPAL CHURCH"
    },
    //STATEN ISLAND 
        {
      geocode: [40.62527745, -74.07983055],
      popUp: "PROJECT HOSPITALITY, INC."
    },
    {
      geocode: [40.63055381481482, -74.080971], 
      popUp: "THE SALVATION ARMY STAPLETON CORPS"
    },
    {
      geocode: [40.623401, -74.078863],
      popUp: "STAPLETON U.A.M.E. CHURCH"
    },
    {
      geocode: [40.6048842, -74.0923518],
      popUp: "CHRISTIAN PENTECOSTAL CHURCH"
    },
  ];
  const customIcon = new Icon({
    iconUrl: pinIcon,
    iconSize: [25, 25],  // Slightly larger for better visibility
    iconAnchor: [12, 25] // Point at the bottom center of the icon
  });


  return (
    <div>

      <MapContainer center={[40.7128, -74.0060]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
        
    </div>

  );
}