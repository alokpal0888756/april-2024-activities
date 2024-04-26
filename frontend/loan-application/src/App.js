import './App.css';

import { Route, Routes } from 'react-router-dom';
import AdminLoginPage from './components/AdminLogin';
import RegistrationPage from './components/Register';
import CustomerLogin from './components/CustomerLogin';
import Home from './components/Home';


function App() {
  return (
    <div>
      
    <div>
      <Routes>
        <Route path='/' element={<CustomerLogin/>}></Route>
        <Route path='/login/admin' element={<AdminLoginPage/>}></Route>
        <Route path='/register' element={<RegistrationPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>

        {/* <Route path='/register' element={<ProfileForm />}></Route>
        <Route path='/list' element={<ProfileList />}></Route>
        <Route path='/delete' element={<DeleteById />}></Route>
        <Route path='/success/:id' element={<ProfileSuccess />}></Route> */}

      </Routes>
    </div>
  </div>
  );
}

export default App;
