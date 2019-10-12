import React from 'react';
import { InputText } from '../InputText/InputText';
import { css } from 'emotion';
import { Colors } from '../../consts';
import { InputRadio, InputRadioOption } from '../InputRadio/InputRadio';

export const AddOfferForm = () => {
    return (
        <div className={formContainer}>
            <div className={form}>
                <h1 className={header}>
                    Add Offer!
                </h1>
                <InputText label={"Title"} variant="green"/>
                <InputText label={"Street"} variant="green"/>
                <InputText label={"City"} variant="green"/>
                <InputRadio options={radioOptions}/>
            </div>
        </div>
    )
}

const formContainer = css({
    background: "rgba(255,255,255,0.8)",
    width: "60%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const form = css ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
    height: "100%",
    margin: 0
})

const header = css({
    color: Colors.greenDark,
    fontSize: "2em"
})

const radioOptions: InputRadioOption[] = [
    {
        value: "Expired",
        checked: false,
        label: "Expired"
    },{
        value: "Soon to Expire",
        checked: false,
        label: "Soon to Expire"
    },{
        value: "Not Expired",
        checked: false,
        label: "Not Expired"
    },
]