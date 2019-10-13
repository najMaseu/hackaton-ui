import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { css } from 'emotion';
import { Card } from '../components/Card/Card';
import { FormValues } from '../components/AddOfferForm/AddOfferForm';
import { getOffers } from '../_api/requests';

export const Offers = () => {

  const [allOffers, setAllOffers] = useState()

  useEffect(() => {
    getOffers().then(res => setAllOffers(res))
  }, [getOffers])

  const renderCards = (offerings: FormValues[]) => 
    offerings.map(({title, city, homeNumber, street, phoneNumber, photo, description, expirationStatus}: FormValues) => <Card 
        title={title} 
        city={city} 
        homeNumber={homeNumber}
        phoneNumber={phoneNumber}
        expirationStatus={expirationStatus}
        description={description}
        street={street}
        photo={photo}
        />
      )
  

  return (
    <div className={offersContainer}>
      <Navigation />
      <div className={offers}>
      {allOffers && renderCards(allOffers)}
      </div>
    </div>
  )

};

const offersContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  width:"100%",
  height: "100%"
})

const offers = css({
  display:"flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  padding: "10px",
  height:"100vh",
  width: "100%",
  gridColumn: "3/10",
  background: "rgba(255,255,255,0.8)"
})