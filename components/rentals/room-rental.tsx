import { Room } from "../../types";
import Image from 'next/image';
import ImageLabel from "../lowlevel/image-label";
import RentableContent from "./specific-rentals/rentable-content";
import PurchasableContent from "./specific-rentals/purchasable-content";
import AdContent from "./specific-rentals/ad-content";

type RoomRentalProps = {
    specificRoom: Room;
}

export default function RoomRental({specificRoom}: RoomRentalProps) {
    
    function generateRentalContent() {
        switch(specificRoom.type){
            case "rentable":
                return <RentableContent specificRoom={specificRoom} />;
            case "purchasable":
                return <PurchasableContent specificRoom={specificRoom} />
            case "advertised":
                return <AdContent specificRoom={specificRoom} />

        }
    }

    return (
        <div className="border-2 border-slate-200">
            <div className="relative">
                <Image src={specificRoom.heroUrl} alt={specificRoom.title} className="h-48 w-72" width="216" height="324"/>
                <ImageLabel room={specificRoom} />
            </div>

            <div>
                {generateRentalContent()}
            </div>
        </div>
    )
}