import React from "react";
import { css, injectGlobal } from "emotion";
import { Provider } from "react-redux";
import background from "./img/background.jpg";
import { store } from "./store/store";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Offers } from "./views/Offers";
import { Homepage } from "./views/Homepage";
import { NewOffer } from './views/NewOffer';

injectGlobal`
    @fontface {
      font-family: 'Bungee Inline', cursive;
      src: url('https://fonts.googleapis.com/css?family=Mansalva&display=swap')
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={baseStyle}>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/offers" component={Offers}/>
          <Route exact path="/add-offer" component={NewOffer}/>
        </div>
      </Router>
    </Provider>
  );
};

const baseStyle = css({
  position: "fixed",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: "100vw",
  height: "100vw",
  fontFamily: "Mansalva"
});

export default App;
