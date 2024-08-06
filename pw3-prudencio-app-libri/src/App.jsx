import "./App.css";
import CardBooks from "./components/CardBooks";

function App() {
  return (
    <>
      <CardBooks titulo = "Diário de um Banana" autor = "Jeff Kinney"/>
      <CardBooks titulo = "O Mistério do Trem Fantasma" autor = "Thomas Brezina"/>
      <CardBooks titulo = "O Pequeno Príncipe" autor = "Antoine de Saint-Exupéry"/>
    </>
  );
}

export default App;
