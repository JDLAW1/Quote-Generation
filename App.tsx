import React from "react";
import MyComponent from "./Quote";

interface frase {
  frase: string;
  autor: string;
}

const frases: frase[] = [
  {
    frase:
      "Hay que trabajar, hay que aprender, hay que comer, hay que descansar y también hay que jugar",
    autor: "Maestro Roshi",
  },
  {
    frase: "Si una persona no tiene sueños no tiene razón para vivir",
    autor: "Ayrton Senna",
  },
  { frase: "Sí tú no crees en ti, nadie más lo hará", autor: "Kobe Bryant" },
  { frase: "Pienso, luego existo", autor: "René Descartes" },
  { frase: "Todo fluye, nada permanece", autor: "Heráclito de Éfeso" },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <MyComponent frases={frases} />
    </div>
  );
};

export default App;
