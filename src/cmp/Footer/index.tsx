import type { ScriptProps } from 'next/script';
import Image from 'next/image';

import FacebookIcon from '../icons/facebookIcon';
import InstagramIcon from '../icons/instagramIcon';
import TikTokIcon from '../icons/tiktokIcon';

import styles from './index.module.scss';

const Footer: React.FC<ScriptProps> = () => {
  // to do change shadow depends on router
  return (
    <div className={styles.footer__containerWithShadow}>
      <div className={styles.footerSection__container}>
        <div className={styles.footerCol1__container}>
          <Image src="/logo.png" width={200} height={60} alt="logo" />
          <p>
            Eu conubia ullamcorper magna hac posuere justo. Ridiculus ligula
            tortor semper nam lacus ornare congue vulputate accumsan etiam.
          </p>
          <div className={styles.footerSocialMeida__container}>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <TikTokIcon />
            </div>
          </div>
        </div>
        <div className={styles.footerCol2__container}>
          <p>Useful Links</p>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.footerCol3__container}>
          <p>Services</p>
          <ul>
            <li>Exterior Design</li>
            <li>Family Furniture</li>
            <li>Office Furniture</li>
            <li>Kitchen Furniture</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__creators}>
        <p>
          Copyright © 2022 StaloveDebowe, All rights reserved. Powered by
          CoffeeCode
        </p>
      </div>
    </div>
  );
};

export default Footer;

/* <div className={styles.logo_container}>
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
</ul> */
