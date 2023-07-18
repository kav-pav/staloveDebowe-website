import type { FC } from 'react';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import SlideCarousel from '../slide-carousel';

import styles from './index.module.scss';

const ArrowRight: FC<{}> = () => {
  return <div className={styles.slideCarousel__arrowRight} />;
};

const ArrowLeft: FC<{}> = () => {
  return <div className={styles.slideCarousel__arrowLeft} />;
};

const CarouselSection: FC<{}> = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      // dotsNav={{
      //   show: true,
      //   itemBtnProps: {
      //     style: {
      //       height: 16,
      //       width: 16,
      //       borderRadius: '50%',
      //       border: 0,
      //     },
      //   },
      //   activeItemBtnProps: {
      //     style: {
      //       height: 16,
      //       width: 16,
      //       borderRadius: '50%',
      //       border: 0,
      //       background: 'white',
      //     },
      //   },
      // }}
      forwardBtnProps={{
        // here you can also pass className, or any other button element attributes
        style: {
          alignSelf: 'center',
          background: '#ab7442',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '20px',
          height: 40,
          lineHeight: 1,
          textAlign: 'center',
          position: 'relative',
          width: 40,
          marginLeft: 30,
        },
        children: <ArrowRight />,
      }}
      backwardBtnProps={{
        // here you can also pass className, or any other button element attributes
        style: {
          alignSelf: 'center',
          background: '#ab7442',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '20px',
          height: 40,
          lineHeight: 1,
          textAlign: 'center',
          position: 'relative',
          width: 40,
          marginRight: 30,
        },
        children: <ArrowLeft />,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
          minWidth: 768,
        },
      ]}
      speed={400}
      easing="linear"
    >
      {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}

      <SlideCarousel />
      <SlideCarousel />
      <SlideCarousel />
      <SlideCarousel />
    </ReactSimplyCarousel>
  );
};

export default CarouselSection;
