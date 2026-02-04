
import { useEffect, useState } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
const apiurl =import.meta.env.VITE_API_URL
function ShopPage() {
  const [proData, setProData] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPage,setTotalPage]=useState(1)
  const [loading,setLoading]=useState(false)
  
  const navigate = useNavigate()
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const baseurl = `${apiurl}?page=${page}`;

        const res = await fetch(baseurl);
        const data = await res.json();
        setTimeout(() => {
          setProData(data.products)
          setLoading(false)
        }, 1000);
        setTotalPage(data.totalPage)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    }
    fetchProducts()
  }, [page])

  return (
    <div className="shoppage con-p">
      
  
     
        <h2 style={{textAlign:"center"}}>All <span style={{color:"crimson",borderBottom:"2px solid #000"}}>Products</span></h2>
        <section className="prowrapper">
          {
            proData ? proData.map((pro) => (
              <div className="probox" key={pro.uid} onClick={() => navigate(`/product/${pro.uid}`)}>
                <img src={pro.poster} alt={pro.name} />
                <div className="prodetails">
                  <h4>{pro.title}</h4>
                  <span>{pro.category[0]}</span>
                  <h4>$ {pro.price}</h4>
                </div>
              </div>
            )) : (
              <h1>no products found</h1>
            )
          }
          <h1>{loading&&'loading...'}</h1>
        </section>
        <section className="pagination">
        <button onClick={() =>setPage(page-1)} disabled={page===1}>〈</button>
        <h4  style={{padding:'8px',background:'black',color:'#edede9', borderRadius:"10px"}}>{page}</h4>
        <button onClick={()=>setPage(page+1)} disabled={page===totalPage} >〉</button>
      </section>
     
    </div>
  )
}

export default ShopPage