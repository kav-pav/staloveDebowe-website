import type { FC } from 'react';
import type { ScriptProps } from 'next/script';

import Button from '../Button';

import styles from './index.module.scss';

const Form: FC<ScriptProps> = () => {
  return (
    <div className={styles.form__container}>
      <div className={styles.formInputs__container}>
        <input />
        <input />
        <textarea />
        <Button>SUBMIT NOW</Button>
      </div>
    </div>
  );
};

export default Form;
