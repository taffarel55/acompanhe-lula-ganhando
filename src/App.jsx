import { useState } from "react";
import "./App.css";

function App() {
  const [candidatos, setCandidatos] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    );

    const data = await response.json();

    console.log(data.cand);

    setCandidatos(data.cand);
  };

  return (
    <div className="App">
      <div id="candidatos">
        {candidatos.map((item, index) => (
          <div key={index}>
            {item.nm} - {item.n} - {item.vap}
          </div>
        ))}
      </div>
      <button onClick={fetchData}>Obter dados</button>
    </div>
  );
}

export default App;
