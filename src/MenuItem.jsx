export const MenuItem = ({ name, price, onOrder}) => {
    return(
        <div>
            <span>
                {name} - ${price.toFixed(2)}                
            </span>
            <button className="custom-button" onClick={() => onOrder(name, price)}>Order</button>
        </div>
    )
};
