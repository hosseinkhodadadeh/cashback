import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function AddCreditCard({cardtypes}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    card_name: '',
    card_id: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/mycards/new', {
      onSuccess: () => reset(), // Clears form on success
    });
  };

  return (
    <AppLayout>
      <Head title="Add Credit Card" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Add a New Credit Card
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Card Name */}
            <div>
              <label
                htmlFor="card_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Card Name
              </label>
              <input
                id="card_name"
                type="text"
                value={data.card_name}
                onChange={(e) => setData('card_name', e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., CIBC Dividend Infinite"
              />
              {errors.card_name && (
                <p className="text-sm text-red-600 mt-1">{errors.card_name}</p>
              )}
            </div>

            {/* Card Type */}
            <div>
              <label
                htmlFor="card_id"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Card Type
              </label>
              <select
                id="card_id"
                value={data.card_id}
                onChange={(e) => setData('card_id', e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                {cardtypes.map(card => (
                  <option value={card.id}>{card.name}</option>
                ))}
               
              </select>
              {errors.card_id && (
                <p className="text-sm text-red-600 mt-1">{errors.card_id}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={processing}
                className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition disabled:opacity-60"
              >
                {processing ? 'Saving...' : 'Add Card'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
