import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { css } from 'emotion';


export const Offers = () => {


  return (
    <div className={offersContainer}>
      <Navigation />
    </div>
  )

};

const offersContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  width:"100%",
  height: "100%"
})