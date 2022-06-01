import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/SideBar/SideBar';
import Users from './components/pages/Users/Users';
import Subjects from './components/pages/Subjects/Subjects';
import FeedBack from './components/pages/FeedBack/FeedBack';
import Teachers from './components/pages/Teachers/Teachers';
import Dashboard from './components/pages/DashBoard/DashBoard';

function App() {
  return (
    <div className='flexParent'>
      <aside className="firstChildren">
        <Sidebar />
      </aside>
      <div className='secondChildren'>
        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/subject' element={<Subjects />} />
          <Route path='/feed-back' element={<FeedBack />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/dashBoard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
