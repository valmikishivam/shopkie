import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


function RealetedProducts({ subcate }) {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        const reletedPro = async () => {
            const res = await fetch(`http://localhost:5050/api/v1/products/related?category=${subcate}`);
            const data = await res.json();
            setProducts(data.products);

        }

        reletedPro()

    },[subcate])

    return (
        <section style={{ padding: '10px' }}>
            <h1>Releted products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: "10px 5px", padding: "20px 0" }}>
                {
                    products ? products.map((pro) => (
                        <div className="probox" style={{ width: "120px" }} key={pro.uid} onClick={() => navigate(`/product/${pro.uid}`)}>
                            <img src={pro.poster} alt={pro.name} />
                            <div>
                                <h5>$ {pro.price}</h5>
                            </div>
                        </div>
                    )) : (
                        <h1>no products found</h1>
                    )
                }
            </div>
        </section>
    )
}

export default RealetedProducts