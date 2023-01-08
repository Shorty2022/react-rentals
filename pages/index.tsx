import { GetServerSidePropsResult } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Text from "../components/lowlevel/text";
import db from "../db";
import { Collection, Room, SessionUser } from "../types";

type Props = {
  rooms: Collection<Room>;
  sessionUser: SessionUser;
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  const data = await db.read();

  return {
    props: {
      rooms: {
        nodes: data.rooms,
        page: {
          number: 0,
          size: data.rooms.length,
          totalElements: data.rooms.length,
          totalPages: 1,
        },
      },
      sessionUser: {
        id: data.sessionUser.id,
        firstName: data.sessionUser.firstName,
        lastName: data.sessionUser.lastName,
        portraitUrl: data.sessionUser.portraitUrl,
        starredRooms: data.sessionUser.starredRooms,
      },
    },
  };
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <div className="text-center mt-48">
        <Text as="h1" variant="h1" weight="bold">
          {t("content")}
        </Text>
      </div>
    </>
  );
}