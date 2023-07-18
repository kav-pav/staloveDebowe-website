/* eslint-disable react/require-default-props */
import type { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

interface SlideCarouselProps {
  image?: string;
  text?: string;
  name?: string;
  city?: string;
}

const SlideCarousel: FC<SlideCarouselProps> = ({ image, text, name, city }) => {
  return (
    <div className={styles.slideCarousel__container}>
      <div className={styles.slideCarousel__containerWrapper}>
        <div className={styles.slideCarousel__sliderText}>
          Today we can tell you, thanks to your passion, hard work creativity,
          and expertise, you delivered us the most beautiful house ever! It’s
          been a beautiful ride, there were up’s and down’s, frustrations,
          delays at the same time great looks. keep touch with them.
        </div>
        <div className={styles.slideCarousel__signatureContainer}>
          <div className={styles.slideCarousel__iconQuoteContainer}>
            <Image src="/quoteSign.png" alt="Carpenter working" fill />
          </div>
          <div className={styles.slideCarousel__authorContainer}>
            <p className={styles.slideCarousel__author}>Jhon Zabrilla</p>
            <p className={styles.slideCarousel__city}>Newyark City</p>
          </div>
        </div>
        <div className={styles.slideCarousel__avatarContainer}>
          <Image
            className={styles.slideCarousel__avatar}
            src="/avatar.png"
            alt="Carpenter working"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default SlideCarousel;

// border-width
// border-style (required)
// border-color
