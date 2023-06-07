import type { FC, ReactNode } from 'react';

import styles from './index.module.scss';

interface InfoAtomProps {
  icon: ReactNode;
  children: ReactNode;
}

const InfoAtom: FC<InfoAtomProps> = ({ icon, children }) => {
  return (
    <div className={styles.InfoAtom__container}>
      <div className={styles.InfoAtom__icon}>{icon}</div>
      <div className={styles.InfoAtom__text}>{children}</div>
    </div>
  );
};

export default InfoAtom;
