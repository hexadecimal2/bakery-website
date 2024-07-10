import { Link } from 'react-router-dom';
import Navigator from './navigator';
import '../styles.css'


const Home = () => {

    return(
        <>
        <div className='Home'>

        <header> 
            
            <div className='Heading'><h1>Just a Bakery</h1></div> 
            <Navigator/>

        </header>

        <div className='welcomeText'> Welcome to our bakery! </div>        
                
        <div className='buttons'>
        <Link to="/menu" className='button'>        
        <button type="button">Go to our Menu</button>
        </Link>
        
        <Link to="/about" className='button'>        
        <button type="button">Read our About</button>
        </Link>
        
        </div>
        </div>

        </>
    );
}

export default Home;