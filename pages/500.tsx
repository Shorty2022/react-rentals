import db from "../db";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Text from "../components/lowlevel/text";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const data = await db.read();
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    props: {
      messages: messages,
      sessionUser: data.sessionUser,
    },
  };
}

export default function Custom500() {
  const t = useTranslations("TranslationError");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <div className="text-center mt-48">
        <Text as="h1" variant="h1" weight="bold">
          {t("500")}
        </Text>
      </div>
    </>
  );
}