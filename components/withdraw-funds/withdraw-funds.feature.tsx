import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solana";
import { EventAccount } from '@/services/get-events.service';
import { withdrawFunds } from '@/services/withdraw-funds.service';
import WithdrawFundsModal, { WithdrawFundsFormInputs } from './withdraw-funds.ui';

export function WithdrawFundsFeature(event: EventAccount) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {publicKey} = useWallet()
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;

  const onSubmit = async ({ amount }: WithdrawFundsFormInputs) => {
    setisLoading(!isLoading);
    try {
        console.log(event)
        await withdrawFunds({ amount, program, publicKey, eventPublicKey })
    } catch (e) {
      console.error(e)
    } finally {
      setisLoading(!isLoading);
      setIsModalOpen(!isModalOpen);
    }
  }

  return (
    <>
    <button className="bg-green-500 mt-2 text-white font-semibold px-4 py-2 rounded  hover:bg-green-600"
                onClick={() => setIsModalOpen(true)}>
          Retirar Fondos 
        </button>
      <WithdrawFundsModal
        isOpen={isModalOpen}
        loading={isLoading}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};