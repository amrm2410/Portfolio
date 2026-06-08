'use client';

import styles from './Admin.module.css';

type Props = {
  title: string;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog({ title, text, onConfirm, onCancel }: Props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <p className={styles.dialogTitle}>{title}</p>
        <p className={styles.dialogText}>{text}</p>
        <div className={styles.dialogActions}>
          <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={onCancel}>Cancel</button>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            style={{ background: '#dc2626' }}
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
