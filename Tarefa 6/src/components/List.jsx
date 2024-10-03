import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';


function Car(props) {
  return (
    <div className="car-container">
      <img src={props.image} alt={props.brand} className="car-image" />
      <p className="car-brand">{props.brand}</p>
    </div>
  );
}

function Modelos() {
  const [currentList, setCurrentList] = useState(0);

  const carLists = [
    { 
      title: 'Carros Japoneses', 
      cars: [
        { brand: 'Nissan GT-R R35 Nismo ', image: 'https://cdn.motor1.com/images/mgl/8LAjo/s3/2020-nissan-gt-r-nismo.jpg' },
        { brand: 'Toyota Supra MK4', image: 'https://fbi.cults3d.com/uploaders/23667312/illustration-file/bbe37f17-2f35-4219-a7ad-9d39272fdc78/Capture.png' },
        { brand: 'Mazda RX-7 w/ Bodykit Veilside', image: 'https://www.pasmag.com/images/2020/05/28/00_Fast_and_Furious_Tokyo_Drift_Mazda_RX-7_pasmag.JPG' }
      ]
    },
    { 
      title: 'Carros Italianos', 
      cars: [
        { brand: 'Ferrari LaFerrari', image: 'https://www.williamloughran.co.uk//media/7431/ferrari-laferrari-2311-1.jpg?anchor=center&mode=crop&width=1400&height=675&rnd=133068622440000000' },
        { brand: 'Lamborghini Aventador SVJ', image: 'https://directimports.com.br/wp-content/uploads/2023/03/6-2.webp' },
        { brand: 'Pagani Huayra', image: 'https://ideacdn.net/idea/ij/51/myassets/products/547/0.jpg?revision=1697143329' }
      ]
    },
    { 
      title: 'Carros Alemães', 
      cars: [
        { brand: 'Porsche 918 Spyder', image: 'https://s3.ecompletocarros.dev/images/lojas/285/veiculos/204613/veiculoInfoVeiculoImagesMobile/vehicle_image_1722907859_d41d8cd98f00b204e9800998ecf8427e.jpeg' },
        { brand: 'Mercedes AMG ONE', image: 'https://www.topgear.com/sites/default/files/2024/10/Mercedes-Benz_AMG_ONE_Nordschleife_2024%20%283%29.jpg' },
        { brand: 'Audi R8 V10', image: 'https://cdn.motor1.com/images/mgl/xqZoAk/s1/2023-audi-r8-v10-gt-rwd.jpg' }
      ]
    }
  ];

  const handleNext = () => {
    setCurrentList((prevList) => prevList + 1);
  };

  return (
    <>
      {currentList < carLists.length ? (
        <>
          <h1>{carLists[currentList].title}</h1>
          <div className="car-list">
            {carLists[currentList].cars.map((car, index) => (
              <Car key={index} brand={car.brand} image={car.image} />
            ))}
          </div>
          <button onClick={handleNext}>
            {currentList === carLists.length - 1 ? 'Formulário' : 'Próxima'}
          </button>
        </>
      ) : (
        <div>
          <h1>Nos diga qual o seu favorito!</h1>
          {<Form/>}
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Modelos />);


export default List