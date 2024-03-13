import React, { useState } from 'react';
import styles from './../Components/Card.modules.css'
const SuaComponente = ({nome,}) => {
  const [mensalidade, setMensalidade] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [tempoContribuicao, setTempoContribuicao] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'mensalidade':
        setMensalidade(value);
        break;
      case 'taxaJuros':
        setTaxaJuros(value);
        break;
      case 'tempoContribuicao':
        setTempoContribuicao(value);
        break;
      default:
        break;
    }
    setResultado(null); // Resetar o resultado quando um valor é alterado
  };

  const calcularResultado = () => {
    const taxaJurosDecimal = taxaJuros / 100;
    const calculo =
      mensalidade *
      (((1 + taxaJurosDecimal) ** tempoContribuicao - 1) / taxaJurosDecimal);

    setResultado(calculo.toFixed(2));
  };

  return (

    <div>
      <img className='img2' src="https://cdn-icons-png.flaticon.com/128/271/271207.png"></img>
      <div className='divei'>
      <h1 className="h11">Ciclic</h1>
      <h1 className='simuladorr'>simulador</h1>
      <p>Mensalidade</p>
      <input
        type="text"
        name="mensalidade"
        value={mensalidade}
        onChange={handleChange}
        placeholder="Mensalidade"
      />


      <p>Taxa de juros</p>
      <input
        type="text"
        name="taxaJuros"
        value={taxaJuros}
        onChange={handleChange}
        placeholder="Taxa de Juros"
      />
      <p>Tempo de Contribuição </p>
      <input
        type="text"
        name="tempoContribuicao"
        value={tempoContribuicao}
        onChange={handleChange}
        placeholder="Tempo de Contribuição (meses)"
      />
      <br></br>
      <button className='button' onClick={calcularResultado}>Simular</button>
      {resultado !== null && (
        <p>
          Resultado: R$ {resultado} para uma mensalidade de R$ {mensalidade}, taxa de juros de {taxaJuros}%, em {tempoContribuicao} meses.
        </p>
      )}

      </div>
      <img className='img1' src='https://cdn-icons-png.flaticon.com/512/594/594314.png'></img>
    </div>
  );
};

export default SuaComponente;
