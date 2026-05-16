export default function ProductList({ products }){
    return(
        <>
            {products.map(el => (
                <div>
                    <h1>{el.name}</h1>
                    <p>{el.id}</p>
                    <p>{el.price}</p>
                    <p>{el.inStock}</p>
                </div>
            ))}
        </>
    )
}