import type React from 'react';
import type { ScriptProps } from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.scss';

const Navbar: React.FC<ScriptProps> = () => {
  return (
    <div className={styles.nav__container}>
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
