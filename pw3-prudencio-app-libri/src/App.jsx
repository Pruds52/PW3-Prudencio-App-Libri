import "./App.css";
import CardBooks from "./components/CardBooks";
import capalivro from "./assets/livros/cavernas_aco.jpg" 

function App() {
  return (
    <>
      <CardBooks 
        titulo = "As Cavernas de Aço" 
        autor = "Isaac Asimov" 
        imagem= {capalivro}        
      />
    </>
  );
}

export default App;
