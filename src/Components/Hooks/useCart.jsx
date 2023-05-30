import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../AuthPrvider'

const useCart = () =>{
  const {user} = useContext(AuthContext);

  const { refetch, data: cart = []} = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async ()=>{
        const res  = await fetch(`https://bistro-boss-server-wine.vercel.app/carts?email=${user?.email}`)
        return res.json()
    },
  })
  return [cart, refetch]
}

export {useCart}