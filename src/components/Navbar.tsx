'use client'

// import React, {useState} from "react";
import React from 'react';
import styles from './navbar.module.scss'
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

const NavBar: React.FC = () => {
  const t = useTranslations('Navbar')
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav id="nav" className={styles.main_nav}>
      <Link href={'/'} className={styles.link}>{t('inicio')}</Link>
      <Link href={'/main'} className={styles.link}>{t('historia')}</Link>
      <Link href={'/menu'} className={styles.link}>{t('menu')}</Link>
      <Link href={'/about'} className={styles.link}>{t('about')}</Link>
    </nav>
  )
}

export default NavBar;
