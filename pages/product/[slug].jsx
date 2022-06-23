import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import { useRouter } from 'next/router'
import {
  DetailsStyles,
  ProductInfo,
  Quantity,
  Buy,
} from '../../styles/ProductDetails'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useStateContext } from '../../lib/context'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

export default function ProductDetails() {
  //Use State
  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext()
  //Reset the quantity
  useEffect(() => {
    setQty(1)
  }, [])
  //Fetch Slug
  const { query } = useRouter()
  //Create a toast
  const notify = (message) => {
    toast.success(message, { duration: 1500 })
  }
  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  })
  const { data, fetching, error } = results

  //Check for the data coming in
  if (fetching) return <p>Loading ....</p>
  if (error) return <p>Oh no... {error.message}</p>
  //extract our data
  const product = data.products.data[0].attributes
  const { title, description, image, price } = product

  return (
    <DetailsStyles>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button disabled={qty <= 1} onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(product, qty)
            notify(`${product.title} added to your cart`)
          }}
        >
          Add to Cart
        </Buy>
      </ProductInfo>
    </DetailsStyles>
  )
}
