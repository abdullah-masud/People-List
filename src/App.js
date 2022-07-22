import './App.css';
import { Routes, Route } from "react-router-dom";
import PeoplesList from './components/PeoplesList';
import Details from './components/Details';

function App() {
  return (
    <div className='bg-[#f4f7fc]'>
      <Routes>
        <Route path="/" element={<PeoplesList />} />
        <Route path="/details/:detailsId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
