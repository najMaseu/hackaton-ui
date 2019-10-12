import React, { CSSProperties } from "react";
import { css } from "emotion";

interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  style?: CSSProperties
}

export const Button: React.FC<ButtonProps> = ({onClick, children, disabled, style}) => (
  <button style={style} className={buttonStyles} disabled={disabled} onClick={onClick}>{children}</button>
);

const buttonStyles = css({
  display: 'block',
  background: "#3BAC40",
  transitionDuration: '0.3s',
  border: "none",
  maxWidth: "320px",
  minWidth: "220px",
  color: '#fff',
  fontWeight: 'lighter',
  fontSize: 32,
  padding: 20,
  fontFamily: "Mansalva",
  marginTop: 10,
  '&:hover': {
    opacity: 0.85
  }
});
