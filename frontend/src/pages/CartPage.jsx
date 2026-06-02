import { ArrowLeft } from "lucide-react"
import CardCard from "../components/CardCard.jsx"
import { Link } from "react-router-dom"
import { useCart } from '../context/Cart.jsx'
import { useEffect, useState } from "react"
const CartPage = () => {
  const { item } = useCart()
  const [Total, setTotal] = useState(0)
  useEffect(() => {
    let sum = 0

    item.length > 0 && item.forEach(i => {
      sum += parseInt(i.price)
    })
    setTotal(sum)
  }, [item])

  return (
    <div className="p-3 w-full">
      <h1 className="text-2xl sm:text-3xl font-bold">Shopping Cart</h1>
      <section className="flex flex-wrap items-center h-full px-2 py-3">

        <div className="lg:w-[70%] w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            {
              item && item.length > 0 ? item.map(i => (
                (
                  <CardCard
                    uid={i.uid}
                    title={i.title}
                    price={i.price}
                    brand={i.brand}
                    poster={i.poster}
                    key={i.uid}
                  />
                )

              )) : (
                <div className="w-full  p-3 justify-center items-center">
                <h1 className="text-xl">Cart is empty</h1>
                </div>
              )
            }
          </div>
          <Link to='/shop' className="flex items-center gap-x-2 my-2 text-lg">
            <ArrowLeft />
            continue shopping
          </Link>
        </div>
        <div className="w-full lg:flex-1 border px-2 py-3 rounded-md">
          <h1 className="text-lg md:2xl my-2">Cart Calculation</h1>
          <div className="p-3 flex justify-between items-center">
            <b>Total</b>
            <span>$ {Total}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartPage