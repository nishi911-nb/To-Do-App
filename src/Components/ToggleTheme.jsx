import {FiSun} from 'react-icons/fi';
import {BsMoon} from 'react-icons/bs';


const ToggleTheme = ({lightTheme, darkTheme}) => {
    

    return ( 
        <div className="theme">
            <button className='light' onClick={lightTheme}><FiSun /> Light</button>
            <button className='dark' onClick={darkTheme}>Dark <BsMoon /> </button>
        </div>
     );
}
 
export default ToggleTheme;