import './App.css';
import APICall from './Components/APICall';
import AxiosAPICall from './Components/AxiosAPICall';
import Conditional from './Components/Conditional';
import Header from './Components/Header';
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
   <div className="flex">
     {/* Sidebar */}
     <div className="w-52 p-5 bg-gray-100">
       <h2 className="text-lg font-semibold mb-4">Menu</h2>
       <nav>
         <ul className="space-y-2">
           <li>
             <Link to="/" className="text-blue-500 hover:underline">
               Header
             </Link>
           </li>
           <li>
             <Link to="/Home" className="text-blue-500 hover:underline">
               Conditional
             </Link>
           </li>
           <li>
             <Link to="/api" className="text-blue-500 hover:underline">
               API
             </Link>
           </li>
           <li>
            <Link to="/axios" className='text-blue-500 hover:underline'>
              API call using Axios
            </Link>
           </li>
         </ul>
       </nav>
     </div>

     {/* Main Content */}
     <div className="flex-1 p-5">
       <Routes>
         <Route index element={<Header />} />
         <Route path="/Home" element={<Conditional />} />
         <Route path="/api" element={<APICall />} />
         <Route path="/axios" element={<AxiosAPICall />} />
       </Routes>
     </div>
   </div>
 </Router>
 </div>
  );
}

export default App;
