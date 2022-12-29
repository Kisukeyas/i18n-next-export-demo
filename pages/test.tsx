import React from "react";
import { useTranslation } from "react-i18next";

function Test() {
  const { t } = useTranslation("Test");
  return <div>{t("test2")}</div>;
}

export default Test;
