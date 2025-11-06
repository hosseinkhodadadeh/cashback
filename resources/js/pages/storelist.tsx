import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { stores } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Store list',
        href: stores().url,
    },
];
interface Store {
  name: string;
  icon: string;
}

interface StoreListProps {
  stores: Store[];
}
export default function storelist({ stores}: StoreListProps) {
    return (
         <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Choose your store!" />

      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Choose your store!
        </h1>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 divide-y divide-gray-200">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex items-center py-3 hover:bg-gray-100 transition rounded-xl px-3"
            >
              <img
                src={store.icon}
                alt={`${store.name} logo`}
                className="w-10 h-10 rounded-full mr-4 border border-gray-200"
              />
              <span className="text-lg text-gray-700 font-medium">
                {store.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
    );
}

