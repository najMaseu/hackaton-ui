import React from 'react';
import { AddOfferForm } from '../components/AddOfferForm/AddOfferForm';
import { css } from 'emotion';


export const NewOffer = () => {


  return (
    <div className={formView}>
      <div className={formWrapper}>
        <AddOfferForm />
      </div>
    </div>
  )
};

const formView = css({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end"
})

const formWrapper = css({
  width: "40vw",
  marginRight: "5vw"
})