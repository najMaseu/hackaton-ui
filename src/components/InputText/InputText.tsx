import React, { ChangeEvent } from "react"
import { css } from "emotion";
import { Colors } from "../../consts";

interface InputTextProps {
    label: string
    variant: "green" | "white"
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean
}

export const InputText: React.FC<InputTextProps> = ({label, variant, onChange, type="text", required=false}) => {
    return(
        <div className={inputContainer(variant)}>
                <input 
                onChange={onChange}
                placeholder={label}
                className={input(variant)} 
                type={type}
                required={required}
                />
        </div>
    )
};

const inputContainer = (color: string = Colors.white) => css({
    borderBottom: `3px solid ${color === Colors.white ? Colors.white : Colors.greenDark}`,
    width: "100%",
    paddingBottom: "5px"
});

const input = (color: string = Colors.white) => css({
    background: "transparent",
    outline:"none",
    border: "none",
    width: "100%",
    height: "1.5em",
    fontFamily: "system-ui",
    fontWeight: "lighter",
    fontSize: "20px",
    color: color === Colors.white ? Colors.white : Colors.greenDark,
    "&::placeholder": {
        color: color === Colors.white ? Colors.white : Colors.greenDark ,
        fontFamily: "Mansalva",
        fontSize: "1.5em",
    }
})
