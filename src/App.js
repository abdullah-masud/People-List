import './App.css';
import { Routes, Route } from "react-router-dom";
import PeoplesList from './components/PeoplesList';


function App() {
  return (
    <div className='bg-[#f4f7fc]'>
      <Routes>
        <Route path="/" element={<PeoplesList />} />
      </Routes>
    </div>
  );
}

export default App;
