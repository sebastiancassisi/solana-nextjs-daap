'use client';
import MyEventCard from '@/components/my-event-card';
import { dataTest } from '@/utils/event-data';
import { EventData } from '@/utils/event-data';
import { redirect } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { CreateEventFeature } from '@/components/create-event/create-event.feature';

const MyEvents = () => {
  const { publicKey } = useWallet();
  if (!publicKey) {
    return redirect('/');
  }

  return (
    <div>
      {dataTest.length == 0 ? (
        <div className="my-16 flex flex-col items-center">
          <h1 className="text-4xl text-center font-bold">
            Aún no tienes eventos en Solana
          </h1>
          <h3 className="text-2xl text-center mt-5 mb font-bold">
            ¡Crea tu primer evento hoy mismo!
          </h3>
          <CreateEventFeature />
        </div>
      ) : (
        <div className="my-16 flex flex-col items-center">
          <h1 className="text-4xl text-center font-bold">
            Tus eventos en Solana
          </h1>
          <h3 className="text-2xl text-center mt-5 mb font-bold">
            ¿Nuevo plan?. Hazlo realidad en Solana
          </h3>
          <CreateEventFeature />
        </div>
      )}

      <div className="grid gap-4 px-10 mb-10 xl:grid-cols-4 sm:grid-cols-2">
        {dataTest.map((event: EventData, index: number) => (
          <MyEventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
