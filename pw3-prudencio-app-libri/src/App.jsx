import "./App.css";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import CreateBooks from "./components/pages/CreateBooks";
import ListBooks from "./components/pages/ListBooks";
import DetailBook from "./components/pages/DetailBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Container>

          <Routes>

            <Route path="/" element={<NavBar/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/listBook" element={<ListBooks/>}/>
              <Route path="/createBook" element={<CreateBooks/>}/>
              <Route path="/detailBook/:cod_livro" element={<DetailBook/>}/>
              <Route path='/deleteBook/:cod_livro' element={<DeleteBook/>}/>
              <Route path='/updateBook/:cod_livro' element={<UpdateBooks/>}/>
            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>
    </>
  );
}

export default App;
