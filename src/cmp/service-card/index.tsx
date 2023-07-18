import type { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const ServiceCard: FC<{}> = () => {
  return (
    <div className={styles.serviceCard__container}>
      <div className={styles.serviceCardImg__container}>
        <Image
          className={styles.global__img}
          src="/serviceOne.png"
          alt="Projecting on board"
          fill
        />
      </div>
      <div className={styles.serviceCardText__container}>
        <div>General Carpentry</div>
        <p>
          Professionals work with a variety of all materials, in a variety of
          settings–indoor and outdoor.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
