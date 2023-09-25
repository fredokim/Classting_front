import { useState, useEffect } from "react";

type UseModalReturn = [
  boolean,
  () => void,
  Element | null,
  boolean,
  () => void
];

const useModal = (): UseModalReturn => {
  let [modal, setModal] = useState(false);
  let [portalElement, setPortalElement] = useState<Element | null>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [modal]);

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        setModal(false);
        setClosing(false);
      }, 300);
    }
  }, [closing]);

  const handleClose = () => {
    setClosing(true);
  };

  const modalHandler = () => {
    setModal((prevModal) => !prevModal);
  };

  return [modal, modalHandler, portalElement, closing, handleClose];
};

export default useModal;
