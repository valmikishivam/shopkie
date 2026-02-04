import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../App.css"
import RealetedProducts from '../components/RealetedProducts'
const apiurl =import.meta.env.VITE_API_URL
function SproductPage() {
  const { id } = useParams()
  const [Data, setData] = useState()
  const [proPoster, setProPoster] = useState(null);

  useEffect(() => {
    const sproduct = async () => {
      const res = await fetch(`${apiurl}/${id}`)
      const result = await res.json()
      if (res.ok) {
        setData(result.proData);
        setProPoster(result.proData?.images[0])

      }


    }
    sproduct()
  }, [id])



  return (
    <>
      <div className='spage'>
        <section className='imgwrapper'>
          <div className='spromoreimg'>
            {
              Data?.images.map((img, idx) => (
                <img src={img} key={idx} onClick={(e) => setProPoster(e.target.src)} />
              ))
            }
          </div>
          <div className='sproposter'>
            <img src={proPoster} alt={Data?.title} />
          </div>
        </section>
        <section className='sprodetails'>
          <div className='spropath'>
            <Link to={'/'}>Home</Link> <i> ⟫ </i>
            <Link to={'/shop'}>Shop</Link> <i> ⟫ </i>
            <Link to='#'>{Data?.category[0]}</Link> <i> ⟫ </i>
            {Data?.category[1]}
          </div>
          <h2>{Data?.title}</h2>
          <h3>$ {Data?.price}</h3>
          <span style={{ color: "#919191" }}>{Data?.brand}</span>
          <p style={{ color: "gold", textShadow: "1px 0px 0px gray", fontSize: "1.3rem" }}>
            {
              Data && Data.rating == 1 ? "★" :
                Data && Data.rating == 2 ? '★ ★' :
                  Data && Data.rating == 3 ? '★ ★ ★' :
                    Data && Data.rating == 4 ? '★ ★ ★ ★' :
                      "★ ★ ★ ★ ★ "
            }
          </p>
          <div>
            <span>product Quantity :</span> <input defaultValue={1} min={1} type="number" style={{ padding: "10px", width: "80px", height: "40px" }} />
          </div>
          <div style={{display:"flex" ,flexWrap:'wrap', gap:"10px"}}>

          <button style={{ backgroundColor: "#ff5c02", fontWeight: "800", padding: "10px 20px", width: "170px", border: "1px solid gray", outline: "none" }}>Add to cart</button> 
          <button style={{backgroundColor:"#ff9600", fontWeight:"800",padding:"10px 20px", width:"170px",border:"1px solid gray", outline:"none"}}>
            buy now
          </button>
          </div>
          

          <div style={{ width: "90%" }}>
            <h2>Product description</h2>
            <p style={
              {padding:'10px 0'}
            }>{Data?.description}</p>
          </div>
        </section>
      </div>
      <RealetedProducts subcate={Data?.category[1]} />
    </>
  )
}

export default SproductPage