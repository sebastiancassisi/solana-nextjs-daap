import Image from 'next/image';
import { FC } from 'react';
import { EventData } from '@/app/utils/event-data';

interface Props {
  key: number;
  event: EventData;
}

const CollaborationCard: FC<Props> = ({ key, event }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">{event.title}</h3>
      <h3 className="mb-4 text-sm text-center">
        Colavoraste con: {event.collaborations}
      </h3>

      <div className="flex justify-end">
        {!event.close ? (
          <h3 className="mb-4 text-sm font-bold text-center">
            * ¡Este evento no ha finalizado!
          </h3>
        ) : (
          <button
            className="bg-green-300 mt-2 text-black font-semibold px-4 py-1 rounded hover:text-white hover:bg-green-400"
            onClick={() => alert('Próximamente')}
          >
            Retirar ganancias
          </button>
        )}
      </div>
    </div>
  );
};

export default CollaborationCard;
