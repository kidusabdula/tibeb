'use client';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-secondaryBg flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-primaryBg rounded-lg shadow-lg">
        <h1 className="text-3xl font-playfair text-accentGold text-center mb-6">Join Tibeb</h1>
        <SignUp
          appearance={{
            elements: {
              card: 'bg-primaryBg border-none',
              headerTitle: 'text-textDark',
              formButtonPrimary: 'bg-accentGold text-primaryBg hover:bg-opacity-90',
              footerActionLink: 'text-accentGold hover:underline',
            },
          }}
        />
      </div>
    </div>
  );
}