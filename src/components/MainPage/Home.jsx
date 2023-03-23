import React from 'react';
import './Home.css';
import SliderHome from './Slider';

function Home() {
  return (
    <section className="home">
      <div className="container d_flex">
        {/* <Categories /> */}
        <SliderHome />
      </div>
    </section>
  );
}

export default Home;
