import { useTranslations } from "next-intl";
import { PromiseData } from "use-promised";
import HttpError from "./http-error";
import Text from "../components/lowlevel/text";
import { getReasonPhrase } from "http-status-codes";

type SubmitPromiseProps = {
  submitPromise: PromiseData<void, HttpError>;
};

export default function SubmitPromise({ submitPromise }: SubmitPromiseProps) {
  const t = useTranslations("Promise");

  return (
    <>
      {submitPromise.pending && (
        <Text as="p" variant="p" color="default">
          {t("loading")}
        </Text>
      )}

      {submitPromise.rejected && (
        <span>
          <Text as="p" variant="p" color="default">
            {t("errorOccured")}
          </Text>

          {(submitPromise.error.status && (
            <Text as="p" variant="p" color="default">
              {getReasonPhrase(submitPromise.error.status)}
            </Text>

          )) || (

            <Text as="p" variant="p" color="default">
              {t("offline")}
            </Text>
          )}
        </span>
      )}
    </>
  );
}