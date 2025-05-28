import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

function OrderQuantity( {quantity, setQuantity} ) {
    const minQuantity = 0
    const maxQuantity = 10

    const incremenet = () => {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
        }
    }
    
    const decrement = () => {
        if (quantity > minQuantity) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="clicker">
            <i><CiSquareMinus className="minus-icon" onClick={decrement} /></i>
            <span className="orderNumber"> {quantity} </span>
            <i><CiSquarePlus className="plus-icon" onClick={incremenet} /></i>
        </div>
    );

}

export default OrderQuantity