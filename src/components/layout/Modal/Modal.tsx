import React, { useRef } from "react";
import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { selectModalIsOpened } from "./+redux/modal.selectors";
import { closeModal } from "./+redux/modal.reducer";
import useScreen from "../../../app/hooks/useScreen";

export interface IModalBaseProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

interface IModalProps extends IModalBaseProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
  onClickAway?: () => void;
}

const Modal = (props: IModalProps) => {
  const { isPhone } = useScreen();

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => selectModalIsOpened(state));

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={() => {
        dispatch(closeModal());
      }}
      closeOnOverlayClick={!isPhone && props.closeOnOverlayClick}
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent
        className={props.className}
        maxWidth={isPhone ? "90%" : "75%"}
      >
        <ModalHeader paddingTop="64px" paddingBottom="36px">
          <Heading
            color={"blue"}
            fontSize={isPhone ? "26px" : "28px"}
            lineHeight={isPhone ? "32px" : "40px"}
            textAlign="center"
          >
            {props.closeOnOverlayClick}
            {props.title}
          </Heading>
        </ModalHeader>

        {props.closeOnOverlayClick && (
          <ModalCloseButton
            _focus={{ boxShadow: "none" }}
            onClick={() => dispatch(closeModal())}
          />
        )}

        <ModalBody padding={isPhone ? "0" : "0.5rem 1.5rem"}>
          {props.children}
        </ModalBody>

        {props.footer && (
          <ModalFooter padding="16px">{props.footer}</ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
