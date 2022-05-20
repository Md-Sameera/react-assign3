import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import First from './form/first';
import Second from './form/Second';

function App() {
  return (
   <>
    <div className="App">
      <BrowserRouter>
      <First/>
      <Routes>
         <Route index element={<First />} /> 
      </Routes>
      </BrowserRouter>
    </div>
   </>
  );
}

export default App;
