import type { FC } from 'react';
import Image from 'next/image';

import ServiceCard from '@/cmp/service-card';
import InfoServices from '@/cmp/info-service';
import Icon24h from '@/cmp/icons/availableIcon';
import CarouselSection from '@/cmp/carousel-section';

import styles from './index.module.scss';

const AboutUs: FC<{}> = () => {
  return (
    <div>
      <div className={styles.global__imgContainer}>
        <Image
          className={styles.global__img}
          src="/about-us.jpg"
          alt="Carpenter working"
          fill
        />
        <div className={styles.global__imgGradient} />
      </div>
      <div className={styles.aboutUs__container}>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctusnec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctusnec
          ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctusnec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className={styles.aboutUs__servicesContainer}>
        <div className={styles.aboutUs__servicesTextContainer}>
          <h2>Our Service</h2>
          <p>
            What We Provide For You check now and deside it do you want now this
          </p>
        </div>

        <div className={styles.aboutUs__servicesWrapper}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      <div className={styles.aboutUs__whyContainer}>
        <div className={styles.aboutUs__whyContainerImg}>
          <Image
            className={styles.global__img}
            src="/whyUs.png"
            alt="Carpenter working"
            fill
          />
        </div>
        <div className={styles.aboutUs__whyContainerText}>
          <h2>Why Choose Us?</h2>
          <p>
            Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt
            labore et dolore magna aliqua enim ad minim veniam quis nostrud
            exercitation ullamco laboris nisi ut aliquip exea commodo
            consequat.duis aute irure dolor in reprehen derit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur cepteur sint occaecat.
          </p>

          <div className={styles.aboutUs__whyContainerIcons}>
            <InfoServices icon={<Icon24h />} title="Available 24/7">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </InfoServices>
            <InfoServices icon={<Icon24h />} title="Available 24/7">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </InfoServices>
            <InfoServices icon={<Icon24h />} title="Available 24/7">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </InfoServices>
            <InfoServices icon={<Icon24h />} title="Available 24/7">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </InfoServices>
          </div>
        </div>
      </div>
      <div className={styles.carousel__background}>
        <div className={styles.carousel__container}>
          <h1>What Clients Says</h1>
          <p>You read our clients review check this now</p>
        </div>
        <CarouselSection />
      </div>
    </div>
  );
};

export default AboutUs;
