/** @format */

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-6 text-muted-foreground">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Button className="w-full">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
