import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import Text from "./lowlevel/text";


// get static props why??


export default function Navigation() {
  const t = useTranslations("Navigation");
  const router = useRouter();

  return (
    <div className="content flex mt-3">

      <Link href="/rooms" className="pr-3">
        <Text
          as="p"
          variant="p"
          color="default"
          weight="bold"
          className={
            router.pathname == "/rooms"
              ? "p-3 rounded-lg, bg-slate-200"
              : "pt-3" }>
            {t("cabins")}
          </Text>
      </Link>
      
      <Link href="/create">
          <Text
          as="p"
          variant="p"
          color="default"
          weight="bold"
          className={
            router.pathname == "/create"
              ? "p-3 rounded-lg, bg-slate-200"
              : "pt-3" }>
            {t("addCabin")}
          </Text>
      </Link>
    </div>
  );
}