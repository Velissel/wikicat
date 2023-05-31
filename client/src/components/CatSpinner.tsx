import React from 'react';
// @ts-ignore
import styles from './CatSpinner.module.scss';
// @ts-ignore
import logo from '../logo.svg';

interface CatSpinnerProps {
  label?: string;
}
export default function CatSpinner(props: CatSpinnerProps) {
  return (
    <div className={styles.spinner}>
      <div className={styles['spinner-header']}>
        <img src={logo} className={styles['spinner-logo']} alt="logo" />
        <p>{!props.label ? 'Loading...' : props.label}</p>
      </div>
    </div>
  );
}
