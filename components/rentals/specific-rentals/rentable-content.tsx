import { useTranslations } from "next-intl";
import { useContext } from "react";
import { Session } from "../../../pages/_app";
import { Id, RentableRoom } from "../../../types";
import Text from "../../lowlevel/text";
import Image from "next/image";
import clsx from "clsx";
import StarIcon from "@heroicons/react/24/outline/StarIcon";
import Button from "../../lowlevel/button";
import router from "next/router";
import usePromised from "use-promised";
import HttpError from "../../../utils/http-error";
import StarredService from "../../../services/StarredService";

type RentableContentProps = {
  specificRoom: RentableRoom;
};

export default function RentableContent({ specificRoom }: RentableContentProps) {
  const owner = specificRoom.owner;
  const sessionUser = useContext(Session);
  const [submitPromise, setSubmitPromise] = usePromised<boolean, HttpError>();
  const t = useTranslations("RentableContent");

  function toggleStarred(id: Id) {
   
    const index = sessionUser.starredRooms.indexOf(id);
    
    if(index != -1) {
      sessionUser.starredRooms.splice(index, 1);
    } else {
      sessionUser.starredRooms.push(id);
    }

    const promise = StarredService.post(sessionUser)
      .then(() => router.replace(router.asPath, undefined, {scroll: false}))

      setSubmitPromise(promise);
  }

  return (
    <div className="h-40">
      <article className="h-28">
        <Text as="h5" variant="h5" weight="bold" className="p-2 line-clamp-1">
          {specificRoom.title}
        </Text>

        <Text as="p" variant="p" className="px-2 line-clamp-2">
          {specificRoom.description}
        </Text>
      </article>

      <section className="border-t-2 border-slate-200 p-2">
        <Image src={owner.portraitUrl} alt={owner.firstName}
          className="rounded-full h-8 w-8 inline-block mr-3" width={500} height={500} />

        <Text as="p" variant="p" color="grey" className="inline-block">
          {owner.firstName}
        </Text>

        <Button variant="primary" className="float-right"
          aria-label={t("starred")} onClick={() => toggleStarred(specificRoom.id)}>

          <StarIcon className={clsx(
              "w-6 h-6", sessionUser.starredRooms.includes(specificRoom.id) &&
                "fill-cyan-500 stroke-cyan-500")} />
        </Button>
      </section>
    </div>
  );
}