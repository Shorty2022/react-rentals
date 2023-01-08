import { Room } from "../../types";
import Text from "./text";
import { TagIcon } from "@heroicons/react/24/outline";

type ImageLabelProps = {
    room: Room;
  };
  
export default function ImageLabel({ room }: ImageLabelProps){

    function renderLabel(){
        if(room.type === "rentable" && room.featured === true){
            return (
                <div className="bg-slate-100 mt-1 mr-1">
                    <Text as="p" variant="p" color="primary"
                        className="p-0.5 font-semibold" transformation="uppercase" weight="bold">
                    Featured
                    </Text>
                </div>
            );

        } else if(room.type === "purchasable"){
            return (
                <Text as="p" className="bg-slate-100 rounded-full mt-1 mr-1 p-1" weight="bold">
                  <TagIcon className="h-6 w-6" />
                </Text>
            );

        } else if (room.type === "advertised") {
            return (
                <div className="bg-cyan-600 mt-1 mr-1">
                    <Text as="p" variant="p" color="white"
                          className="px-5" transformation="uppercase" weight="bold">
                      AD
                    </Text>
                </div>
            );
        }
    }

    return (
        <div className="absolute right-0 top-0 z-10">
        {renderLabel()}
        </div>
    );
}