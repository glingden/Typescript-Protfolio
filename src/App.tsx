
import LandingPage from './layout/LandingPage';
import { Route, Routes} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';


import './App.scss'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>     
    </div>

  
  );
}

export default App;
