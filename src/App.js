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
        {/* <Route index element={<First />} /> */}
        <Route  path="/second" element={<Second/>}/>
      </Routes>
      </BrowserRouter>
    </div>
   </>
  );
}

export default App;
