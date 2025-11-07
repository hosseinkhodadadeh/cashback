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



export default function creditCards({cards}) {
  return (
    <AppLayout>
      <Head title="My Credit Cards" />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          My Credit Cards
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl text-white p-6 shadow-xl bg-gradient-to-br from-red-500 to-pink-600 transition transform hover:scale-105`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">{card.card_name}</span>
                <img
                  src={card.type.bg_image}
                  alt="Card logo"
                  className="h-6 w-auto"
                />
              </div>

              <div className="text-xl tracking-widest font-mono mb-4">
                {card.name}
              </div>

              <div className="flex justify-between text-sm">
                <div>
                  <p className="opacity-80">Card Type</p>
                  <p className="font-semibold">{card.type.name}</p>
                </div>
                <div>
                  <p className="opacity-80">Expires</p>
                  <p className="font-semibold">In the Future</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
