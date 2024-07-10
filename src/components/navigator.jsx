import { Link } from 'react-router-dom'

const navigator = () => {

    return (
        <>
        <div className = 'Navigator'>
        <Link to="/"> Home </Link>
        
        <Link to = "/menu"> Menu </Link>
        
        <Link to = "/about"> About </Link>
        
        </div>
        </>
    );

}

export default navigator;