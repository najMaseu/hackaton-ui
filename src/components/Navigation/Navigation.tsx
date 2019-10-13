import React from 'react';
import { css } from 'emotion';
import { Colors } from '../../consts';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { getImages } from '../../_api/requests';

export const Navigation = () => {    
    return (
        <div className={navContainer}>
            <h2 className={navHeader}>Where are you?</h2>
            <div style={{width: "90%", marginTop: "20px"}}>
                <InputText name={"street"} onChange={() => {}} label={"Street"} variant="white"/>
            </div>
            <div style={{width: "90%", marginTop: "20px"}}>
                <InputText name={"city"} onChange={() => {}} label={"City"} variant="white"/>
            </div>
            <Button onClick={()=>{getImages("2137").then(res => console.log(res))}} className={buttonClass}>Search!</Button>
        </div>
    )
}

const navContainer = css({
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    background: Colors.greenDarkTransparent,
    height: "100vh",
    fontSize: "2em",
    gridColumn: "2/3"
})

const navHeader = css({
    color: Colors.white,
    fontSize: ".8em"
})

const buttonClass = css({
    border: `3px solid ${Colors.white}`,
    marginTop: "30px",
    background: "transparent",
    height: "45px",
    fontSize: "20px",
    padding: 0,
    "&:hover": {
        transform: "translate(-1px, -1px)",
        opacity: 1
    }
})