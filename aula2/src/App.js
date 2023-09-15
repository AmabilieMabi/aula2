import "./App.css"
import OlaMundo from './componentes/olaMundo';
import Frases from './componentes/frases';
import DigaMeuNome from "./componentes/digaMeuNome";

function App() {
  return (
    <div className="container">
      <h1>ola mundo</h1>
      <OlaMundo/>
      <Frases/>
      <DigaMeuNome nome="Aleluia" prof="aham" idade="aham" sonho="aaaaaaaa"/>
    </div>
  );
}

export default App;
