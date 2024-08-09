import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Intership from './Intership';
import Employlogin from './Employlogin';
import Fotter from './Fotter';
import Jobsbox from './Jobsbox';
import Myaccount from './Myaccount';
// import Privacypolicy from './Privacypolicy';

function App() {
  const fbox = [
    { heading: "Tele-Caller", headindsm: "@Travel Your Date", line: "", location: "Shivajinagar, Pune", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/05/WhatsApp-Image-2024-05-21-at-17.22.57-150x150.jpeg" },
    { heading: "Content Writer", headindsm: "@VM3 Techsolution", line: "", location: "Pune (Remote)", img: "https://internscope.com/wp-content/plugins/wp-job-manager/assets/images/company.png" },
    { heading: "UI/UX Designer", headindsm: "@ VM3 Tech Solutions LLP", line: "", location: "Wagholi, Pune (Remote)", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/03/logo-150x100-1.png" },
    { heading: "Web Developer", headindsm: "@ VM3 Tech Solutions LLP", line: "", location: "Wagholi, Pune", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/03/logo-150x100-1.png" },
    { heading: "Web Developer", headindsm: "@ VM3 Tech Solutions LLP", line: "", location: "Pune", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/03/logo-150x100-1.png" },
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intership' element={<Intership />} />
        <Route path='/jobsbox' element={<Jobsbox />} />
        <Route path='/employlogin' element={<Employlogin />} />
        <Route path='/myaccount' element={<Myaccount />} />
      </Routes>
      
      <Fotter/>

    </BrowserRouter>
  );
}

export default App;

