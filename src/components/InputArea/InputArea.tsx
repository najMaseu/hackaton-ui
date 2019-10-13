import React, { ChangeEvent } from "react"
import { css } from "emotion";
import { Colors } from "../../consts";

interface InputAreaProps {
    label: string
    variant: "green" | "white"
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    required?: boolean
}

export const InputArea: React.FC<InputAreaProps> = ({label, variant, onChange,required=false}) => {
    return(
        <div className={inputContainer(variant)}>
                <label className={labelClass(variant)}>
                    {label}
                    <textarea 
                    onChange={onChange}
                    className={input(variant)} 
                    required={required}
                    />
                </label>
        </div>
    )
}

const inputContainer = (color: string) => css({
    width: "100%",
    height: "15%"
})
const input = (color: string = Colors.white) => css({
    background: "transparent",
    outline:"none",
    borderWidth: 3,
    borderColor: color,
    width: "100%",
    color: color,
    fontFamily: "system-ui",
    fontWeight: "lighter",
    fontSize: ".9em",
    height: "100%",
    resize: "none",
    "&::placeholder": {
        color: color
    }
})

const labelClass = (color: string) => css({
    color: color === Colors.white ? Colors.white : Colors.greenDark,
    fontSize: "1.5em",
    height: "100%"
})