import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import {ContactUs,Footer,Header,OurServices,OurTeam,WhatIsCodify,WhatIsIncluded,WhyChooseCodify} from './containers';
AOS.init();
function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <WhatIsCodify></WhatIsCodify>
        <OurServices></OurServices>
        <WhyChooseCodify></WhyChooseCodify>
        <WhatIsIncluded></WhatIsIncluded>
        <OurTeam></OurTeam>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
