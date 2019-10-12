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
            <div>
                <input type="radio" value={value} checked={checked} />
                <label>{label}</label>
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
    color: Colors.greenDark
})

