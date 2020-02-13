import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import chejungle from '../images/chejungle.jpg';
import chejungle1 from '../images/chejungle1.jpg';

import chemotor from '../images/chemotor.jpg';
import chemotor01 from '../images/chemotor01.jpg';
import chemotor02 from '../images/chemotor02.jpg';
import chemotor03 from '../images/chemotor03.jpg';

const Travel = () => (
  <div>
    <Helmet />
    <Navbar />
    <Vshoot img={chejungle} number="01" shoot={'jungle'} />
    <Hshoot img={chemotor03} number="02" shoot={chemotor01} />
    <Vshoot img={chejungle1} number="03" shoot={'china'} />
    <Hshoot img={chemotor} number="04" shoot={chemotor02} />
    <Footer />
  </div>
);
export default Travel;
