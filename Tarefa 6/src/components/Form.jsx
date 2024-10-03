import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Form() {
  const [inputs, setInputs] = useState({
    username: '',
    age: '',
    manufacturer: '',
    car: ''
  });

  const carOptions = {
    Alemã: ['Porsche 918 Spyder', 'Mercedes AMG ONE', 'Audi R8 V10'],
    Italiana: ['Ferrari LaFerrari', 'Lamborghini Aventador SVJ', 'Pagani Huayra'],
    Japonesa: ['Nissan GT-R R35 Nismo', 'Supra MK4', 'Mazda RX-7 w/ Bodykit Veilside']
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert("Obrigado pela sua resposta!"); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Seu Nome:
        <input 
          type="text" 
          name="username" 
          value={inputs.username} 
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Sua Idade:
        <input 
          type="number" 
          name="age" 
          value={inputs.age} 
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        País de origem do carro:
        <select 
          name="manufacturer"
          value={inputs.manufacturer} 
          onChange={handleChange} 
          required
        >
          <option value="">Selecione</option>
          <option value="Japonesa">Japão</option>
          <option value="Italiana">Italia</option>
          <option value="Alemã">Alemanha</option>
        </select>
      </label>
      <br />

      {inputs.manufacturer && (
        <label>
          Escolha seu carro Favorito:
          <select 
            name="car"
            value={inputs.car} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecione um Carro</option>
            {carOptions[inputs.manufacturer].map((carOption, index) => (
              <option key={index} value={carOption}>
                {carOption}
              </option>
            ))}
          </select>
        </label>
      )}
      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Form />);
export default Form