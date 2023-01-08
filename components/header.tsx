import { useTranslations } from "next-intl";
import { useContext } from "react";
import { Session } from "../pages/_app";
import Image from "next/image";
import Text from "./lowlevel/text"
import Navigation from "./navigation";

export default function Header() {
  const t = useTranslations("Header");
  const sessionUser = useContext(Session);

  return (
    <header className="grid grid-cols-5 bg-slate-100 border-b-2 border-slate-400">
      <Text as="h1" variant="h1" weight="bold" className="col-start-2 p-4">
        {t("head")}
      </Text>

      <Navigation />

      <section className="content flex p-3">
        <Image
          src={sessionUser.portraitUrl || ""}
          alt={sessionUser.firstName || ""}
          className="rounded-full" width="50" height="50" />

        <div className="item-body px-2">
            <Text as="p" variant="h5" weight="bold">
                {sessionUser.firstName} {sessionUser.lastName}
            </Text>
            <Text as="p" variant="p" color="grey">
                {t("starredRooms", { numberStarred: sessionUser.starredRooms.length })}
            </Text>
        </div>
      </section>
      
    </header>
  );
}