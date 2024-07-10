
import Item from '../components/item'
import Navigator from '../components/navigator';

import donuts from '../img/donuts.png';
import croissants from '../img/croissants.png';
import artisanloaf from '../img/artisanloaf.png';
import muffins from '../img/muffins.png';
import beestings from '../img/beestings.png';
import cupcakes from '../img/cupcakes.png';



const Menu = () => {

    return(
        <>
        <header>          
            <div className='Heading'><h1>Items</h1></div> 
            <Navigator/>
        </header>
    
        <div className='Items'>
        <Item Name='Doughnuts' Price='R35.99' Img = {donuts} />
        <Item Name='Crossiants' Price='R49.99' Img = {croissants} />
        <Item Name='Artisan Loaf' Price='R44.99' Img = {artisanloaf} />
        <Item Name='Muffins' Price='R19.99' Img = {muffins} />
        <Item Name='Beestings' Price='R29.99' Img = {beestings} />
        <Item Name='Cupcakes' Price='R24.99' Img = {cupcakes} />
        </div>
        </>
    
    );

}

export default Menu;