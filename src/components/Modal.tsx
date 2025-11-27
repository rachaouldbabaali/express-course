import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  onClose: () => void;
};

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
}: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-xl shadow-lg max-w-lg w-full mx-4">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="text-lg font-semibold">{title}</div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 rounded p-1"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-4 text-sm text-slate-700">{children}</div>

        <div className="p-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
