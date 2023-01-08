import { PurchasableRoom } from "../../../types";
import Text from "../../lowlevel/text";

type PurchasableContentProps = {
  specificRoom: PurchasableRoom;
};

export default function PurchasableContent({
  specificRoom,
}: PurchasableContentProps) {
  const price = specificRoom.price;

  return (
    <div className="h-40">
      <article className="h-28">
        <Text as="h5" variant="h5" weight="bold" className="p-2 line-clamp-1">
          {specificRoom.title}
        </Text>

        <Text as="p" variant="p" color="grey" className="px-2 line-clamp-2">
          {specificRoom.description}
        </Text>
      </article>

      <section className="border-t-2 border-slate-200 p-2 text-right">
        <Text as="span" variant="small" color="grey">
          Buy at {price.currency}
        </Text>

        <Text as="span" variant="h2" color="primary" weight="bold">
          {price.amount}
        </Text>
      </section>
    </div>
  );
}