/* =======================================
 * モーダルコンポーネント
 * src/components/common/Modal.tsx
 * Referenced in:src/components/Top/BlockForm.tsx
 * Created: 2025-10-13
 * Last updated: 2025-10-13
 * ======================================= */
'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ariaLabelledby?: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, ariaLabelledby, children }: ModalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  // クライアントマウント後に portal の描画先を取得（SSG/SSR 安全）
  useEffect(() => {
    setContainer(document.getElementById('modal-root'));
  }, []);

  // Esc キーで閉じる
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !container) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledby}
      className="modalOverlay"
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          type="button"
          className="modalClose"
          aria-label="閉じる"
          onClick={onClose}
        >
          閉じる
        </button>
      </div>
    </div>,
    container
  );
};

export default Modal;
