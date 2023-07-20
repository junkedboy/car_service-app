import React, { useState } from 'react';

const useConfirmation = () => {
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null);
  
    const openConfirmation = (action) => {
      setConfirmAction(action);
      setConfirmationOpen(true);
    };
  
    const handleConfirm = () => {
      if (confirmAction) {
        confirmAction();
        setConfirmAction(null);
      }
      setConfirmationOpen(false);
    };
  
    const handleCancel = () => {
      setConfirmAction(null);
      setConfirmationOpen(false);
    };
  
    return {
      isConfirmationOpen,
      openConfirmation,
      handleConfirm,
      handleCancel,
    };
  };
  
  const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal">
        <p>{message}</p>
        <button onClick={onConfirm}>Так</button>
        <button onClick={onCancel}>Ні</button>
      </div>
    );
  };
  
  const ButtonWithConfirmation = ({ onClick, label }) => {
    const { openConfirmation } = useConfirmation();
  
    const handleClick = () => {
      openConfirmation(onClick);
    };
  
    return (
      <>
        <button onClick={handleClick}>{label}</button>
        <ConfirmationModal
          isOpen={isConfirmationOpen}
          message="Ви впевнені, що хочете продовжити?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </>
    );
  };