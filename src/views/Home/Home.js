import {useParams,useNavigate,Outlet} from 'react-router-dom';
import {Footer} from '../../components/Footer/Footer' ;
import imagehero from '../../images/image-hero-mobile.png';
export const Home=()=>{
    const navigate=useNavigate()
    const params=useParams()
    /**
     *  <p className='txt'> Features {params.ozuna} </p> 
            <button onClick={()=>navigate('/cualquierpag/error')}>error</button>
            <Outlet/>
     */
    return(
        <div className='txt home_mobile'>
          <img src={imagehero}  alt='man_cpu' className='imghero_mobile'></img>
          <p className='txt_titulo'>Make remote work</p>
          <p className='txt_descripcion'>Get your team in syn, no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
          <button className='btn_learnmore'>Learn more</button>
          <Footer/>
        </div>
    )
}