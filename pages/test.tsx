
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function Test() {
  const { t } = useTranslation("Test");
  return (
    <>
      <div>{t("test2")}</div>
      <Link href={'/'}>ホームに戻る</Link>
    </>
  );
}

export default Test;
