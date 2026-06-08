'use client';

import { KeyboardEvent, useState } from 'react';
import styles from './Admin.module.css';

type Props = {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
};

export default function TagInput({ value, onChange, placeholder = 'Add tag, press Enter' }: Props) {
  const [input, setInput] = useState('');

  function addTag() {
    const trimmed = input.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setInput('');
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    } else if (e.key === 'Backspace' && !input && value.length) {
      onChange(value.slice(0, -1));
    }
  }

  function removeTag(tag: string) {
    onChange(value.filter((t) => t !== tag));
  }

  return (
    <div>
      <div className={styles.tagList}>
        {value.map((tag) => (
          <span key={tag} className={styles.tagItem}>
            {tag}
            <button className={styles.tagRemove} onClick={() => removeTag(tag)} type="button">×</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        className={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
        onBlur={addTag}
        placeholder={placeholder}
      />
    </div>
  );
}
