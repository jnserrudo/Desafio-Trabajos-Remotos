import databiz from '../../images/client-databiz.svg'
import audiophone from '../../images/client-audiophile.svg'
import meet from '../../images/client-meet.svg'
import maker from '../../images/client-maker.svg'
export const Footer =()=>{
    return(
        <div className='footer'>
            <img className='img_footer' src={databiz} alt='databiz'></img>
            <img className='img_footer' src={audiophone} alt='databiz'></img>
            <img className='img_footer' src={meet} alt='databiz'></img>
            <img className='img_footer' src={maker} alt='databiz'></img>
        </div>
    )
}