'use client';

import { useEffect } from 'react';
import styles from './Admin.module.css';

type Props = {
  message: string;
  type: 'success' | 'error';
  onDone: () => void;
};

export default function Toast({ message, type, onDone }: Props) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`${styles.toast} ${type === 'success' ? styles.toastSuccess : styles.toastError}`}>
      {message}
    </div>
  );
}
