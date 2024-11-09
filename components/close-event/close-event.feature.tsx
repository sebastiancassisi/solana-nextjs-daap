import { useState } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solana";
import { EventAccount } from '@/services/get-events.service';
import { closeEvent } from '@/services/close-event.service';
import CloseEventModal from './close-event.ui';

export function CloseEventFeature(event: EventAccount) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {publicKey} = useWallet()
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;

  const onSubmit = async () => {
    setisLoading(!isLoading);
    try {
        console.log(event)
        await closeEvent({ program, publicKey, eventPublicKey })
    } catch (e) {
      console.error(e)
    } finally {
      setisLoading(!isLoading);
      setIsModalOpen(!isModalOpen);
    }
  }

  return (
    <>
    <button className="bg-red-500 mt-2 text-white font-semibold px-4 py-2 rounded  hover:bg-red-600"
                onClick={() => setIsModalOpen(true)}>
          Cerrar Evento 
        </button>
      <CloseEventModal
        isOpen={isModalOpen}
        loading={isLoading}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};