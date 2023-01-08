import { AdvertisedRoom } from "../../../types";
import Text from "../../lowlevel/text";

type AdContentProps = {
  specificRoom: AdvertisedRoom;
};

export default function AdContent({specificRoom}: AdContentProps){
    return (
        <div className="bg-cyan-600 h-40">
            <Text as="h5" variant="h5" color="white" weight="bold" className="p-2 line-clamp-2">
                {specificRoom.title}
            </Text>

            <Text as="p" variant="p" color="white" className="px-2 line-clamp-3">
                {specificRoom.description}
            </Text>
        </div>
    )
}