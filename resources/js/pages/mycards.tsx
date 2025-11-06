import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { mycards, stores } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "My Credit Card list",
        href: mycards().url,
    },
];





interface CreditCard {
  name: string;
  number: string;
  holder: string;
  expiry: string;
  bg: string;
}

const sampleCards: CreditCard[] = [
  {
    name: 'CIBC Dividend Infinite',
    number: '**** **** **** 5243',
    holder: 'HOSSEIN KHODADADEH',
    expiry: '12/28',
    bg: 'from-blue-500 to-indigo-700',
  },
  {
    name: 'Rogers World Elite',
    number: '**** **** **** 1832',
    holder: 'HOSSEIN KHODADADEH',
    expiry: '08/27',
    bg: 'from-red-500 to-pink-600',
  },
  {
    name: 'Costco Mastercard',
    number: '**** **** **** 9031',
    holder: 'HOSSEIN KHODADADEH',
    expiry: '03/26',
    bg: 'from-gray-700 to-gray-900',
  },
  {
    name: 'Scotiabank Gold Amex',
    number: '**** **** **** 1120',
    holder: 'HOSSEIN KHODADADEH',
    expiry: '10/29',
    bg: 'from-yellow-500 to-amber-700',
  },
  {
    name: 'Tangerine Money-Back',
    number: '**** **** **** 7794',
    holder: 'HOSSEIN KHODADADEH',
    expiry: '01/30',
    bg: 'from-orange-500 to-red-600',
  },
];

export default function CreditCards() {
  return (
    <AppLayout>
      <Head title="My Credit Cards" />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          My Credit Cards
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {sampleCards.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl text-white p-6 shadow-xl bg-gradient-to-br ${card.bg} transition transform hover:scale-105`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">{card.name}</span>
                <img
                  src={
                    card.name.includes('Mastercard')
                      ? 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png'
                      : card.name.includes('Amex')
                      ? 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg'
                      : 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
                  }
                  alt="Card logo"
                  className="h-6 w-auto"
                />
              </div>

              <div className="text-xl tracking-widest font-mono mb-4">
                {card.number}
              </div>

              <div className="flex justify-between text-sm">
                <div>
                  <p className="opacity-80">Card Holder</p>
                  <p className="font-semibold">{card.holder}</p>
                </div>
                <div>
                  <p className="opacity-80">Expires</p>
                  <p className="font-semibold">{card.expiry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
