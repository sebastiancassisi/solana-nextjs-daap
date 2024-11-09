import { DECIMALS_PER_USDC } from "@/utils/solana";
import { CloseEventFeature } from "./close-event/close-event.feature";
import { EventAccount } from "@/services/get-events.service";
import { WithdrawFundsFeature } from "./withdraw-funds/withdraw-funds.feature";


const MyEventCard = (myEvent: EventAccount) => {
  return (
    <div className="bg-gray-200 p-2 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">{myEvent.account.name}</h3>

      <div className="flex gap-2 justify-center ">
        <div className="flex flex-col w-96 ">
          <div className="bg-white text-xs  px-4 py-2 rounded basis-[50%]">
            <p className="font-semibold pb-2"> Bóveda de evento</p>
            <div className="flex flex-col justify-center">
              <p className="px-1">Precio token: {1}</p>
              <p className="px-1">Colaboradores: {myEvent.account.sponsors.toNumber().toFixed(0)}</p>
              <p className="px-1">
                Total: {(myEvent.account.treasuryVaultTotal.toNumber() / DECIMALS_PER_USDC).toFixed(0)}
              </p>
            </div>
          </div>
          <WithdrawFundsFeature
            publicKey={myEvent.publicKey}
            account={myEvent.account}
          />
        </div>
        <div className="flex flex-col w-96">
          <div className="bg-white text-xs  px-4 py-2 rounded basis-[50%] ">
            <p className="font-semibold pb-2"> Bóveda de ganancias</p>
            <div className="flex flex-col justify-center">
              <p className="px-1">Precio ticket: {myEvent.account.ticketPrice.toNumber().toFixed(0)}</p>
              <p className="px-1">Tockets vendidos: {myEvent.account.ticketsSold.toNumber().toFixed(0)}</p>
              <p className="px-1">
                Total: {(myEvent.account.gainVaultTotal.toNumber() / DECIMALS_PER_USDC).toFixed(0)}
              </p>
            </div>
          </div>
          {
          myEvent.account.active && (
            <CloseEventFeature
              publicKey={myEvent.publicKey}
              account={myEvent.account} />
          )
        }
        </div>
      </div>
    </div>
  );
};

export default MyEventCard;
