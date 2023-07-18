import type { ScriptProps } from 'next/script';
import type { FC } from 'react';
import Image from 'next/image';

import InfoAtom from '../info-blog';
import AvatarIcon from '../icons/avatarIcon';
import CalendarIcon from '../icons/calendarIcon';

import styles from './index.module.scss';

const BlogCard: FC<ScriptProps> = () => {
  return (
    <div className={styles.BlogCard__container}>
      <div className={styles.BlogCardImg__container}>
        <Image
          className={styles.img}
          src="/blogCard.png"
          alt="Carpenter working"
          fill
        />
      </div>
      <div className={styles.BlogCardContent__container}>
        <div className={styles.BlogCardInfo__container}>
          <InfoAtom icon={<AvatarIcon />}>Author</InfoAtom>
          <InfoAtom icon={<CalendarIcon />}>12-12-2023</InfoAtom>
        </div>
        <div className={styles.BlogCardText__container}>
          <h3>Home Repair and Maintenance safe now in the rantain.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim ad
            minim veniam.
          </p>
          <p>Read more</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
