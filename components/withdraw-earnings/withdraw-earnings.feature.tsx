import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solana";
import { EventAccount } from '@/services/get-events.service';
import { withdrawEarnings } from '@/services/withdraw-earnings.service';

export function WithdrawEarningsFeature(event: EventAccount) {
  const {publicKey} = useWallet()
  const program = useEventManagerProgram();
  const eventPublicKey = event.publicKey;

  const withdraw = async () => {
    try {
        console.log(event)
        await withdrawEarnings({ program, publicKey, eventPublicKey })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
    <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded  hover:bg-green-600"
                onClick={withdraw}>
          Retirar Ganancias 
        </button>
    </>
  );
};