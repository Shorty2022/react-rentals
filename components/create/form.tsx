import { useTranslations } from "next-intl";
import React from "react";
import { PromiseData } from "use-promised";
import HttpError from "../../utils/http-error";
import FormItem from "./form-item";
import Text from "../../components/lowlevel/text";
import Button from "../lowlevel/button";
import Switch from "./switch";

type FormProps = {
    setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;
    submitPromise: PromiseData<void, HttpError>
}

export default function Form({setSwitchState, submitPromise}: FormProps){
    const t = useTranslations("FormInput");
    
    return (
        <>
            <div className="mt-11 grid gap-4 grid-cols-2 grid-rows-2 w-8/12">
                <FormItem id="title" textName={t("formTitle")} submitPromise={submitPromise} />

                <FormItem id="description" textName={t("formDescription")} submitPromise={submitPromise} />

                <FormItem id="heroUrl" textName={t("formHeroImageUrl")} submitPromise={submitPromise} />

                <div>
                    <label htmlFor="switchState" className="block">
                        <Text as="p" variant="p" weight="bold">
                            {t("formFeatured")}
                        </Text>

                        <Switch setSwitchState={setSwitchState}
                                submitPromise={submitPromise}
                                aria-label={t("Featured")}
                                label={t("Featured")} />
                    </label>
                </div>

                <Button aria-label={t("AddCabin")}
                        variant="secondary"
                        className="mt-8 w-28"
                        disabled={submitPromise.pending} >
                        {t("formAddCabin")}
                </Button>

            </div>
        </>
    )
}