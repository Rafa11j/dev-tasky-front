import React, { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useClickOutside } from '../../../hooks/clickOutside';

import {
  Container,
  Content,
  ModalTitle,
  CloseButtonContainer,
  ModalBody,
} from './styles';

interface ModalProps {
  title?: string;
  open: boolean;
  closeModal(): void;
}

export const Modal: React.FC<ModalProps> = props => {
  const { title, open, closeModal, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside({ action: closeModal, ref: modalRef });

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <>
      {isOpen && (
        <Container>
          <Content ref={modalRef} className={`${isOpen && 'open'}`}>
            <ModalTitle>
              <h2>{title}</h2>
              <CloseButtonContainer onClick={closeModal}>
                <MdClose size={22} />
              </CloseButtonContainer>
            </ModalTitle>
            <ModalBody>{children}</ModalBody>
          </Content>
        </Container>
      )}
    </>
  );
};
