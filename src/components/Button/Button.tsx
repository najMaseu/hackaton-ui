import React, { CSSProperties } from "react";
import { css, cx } from "emotion";
import { Colors } from '../../consts';

interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  style?: CSSProperties
  className?: string
  type?: 'button' | 'reset' | 'submit'
}

export const Button: React.FC<ButtonProps> = ({onClick, children, disabled, style, className, type="button"}) => (
  <button type={type} style={style} className={cx(buttonStyles, className)} disabled={disabled} onClick={onClick}>{children}</button>
);

const buttonStyles = css({
  display: 'block',
  background: Colors.greenDark,
  transitionDuration: '0.3s',
  border: "none",
  color: '#fff',
  fontWeight: 'lighter',
  fontSize: 32,
  padding: 20,
  fontFamily: "Mansalva",
  outline: "none",
  marginTop: 100,
  '&:hover': {
    opacity: 0.85,
  }
});
