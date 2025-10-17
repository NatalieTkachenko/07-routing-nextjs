import { fetchNoteById } from '@/lib/api';
import css from './NotePreview.module.css';

import Modal from '@/components/Modal/Modal';

interface ModalPageProps {
  params: Promise<{ id: string }>;
}

export default async function ModalPage({ params }: ModalPageProps) {
  const { id } = await params;
  const data = await fetchNoteById(id);

  return (
    <Modal>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{data?.title}</h2>
          </div>
          <p className={css.content}>{data?.content}</p>
          <p className={css.date}>{data?.createdAt}</p>
        </div>
      </div>
    </Modal>
  );
}
