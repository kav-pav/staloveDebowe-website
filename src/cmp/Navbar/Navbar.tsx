import type React from 'react';
import type { ScriptProps } from 'next/script';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import ThemeBtn from '../themeButton/themeButton';
import LogoIcon from '../logo/logoIcon';

import styles from './Navbar.module.scss';

const Navbar: React.FC<ScriptProps> = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.nav__container}>
      <div className={styles.logo_container}>
        <Link href="/">
          <LogoIcon theme={theme} />
        </Link>
      </div>

      <ul className={styles.list__container}>
        <li>
          <Link href="/work">Work </Link>
        </li>
        <li>
          <Link href="/hire-me">Hire me</Link>
        </li>
        <li>
          <Link href="/about">About </Link>
        </li>
        <li>
          <ThemeBtn />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
