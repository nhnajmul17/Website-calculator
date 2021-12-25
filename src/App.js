import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './Components/FirstPage/FirstPage';
import Header from './Components/Header/Header';
import SecondPage from './Components/SecondPage/SecondPage';
import FinalPage from './Components/FinalPage/FinalPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/first" element={<FirstPage />}></Route>
          <Route path="/second" element={<SecondPage />}></Route>
          <Route path='/final' element={<FinalPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
