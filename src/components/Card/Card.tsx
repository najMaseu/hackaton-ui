import React from 'react'
import { FormValues } from '../AddOfferForm/AddOfferForm';
import { css } from 'emotion';
import { Colors } from '../../consts';



export const Card: React.FC<FormValues> = ({ photo, title, city="", homeNumber="", phoneNumber="", expirationStatus="", description="", street=""}) => {
    let imgSrc = photo ? `data:image/png;base64,${photo}` : "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
    
    const image = css({
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        width: "200px",
        height: "200px",
        position: "absolute",
        top:0
    })
    return(
        <div className={card}>
            <div className={image}/>
            <h4 className={h4}>{title}</h4>
            <h4 className={h4}>City: {city}</h4>
            <h4 className={h4}>{street} {homeNumber}</h4>
            <h4 className={h4}>Expration: {expirationStatus}</h4>
            <h4 className={h4}>Description:</h4>
            <h4 className={h4}>{description}</h4>
        </div>
    )
}

const card = css({
    position: "relative",
    display: "flex",
    flexDirection:"column",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize:".9em",
    color: Colors.white,
    width: "200px",
    maxHeight: "400px",
    margin: "10px 20px",
    paddingBottom: 10,
    background: Colors.greenDarkTransparent
})

const h4 = css({
    marginBottom: "15px",
    marginLeft: "10px"
})