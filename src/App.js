
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from './Pages/login';
import Register from './Pages/register';
import Todo from './Pages/todo';
import NotFound from "./Components/NotFound"
import UseUserContext from "./hooks/useUserContext";
import ProtectComponent from "./auth/protectedRoute";
import Home from "./Pages/home";

function App() {
  const {user}=UseUserContext()
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>

           {!user.token &&<Route path="register" element={<Register />}></Route>}
           
          <Route path="/todo" element={user.token!=null?<Todo></Todo>:<Navigate to="/" replace></Navigate>
             }/>

            <Route path="/home" element={<ProtectComponent>
              <Home></Home>
            </ProtectComponent>}>
            </Route>
           <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;



