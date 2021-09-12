import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <Title text={"world"}/>
      </body>
    </div>
  );
}

const Title = (info) =>{
  return(
    <div>
      <h1>Hello {info.text}</h1>
    </div>
  )
}

export default App;
