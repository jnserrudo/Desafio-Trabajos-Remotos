import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import { Home } from '../views/Home/Home';
import '../style.css';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';
import { Navbar } from '../components/Navbar/Navbar';
export const Rutas=()=>{
    /**<BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='maluma' element={<div>malumaaa</div>}></Route>
                </Route>
                <Route path='/:ozuna' element={<Home/>}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>

            </Routes>
            
        </BrowserRouter> */
    return(
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='maluma' element={<div>malumaaa</div>}></Route>
                </Route>
                <Route path='*' element={<NotFoundPage/>}></Route>

            </Routes>
            
        </BrowserRouter>
        
        
        
    )
}