
// import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Pages/login';
import Register from './Pages/register';

import Todo from './Pages/todo';
import NotFound from "./Components/NotFound"
function App() {
  return (
     <Router>
        {/* <Layout> */}
          <Routes>
                <Route path="/" element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='home' element={<Todo />} />
          {/* <Route path='/' element={<Layout />}> */}

                <Route path="*" element={<NotFound />} />
          {/* </Route> */}
          </Routes>
       

     </Router>
  );
}

export default App;

