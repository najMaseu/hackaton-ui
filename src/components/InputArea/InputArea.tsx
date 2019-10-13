import React, { ChangeEvent } from "react"
import { css } from "emotion";
import { Colors } from "../../consts";

interface InputAreaProps {
    label: string
    variant: "green" | "white"
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    required?: boolean;
    name: string;
}

export const InputArea: React.FC<InputAreaProps> = ({name, label, variant, onChange,required=false}) => {
    return(
        <div className={inputContainer}>
                <label className={labelClass(variant)}>
                    {label}
                    <textarea 
                    onChange={onChange}
                    className={input(variant)} 
                    required={required}
                    name={name}
                    />
                </label>
        </div>
    )
}

const inputContainer = css({
    width: "100%",
    height: "15%"
})
const input = (color: string = Colors.white) => css({
    background: "transparent",
    outline:"none",
    borderWidth: 3,
    borderColor: color === Colors.white ? Colors.white : Colors.greenDark,
    width: "100%",
    color: color === Colors.white ? Colors.white : Colors.greenDark,
    fontFamily: "system-ui",
    fontWeight: "lighter",
    fontSize: ".9em",
    height: "100%",
    resize: "none",
    "&::placeholder": {
        color: color === Colors.white ? Colors.white : Colors.greenDark
    }
})

const labelClass = (color: string) => css({
    color: color === Colors.white ? Colors.white : Colors.greenDark,
    fontSize: "1.5em",
    height: "100%"
})