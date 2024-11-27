import React from 'react';

interface ModalProps {
  imageSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageSrc, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <img
          src={imageSrc}
          alt="Enlarged preview"
          className="max-w-full max-h-screen object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black rounded-full p-2"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
