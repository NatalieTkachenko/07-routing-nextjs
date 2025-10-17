'use client';
import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button className={css.backBtn} onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}
