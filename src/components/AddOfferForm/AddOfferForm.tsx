import React from 'react';
import { InputText } from '../InputText/InputText';
import { css } from 'emotion';
import { Colors } from '../../consts';
import { InputRadio, InputRadioOption } from '../InputRadio/InputRadio';
import { InputArea } from '../InputArea/InputArea';
import { Button } from '../Button/Button';

export const AddOfferForm = () => {
    return (
        <div className={formContainer}>
            <div className={form}>
                <h1 className={header}>
                    Add Offer!
                </h1>
                <InputText onChange={(e: React.ChangeEvent<HTMLInputElement>) => {console.log(e.target.value)}}label={"Title"} variant="green"/>
                <InputText onChange={() => {}} label={"Street"} variant="green"/>
                <InputText onChange={() => {}} label={"Home number"} variant="green" type={"number"}/>
                <InputText onChange={() => {}} label={"City"} variant="green"/>
                <InputText onChange={() => {}} label={"Phone Number"} variant="green" type={"number"}/>
                <InputRadio options={radioOptions}/>
                <InputArea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {console.log(e.target.value)}}label={"Description"} variant="green"/>
                <Button  onClick={() => {console.log("dsfkjafkjadkjf")}}>Add Offer!</Button>
            </div>
        </div>
    )
}

const formContainer = css({
    background: "rgba(255,255,255,0.8)",
    width: "100%",
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
    fontSize: "3em"
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