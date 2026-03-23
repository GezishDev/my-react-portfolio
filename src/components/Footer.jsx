import { useTranslation } from "../context/LanguageContext";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>{t("footer.copyright").replace("{year}", year)}</p>
      </div>
    </footer>
  );
};

export default Footer;
