/** @format */
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export function FoodBankSignupForm({ className, onSubmit, loading }) {
  const [foodBankName, setFoodBankName] = useState('');
  const [street, setStreet] = useState('');
  const [borough, setBorough] = useState('');
  const [zipcode, setZipcode] = useState(''); // pre-filled value can be set here if needed
  const [type, setType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const boroughOptions = [
    '',
    'Manhattan',
    'Brooklyn',
    'Queens',
    'Bronx',
    'Staten Island',
  ];

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ foodBankName, street, borough, zipcode, phoneNumber, type });
  }

  return (
    <div className={cn('flex flex-col gap-6 justify-center', className)}>
      <div className="w-full max-w-4xl">
        <Card className="overflow-hidden p-0 md:w-[700px]">
          <CardContent className="oveflow-hidden p-0 grid-cols-1 w-full">
            <form className="p-6 md:p-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Food Bank Details</h1>
                  <p className="text-muted-foreground text-balance">
                    Enter the details about the Food Bank you represent here!
                  </p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="foodBankName">Food Bank Name</Label>
                  <Input
                    id="foodBankName"
                    type="text"
                    value={foodBankName}
                    onChange={(e) => setFoodBankName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="street">Street</Label>
                  <Input
                    id="street"
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="borough">Borough</Label>
                  <select
                    id="borough"
                    value={borough}
                    onChange={(e) => setBorough(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                  >
                    {boroughOptions.map((option) => (
                      <option key={option} value={option}>
                        {option || '-- Select a Borough --'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="zipcode">Zipcode</Label>
                  <Input
                    id="zipcode"
                    type="text"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="type">Type</Label>
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">-- Select a Type --</option>
                    <option value="Food Pantry">Food Pantry (FP)</option>
                    <option value="Food Pantry Mobile">
                      Food Pantry - Mobile (FPM)
                    </option>
                    <option value="Food Pantry Kids">
                      Food Pantry - Kids (FPK)
                    </option>
                    <option value="Food Pantry Housing Authority">
                      Food Pantry - Housing Authority (FPHA)
                    </option>
                    <option value="Food Pantry Health">
                      Food Pantry - Health (FPH)
                    </option>
                    <option value="Soup Kitchen">Soup Kitchen (SK)</option>
                    <option value="Soup Kitchen Mobile">
                      Soup Kitchen - Mobile (SKM)
                    </option>
                    <option value="Soup Kitchen Kids">
                      Soup Kitchen - Kids (SKK)
                    </option>
                  </select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Account'}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
