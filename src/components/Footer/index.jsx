import styles from "./Footer.module.css";

export const Footer = () => {
  const hrefData = {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const imgData = {
    src: "/vercel.svg",
    alt: "Vercel Logo",
  };

  return (
    <footer className={styles.footer}>
      <a href={hrefData.href} target={hrefData.target} rel={hrefData.rel}>
        Powered by{" "}
        <img src={imgData.src} alt={imgData.alt} className={styles.logo} />
      </a>
    </footer>
  );
};
