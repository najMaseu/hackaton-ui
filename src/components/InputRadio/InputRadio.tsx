import React from 'react';
import { css } from 'emotion';
import { Colors } from '../../consts';

interface InputRadioProps {
    options: InputRadioOption[]
}

export interface InputRadioOption{ 
    label: string;
    value: string;
    checked: boolean;
}

export const InputRadio: React.FC<InputRadioProps> = ({options}) => {
    
    const renderRadio = (options: InputRadioOption[]) => {
        return options.map(({label, value, checked}) => (
            <div className={singleRadio}>
                <input type="radio" value={value} checked={checked} />
                <label className={labelStyle}>{label}</label>
            </div>
            ))}
    
    
    return ( 
        <div className={radioContainer}>
            {renderRadio(options)}
        </div>
        )
}

const radioContainer = css({
    fontSize: "1.5em",
    color: Colors.greenDark,
    width: "100%"
})

const singleRadio = css({
    margin: "10px 0"
})

const labelStyle = css({
    marginLeft: "10px"
})