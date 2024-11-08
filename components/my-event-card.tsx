import Image from 'next/image';
import { FC } from 'react';
import { EventData } from '@/app/utils/event-data';

interface Props {
  key: number;
  event: EventData;
}

const MyEventCard: FC<Props> = ({ event }) => {
  return (
    <div className="bg-gray-200 p-2 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">{event.title}</h3>

      <div className="flex gap-2 justify-center ">
        <div className="flex flex-col w-96 ">
          <div className="bg-white text-xs  px-4 py-2 rounded basis-[50%]">
            <p className="font-semibold pb-2"> Bóveda de evento</p>
            <div className="flex flex-col justify-center">
              <p className="px-1">Precio token: {event.token_price}</p>
              <p className="px-1">Colaboradores: {event.collaborators}</p>
              <p className="px-1">
                Total: {(event.token_price * event.collaborators).toFixed(2)}
              </p>
            </div>
          </div>
          <button
            className="bg-indigo-300 mt-2 text-black font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400"
            onClick={() => alert('Próximamente')}
          >
            Retirar fondos
          </button>
        </div>
        <div className="flex flex-col w-96">
          <div className="bg-white text-xs  px-4 py-2 rounded basis-[50%] ">
            <p className="font-semibold pb-2"> Bóveda de ganancias</p>
            <div className="flex flex-col justify-center">
              <p className="px-1">Precio ticket: {event.ticket_price}</p>
              <p className="px-1">Tockets vendidos: {event.ticketsSold}</p>
              <p className="px-1">
                Total: {(event.ticket_price * event.ticketsSold).toFixed(2)}
              </p>
            </div>
          </div>
          {event.close && (
            <button
              className="bg-red-300 mt-2 text-black font-semibold px-4 py-1 rounded hover:text-white hover:bg-red-400"
              onClick={() => alert('Próximamente')}
            >
              Cerrar evento
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEventCard;
