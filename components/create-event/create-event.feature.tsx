import { useState } from 'react';
import CreateEventModal, { EventFormInputs } from './create-event.ui';
import { createEvent } from '../../services/create-event.service';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solana";

export function CreateEventFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const { publicKey } = useWallet();
  const program = useEventManagerProgram();

  const onSubmit = async ({ name, price }: EventFormInputs) => {
    setisLoading(!isLoading);
    try {
      await createEvent({ name, price, program, publicKey })
    } catch (e) {
      console.error(e)
    } finally {
      setisLoading(!isLoading);
      setIsModalOpen(!isModalOpen);
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 w-40 text-white mt-5 font-semibold px-4 py-1 rounded  hover:bg-blue-600"
      >
        Crear Evento
      </button>

      <CreateEventModal
        isOpen={isModalOpen}
        loading={isLoading}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};