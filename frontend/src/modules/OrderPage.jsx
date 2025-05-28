import { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";

import OrderRow from "./OrderRow";

function OrderPage({products}){
    const [subtotals, setSubtotals] = useState(products.map(() => 0));
    const [grandTotal, setGrandTotal] = useState(0)

    // Update a subtotal when changed in OrderRow
    const updateSubtotal = (i, newSubtotal) => {
        setSubtotals(subtotals => {
            const newSubtotals = [...subtotals];  // copy subtotals because react doesn't want to directly mutate arrays
            newSubtotals[i] = newSubtotal;
            return newSubtotals;
        });
    };

    // adjust grandTotal when subtotals changes
    useEffect(() => {
        setGrandTotal(subtotals.reduce((sum, subtotal, i) => sum + subtotal, 0));
    }), [subtotals];

        return (
        <>
            <h2><TiShoppingCart /> Order</h2>
            <article className="orderTable">
                <table>
                    <caption>
                        Peruse our pet paraphernalia and purchase plenty!
                        <br></br>
                        <span>Select how many of each product you'd like.</span>
                        </caption>
                    <thead id="order">
                        <tr>
                            <th>Product</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => (
                            <OrderRow
                                product={product}
                                subtotal={subtotals[i]}
                                setSubtotal={(newSubtotal) => updateSubtotal(i, newSubtotal)}
                                key={i}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr></tr>
                        <tr className="grand-total">
                            <td></td>
                            <td></td>
                            <td></td>
                            <th>Running Total</th>
                            <td>{grandTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}</td>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </>
    )
}
export default OrderPage;