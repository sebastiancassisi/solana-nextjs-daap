import { SponsoredEvent as CollaborationCardProp } from "@/services/get-sponsored-events.service"
import { WithdrawEarningsFeature } from "./withdraw-earnings/withdraw-earnings.feature";



const CollaborationCard = (sponsoredEvent: CollaborationCardProp) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">{sponsoredEvent.event.account.name}</h3>
      <h3 className="mb-4 text-m text-center">
        Colavoraste con: {sponsoredEvent.tokens.toFixed(0)} tokens
      </h3>

      <div>
        {!sponsoredEvent.event.account.active ? (
          <div className="flex gap-6 justify-center">

            <WithdrawEarningsFeature
              publicKey={sponsoredEvent.event.publicKey}
              account={sponsoredEvent.event.account}
            />

          </div>
        ) : (
          <div className="flex gap-6 justify-center">
            <p className="font-bold mb-4 text-lg text-center text-orange-700">Este evento no ha finalizado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollaborationCard;
