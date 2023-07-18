import type React from 'react';
import { useState, useEffect } from 'react';
import type { ScriptProps } from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.scss';

const Navbar: React.FC<ScriptProps> = () => {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY <= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  });

  return (
    <div
      className={
        colorChange ? styles.nav__container : styles.nav__container__BG
      }
    >
      <div className={styles.logo_container}>
        <Link href="/">
          <Image src="/logo.png" width={200} height={60} alt="logo" />
        </Link>
      </div>
      <ul className={styles.list__container}>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
