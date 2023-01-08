import { Collection, DbData, Room, SessionUser } from "../types";
import { JSONFile } from "lowdb/lib";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Text from "../components/lowlevel/text";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import db from "../db";
import RoomRental from "../components/rentals/room-rental";
import Pagination from "../components/pagination";
import { NumberParam } from "serialize-query-params";

type RoomsProps = {
  rooms: Collection<Room>;
  messages: JSONFile<DbData>;
  sessionUser: SessionUser;
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<RoomsProps>> {
  const data = await db.read();
  const numberParam = NumberParam.decode(context.query.page) || 1;
  const messages = (await import(`../messages/${context.locale}.json`)).default;

  // check if user entered wrong number by typing own query string
  if (numberParam > Math.ceil(data.rooms.length / 9)) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      rooms: {
        nodes: data.rooms.slice((numberParam - 1) * 9, numberParam * 9),
        page: {
          number: numberParam,
          size: data.rooms.length,
          totalElements: data.rooms.length,
          totalPages: Math.ceil(data.rooms.length / 9),
        },
      },
      messages: messages,
      sessionUser: data.sessionUser
    },
  };
}

export default function Rooms({ rooms }: RoomsProps) {
  const router = useRouter();
  const t = useTranslations("Rooms");
  const roomData = rooms.page;

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <div className="mt-20 mb-5 ml-80">
        <Text as="p" variant="p">
          {t("pages", {
            firstNumber: roomData.number,
            secondNumber: roomData.totalPages,
            total: roomData.totalElements,
          })}
        </Text>
      </div>

      <div className="grid w-7/12 grid-cols-1 lg:grid-cols-2 lg:max-w-screen-sm 2xl:grid-cols-3 2xl:max-w-4xl place-items-center gap-4  mx-auto">
        {rooms.nodes.map((room: Room) => (
          <div className="w-72" key={room.id}>
            <RoomRental specificRoom={room} />
          </div>
        ))}
      </div>

      <Pagination
        page={NumberParam.decode(router.query.page) || 1}
        pageData={rooms.page}
      />
    </>
  );
}