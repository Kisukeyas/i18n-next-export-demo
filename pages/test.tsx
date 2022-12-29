import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function Test() {
  const { t } = useTranslation("Test");
  return (
    <>
      <div>{`現在の言語 ${localStorage.getItem(`i18nextLng`)}`}</div>
      <div>{t("test2")}</div>
      <Link href={"/"}>Homeに戻る</Link>
    </>
  );
}

export default Test;
