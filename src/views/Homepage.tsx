import React from 'react';
import { Container } from "../components/Container/Container";
import { Button } from "../components/Button/Button";
import { css } from "emotion";
import { useHistory } from "react-router-dom";


export const Homepage = () => {

  const history = useHistory();

  const goTo = (path: string) => {
    return () => {
      history.push(path)
    }
  };

  return (
    <Container>
      <section className={homepageSection}>
        <div>
            <h1 className={logo}>FoodSharing</h1>
            <h2 className={slogan}>Don't waste!</h2>
        </div>
        <div>
          <Button onClick={goTo('/offers')}>search</Button>
          <Button onClick={goTo('/add-offer')}>add offer</Button>
        </div>
      </section>
    </Container>
  )

};

const homepageSection = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '25%'
});

const logo = css({
  fontSize: '120px',
  color: 'white'
});

const slogan = css({
  fontSize: '40px',
  color: 'white'
});
