import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Gezahegn Abera. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
