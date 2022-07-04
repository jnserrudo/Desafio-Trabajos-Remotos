import {Navlink} from 'react-router-dom'
import icon_menu from '../../images/icon-menu.svg'
export const Navbar=()=>{
    return(
        <div className='navbar'>
            <h1 className='txt'>snap</h1>
            <img className='icon_menu' src={icon_menu}></img>
        </div>
    )
}