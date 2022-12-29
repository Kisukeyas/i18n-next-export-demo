
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("Common");
  return (
    <>
      <h1>{t("test1")}</h1>
      <button onClick={() => i18n.changeLanguage("ja")}>日本語</button>
      <button onClick={() => i18n.changeLanguage("en")}>英語</button>
      <Link href={'/test'}>テストページへ</Link>
    </>
  );
}
