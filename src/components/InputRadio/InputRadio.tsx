import React from 'react';
import { css } from 'emotion';
import { Colors } from '../../consts';

interface InputRadioProps {
    options: InputRadioOption[],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
}

export interface InputRadioOption{ 
    label: string;
    value: string;
}

export const InputRadio: React.FC<InputRadioProps> = ({options, onChange, name}) => {
    
    const renderRadio = (options: InputRadioOption[]) => {
        return options.map(({label, value }) => (
            <div className={singleRadio}>
                <input onChange={onChange} type="radio" value={value} name={name} />
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