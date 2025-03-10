import styles from './header.module.scss'
import Image from "next/image";
import NavBar from "./Navbar";
import LanguageSelector from './LanguageSelector';
// import LanguageSwitcher from "./LanguageSwitcher";

// export default function Header() {
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerTop}>
        <div className={styles.logo}>
          <Image
            src="/images/logo_denda.png"
            alt="Logo"
            width={150}
            height={100}
            className={styles.logoImage}
          />
          <h1>Talo Food Truck</h1>
        </div>
        <div>
          <LanguageSelector />
        </div>
      </div>
      <div className={styles.containerBottom}>
        <NavBar />
      </div>
    </header>
  )
}

export default Header;