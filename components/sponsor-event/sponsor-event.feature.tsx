import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solana";
import { EventAccount } from '@/services/get-events.service';
import { sponsorEvent } from '@/services/sponsor-event.service';
import SponsorEventModal, { SponsorFormInputs } from './sponsor-event.ui';

export function SponsorEventFeature(event: EventAccount) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const { publicKey } = useWallet()
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;

  const onSubmit = async ({ quantity }: SponsorFormInputs) => {
    setisLoading(!isLoading);
    try {
      console.log(event)
      await sponsorEvent({ quantity, program, publicKey, eventPublicKey })
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
        className="bg-green-500 text-white font-semibold px-4 py-2 rounded  basis-[50%]  hover:bg-green-600"
      >
        Colaborar

      </button>

      <SponsorEventModal
        isOpen={isModalOpen}
        loading={isLoading}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};