
const item = (props) => {

    return(
        
        <>
        <div className="item">

        <img src={props.Img} alt={props.Img}/>
        <p>Item Name: {props.Name}</p>
        <p>Price: {props.Price} </p>

        <div className="purchaseButton"> <button type="button">Purchase</button> </div>

        </div>
        </>
    );

}

export default item;