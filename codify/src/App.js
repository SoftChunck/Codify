import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar,Services,Included_desc,TeamMembers,CodifyDescription} from './components';
import {ContactUs,Footer,Header,OurServices,OurTeam,WhatIsCodify,WhatIsIncluded,WhyChooseCodify} from './containers';

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
      </div>
    </div>
  );
}

export default App;
