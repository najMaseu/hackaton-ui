import React, { ChangeEvent } from "react"
import { css } from "emotion";
import { Colors } from "../../consts";

interface InputTextProps {
    label: string
    variant: "green" | "white"
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

export const InputText: React.FC<InputTextProps> = ({label, variant, onChange, type="text"}) => {
    return(
        <div className={inputContainer(variant)}>
                <input 
                onChange={onChange}
                placeholder={label}
                className={input(variant)} 
                type={type}
                />
        </div>
    )
};

const inputContainer = (color: string) => css({
    borderBottom: `3px solid ${color === Colors.white ? Colors.white : Colors.greenDark}`,
    width: "100%",
    paddingBottom: "5px"
});

const input = (color: string) => css({
    background: "transparent",
    outline:"none",
    border: "none",
    width: "100%",
    height: "1.5em",
    fontFamily: "system-ui",
    fontWeight: "lighter",
    fontSize: "20px",
    color: color === Colors.white ? Colors.white : Colors.greenDark ,
    "&::placeholder": {
        color: color === Colors.white ? Colors.white : Colors.greenDark,
        fontFamily: "Mansalva",
        fontSize: "1.5em",
    }
})
