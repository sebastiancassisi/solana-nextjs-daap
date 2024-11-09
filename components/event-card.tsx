import { EventAccount } from "@/services/get-events.service";
import { SponsorEventFeature } from "./sponsor-event/sponsor-event.feature";
import { BuyTicketsFeature } from "./buy-tickets/buy-tickets.feature";


const EventCard = (event: EventAccount) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">
        {event?.account.name}
      </h3>

      <div className="flex gap-6 justify-center">
      <BuyTicketsFeature
          publicKey={event.publicKey}
          account={event.account} ></BuyTicketsFeature>
        <SponsorEventFeature 
          publicKey={event.publicKey}
          account={event.account} ></SponsorEventFeature>
      </div>
    </div>
  );
};

export default EventCard;
