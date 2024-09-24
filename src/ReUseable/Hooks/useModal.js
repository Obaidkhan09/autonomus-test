import { createContext, useState, useContext, useCallback } from 'react';

// Create the context
const ModalContext = createContext();

// Provider component that will wrap the app
export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState({ isVisible: false, content: {} });

  const showModal = useCallback((content) => {
    setModalData({ isVisible: true, content });
  }, []);

  const closeModal = useCallback(() => {
    setModalData({ isVisible: false, content: {} });
  }, []);

  return (
    <ModalContext.Provider value={{ modalData, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use modal context
export const useModal = () => useContext(ModalContext);