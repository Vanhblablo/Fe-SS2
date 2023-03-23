import React from 'react';
import './style.css';

function Wrapper() {
  const data = [
    {
      cover: <i className="fa-solid fa-truck-fast" />,
      title: 'Worldwide Delivery',
      decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
    {
      cover: <i className="fa-solid fa-id-card" />,
      title: 'Safe Payment',
      decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
    {
      cover: <i className="fa-solid fa-shield" />,
      title: 'Shop With Confidence ',
      decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
    {
      cover: <i className="fa-solid fa-headset" />,
      title: '24/7 Support ',
      decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
  ];
  return (
    <section className="wrapper background">
      <div className="container grid2">
        {data.map((val) => (
          <div className="product" key={val.title}>
            <div className="img icon-circle">
              <i>{val.cover}</i>
            </div>
            <h3>{val.title}</h3>
            <p>{val.decs}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wrapper;
