import React from "react";
import * as S from "./styles";
import close from "../../../icons/close.svg";
import Title from "../Title";

export type ModalInfoProps = {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
};

const ModalInfo = React.forwardRef<HTMLDivElement, ModalInfoProps>(
  ({ title = "", onClose, children, width }, ref) => {
    return (
      <S.ModalContainer
        $width={width}
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        autoFocus
      >
        <S.Header>
          <S.Position>
            <Title size="24px" description={title} />
          </S.Position>
          <S.Icon onClick={onClose} src={close} alt="image" />
        </S.Header>
        {children}
      </S.ModalContainer>
    );
  }
);

export default ModalInfo;
