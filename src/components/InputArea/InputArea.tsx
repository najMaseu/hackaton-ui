import React, { ChangeEvent } from "react"
import { css } from "emotion";
import { Colors } from "../../consts";

interface InputAreaProps {
    label: string
    variant: "green" | "white"
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const InputArea: React.FC<InputAreaProps> = ({label, variant, onChange}) => {
    return(
        <div className={inputContainer(variant)}>
                <label className={labelClass(variant)}>
                    {label}
                    <textarea 
                    onChange={onChange}
                    className={input(variant)} 
                    />
                </label>
        </div>
    )
}

const inputContainer = (color: string) => css({
    width: "100%",
    height: "15%"
})
const input = (color: string) => css({
    background: "transparent",
    outline:"none",
    borderWidth: 3,
    borderColor: color === Colors.white ? Colors.white : Colors.greenDark ,
    width: "100%",
    color: color === Colors.white ? Colors.white : Colors.greenDark ,
    fontFamily: "system-ui",
    fontWeight: "lighter",
    fontSize: ".9em",
    height: "100%",
    "&::placeholder": {
        color: color === Colors.white ? Colors.white : Colors.greenDark
    }
})

const labelClass = (color: string) => css({
    color: color === Colors.white ? Colors.white : Colors.greenDark,
    fontSize: "1.5em",
    height: "100%"
})