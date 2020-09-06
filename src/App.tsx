import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./pages"
import Cham from "pages/cham"
import Raim from "pages/raim"
import Navigation from "components/Nabigation"
import Footer from "components/Footer"
function App() {
  const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    console.log(`myRef.scrollTop: ${event}`)
  }
  return (
    <div onScroll={onScroll}>
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
