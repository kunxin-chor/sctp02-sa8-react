export default function ProductCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h1>{props.product.product_name}</h1>
                <p>
                    {props.product.description}
                </p>
                <ul>
                    <li>Price: {props.product.price}</li>
                    <li>Quantity: {props.product.stock_quantity}</li>
                </ul>
            </div>
        </div>
    )
}