import React from "react"
import { css } from "emotion";
import { Colors } from "../../consts";

interface InputTextProps {
    label: string
    variant: "green" | "white"
}

export const InputText: React.FC<InputTextProps> = ({label, variant}) => {
    return(
        <div className={inputContainer(variant)}>
                <input 
                placeholder={label}
                className={input(variant)} type="text"/>
        </div>
    )
};

const inputContainer = (color: string) => css({
    borderBottom: `3px solid ${color === Colors.white ? Colors.white : Colors.greenDark}`,
    width: "100%"
});

const input = (color: string) => css({
    background: "transparent",
    outline:"none",
    border: "none",
    width: "100%",
    color: color === Colors.white ? Colors.white : Colors.greenDark ,
    fontFamily: "Mansalva",
    fontSize: "1.5em",
    "&::placeholder": {
        color: color === Colors.white ? Colors.white : Colors.greenDark
    }
})
