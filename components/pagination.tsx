import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import router from "next/router";
import { CollectionPage } from "../types";
import Button from "./lowlevel/button";
import Text from "./lowlevel/text";

type PaginationProps = {
    page: number;
    pageData: CollectionPage;
}

// static props

export default function Pagination({page, pageData}: PaginationProps){
    const t = useTranslations("Pagination");
    
    return (
        <div className="flex item-center justify-center my-10">
            <Button disabled={Number(page) === 1} variant="thirdly" aria-label={t("previous")}
                onClick={() => { router.push(`/rooms?page=${page - 1}`); }}>
                <ArrowLeftIcon className="h-6 w-6"/>
            </Button>

            <Text as="p" variant="p" color="default" className="px-5">
                {t('pages', {firstNumber: pageData.number, secondNumber: pageData.totalPages, total: pageData.totalElements})}
            </Text>

            <Button disabled={Number(page) === pageData.totalPages} 
                variant="thirdly" aria-label={t("next")} 
                onClick={() => { router.push(`/rooms?page=${page + 1}`);}}>
                <ArrowRightIcon className="h-6 w-6"/>
            </Button>
        </div>
    )
}