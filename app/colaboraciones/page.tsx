'use client';
import Link from 'next/link';
import { dataTest } from '@/utils/event-data';
import { EventData } from '@/utils/event-data';
import CollaborationCard from '@/components/collaboration-card';
import { useWallet } from '@solana/wallet-adapter-react';
import { redirect } from 'next/navigation';

const Collaborations = () => {
  const { publicKey } = useWallet();
  if (!publicKey) {
    return redirect('/');
  }

  return (
    <div>
      {dataTest.length == 0 ? (
        <div className="my-16 flex flex-col items-center">
          <h1 className="text-4xl text-center font-bold">
            Parece que aún no has colaborado con ningún evento
          </h1>
          <h3 className="text-2xl text-center mt-5 mb font-bold">
            ¡Explora los últimos eventos en Solana y participa como colaborador!
          </h3>
          <Link
            href="/"
            className="bg-indigo-300 w-50 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400"
          >
            Explorar eventos
          </Link>
        </div>
      ) : (
        <div className="my-16">
          <h1 className="text-4xl text-center font-bold">Tus Colaboraciones</h1>
          <h3 className="text-2xl text-center mt-5 mb font-bold">
            Recolecta tus recompenzas una vez finalizado el evento
          </h3>
        </div>
      )}
      <div className="grid gap-4 px-10 mb-10 xl:grid-cols-4 sm:grid-cols-2">
        {dataTest.map((event, index) => (
          <CollaborationCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Collaborations;
