import { useState, useEffect } from "react";
import OrderQuantity from "./OrderQuantity";

function OrderRow({ product, subtotal, setSubtotal }) {

    // functionality for quantity, subtotal
    const [quantity, setQuantity] = useState(0);

    // adjust subtotal when quantity changes
    useEffect(() => {
        setSubtotal(quantity * product.price);
    }, [quantity, product.price]);

    return (
        <tr>
            <td>{product.product}</td>
            <td>{product.company}</td>
            <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}</td>
            <td>
                <OrderQuantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </td>
            <td>{subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}</td>
        </tr>
    );
}

export default OrderRow;