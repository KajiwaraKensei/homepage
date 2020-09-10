import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "components/home"
import Cham from "components/cham"
import Raim from "components/raim"
import Navigation from "components/Nabigation"
import Footer from "components/Footer"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Navigation>
          <Route exact path='/cham' component={Cham} />
          <Route exact path='/raim' component={Raim} />
        </Navigation>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
