import React, { useState, useEffect, useRef } from 'react';
import { InputText } from '../InputText/InputText';
import { css } from 'emotion';
import { Colors } from '../../consts';
import { InputRadio, InputRadioOption } from '../InputRadio/InputRadio';
import { InputArea } from '../InputArea/InputArea';
import { Button } from '../Button/Button';
import { postOffer, postImage } from '../../_api/requests';
import { useHistory } from 'react-router-dom';
import uuid from 'uuid';

export interface FormValues {
    title?: string;
    city?: string;
    homeNumber?: string;
    phoneNumber?: string;
    expirationStatus?: string
    description?: string;
    street?: string;
    expiration?: string;
    photo?: string;
}

export const AddOfferForm = () => {
    
    const history = useHistory();
    
    const [formVals, setFormVals] = useState<any>({
        id: uuid.v4(),
        title: "",
        city: "",
        homeNumber: "",
        description: "",
        street: "" ,
        expirationStatus: "",
        phoneNumber: "",
    })

    useEffect(() => {
        console.log(formVals)
    }, [formVals])

    const inputFile = useRef<HTMLInputElement>(null)

    const handleSubmit = async () => {
        try{
            await postOffer(formVals)
            inputFile.current && 
            inputFile.current.files && 
            postImage(inputFile.current.files[0], formVals.id)
            history.push("/offers")
        } catch (e){
            console.warn(e)
        }
    }

    const handleFormValues = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormVals({
            ...formVals,
            [e.target.name]: (e.target.value)
        })
    }

    return (
        <div className={formContainer}>
            <div className={form}>
                <h1 className={header}>
                    Add Offer!
                </h1>
                <InputText name={"title"} onChange={handleFormValues} label={"Title"} variant="green"/>
                <InputText name={"street"} onChange={handleFormValues} label={"Street"} variant="green" required={true}/>
                <InputText name={"homeNumber"} onChange={handleFormValues} label={"Home number"} variant="green" type={"number"} required={true}/>
                <InputText name={"city"} onChange={handleFormValues} label={"City"} variant="green" required={true}/>
                <InputText name={"phoneNumber"} onChange={handleFormValues} label={"Phone Number"} variant="green" type={"number"} required={true}/>
                <InputRadio name={"expirationStatus"} onChange={handleFormValues} options={radioOptions}/>
                <input ref={inputFile} name={"image"} type="file"/>
                <InputArea name={"description"} onChange={handleFormValues} label={"Description"} variant="green" required={true}/>
                <Button  className={buttonStyle} onClick={handleSubmit} type={"submit"}>Add Offer!</Button>
            </div>
        </div>
    )
}

const buttonStyle = css({
    marginTop: 30,
})

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
        label: "Expired"
    },{
        value: "Soon to Expire",
        label: "Soon to Expire"
    },{
        value: "Not Expired",
        label: "Not Expired"
    },
]