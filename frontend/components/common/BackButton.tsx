'use client';

import { useRouter } from 'next/navigation';
import './BackButton.css';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="back-button" aria-label="Go back">
      <i className="fas fa-arrow-left"></i>
    </button>
  );
};

export default BackButton;
