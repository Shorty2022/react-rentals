import { useTranslations } from "next-intl";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import usePromised from "use-promised";
import HttpError from "../utils/http-error";
import { Session } from "./_app";
import Text from "../components/lowlevel/text";
import Form from "../components/create/form";
import SubmitPromise from "../utils/submit-promise";
import { GetServerSidePropsContext } from "next";
import db from "../db";
import { RentableRoom, SessionUser } from "../types";
import CreateService from "../services/CreateService";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = await db.read();
  const messages = (await import(`../messages/${context.locale}.json`)).default;

  return {
    props: {
      messages: messages,
      sessionUser: data.sessionUser,
    },
  };
}

export default function Create() {
  const t = useTranslations("Create");
  const router = useRouter();
  const [switchState, setSwitchState] = useState(false);
  const [submitPromise, setSubmitPromise] = usePromised<void, HttpError>();
  const sessionUser = useContext(Session);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const input = {
        type: "rentable" as RentableRoom["type"],
        owner: sessionUser as SessionUser,
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        heroUrl: formData.get("heroUrl") as string,
        featured: switchState as boolean
    }
    
    const promise = CreateService.post(input)
        .then(() => router.replace("/rooms?page=1")
        .then(() => form.reset()));

    setSubmitPromise(promise);    
  }

  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <div className="ml-80 mt-14">
        <Text as="h5" variant="h1" color="default" weight="bold">
          {t("title")}
        </Text>

        <form onSubmit={onSubmit} method="post">
          <Form setSwitchState={setSwitchState} submitPromise={submitPromise} />
          <SubmitPromise submitPromise={submitPromise} />
        </form>
      </div>
    </>
  );
}
