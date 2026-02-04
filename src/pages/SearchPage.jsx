import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../App.css'
const apiurl =import.meta.env.VITE_API_URL
function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const query = searchParams.get('query')
  const category = searchParams.get('category')

  const [searchData, setSearchData] = useState([])
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [Error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    const searchQuery = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${apiurl}?page=${page}&q=${query ? query : ""}&category=${category ? category : ''}`);
        const data = await res.json();
       
        setTimeout(() => {
          setSearchData(data.products);
          setLoading(false)
        }, 1000);
        setTotalPage(data.totalPage)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    searchQuery()
  }, [query, category, page])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Search Results: {query ? query : category}</h2>
      <section className='prowrapper'>
        {
          searchData ? searchData.map((pro) => (
            <div className="probox" key={pro.uid} onClick={() => navigate(`/product/${pro.uid}`)}>
              <img src={pro.poster} alt={pro.name} />
              <div className="prodetails">
                <h4>{pro.title}</h4>
                <span>{pro.category[0]}</span>
                <h4>$ {pro.price}</h4>
              </div>
            </div>
          )) : (
            <h1>No product Found</h1>
          )
        }
        <h1>{loading&&'loading....'}</h1>
      </section>
      <section className='pagination'>
        <button title='PREVIOUS' onClick={() =>setPage(page-1)} disabled={page===1}>〈</button>
        <h4 style={{padding:'8px',background:'black',color:'#edede9', borderRadius:"10px"}}>{page}</h4>
        <button title='NEXT'onClick={()=>setPage(page+1)} disabled={page===totalPage} >〉</button>
      </section>
    </div>
  )
}

export default SearchPage