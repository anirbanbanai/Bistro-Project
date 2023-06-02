import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth'
import { useAxiosSecure } from './useAxiosSecure';
// import { useAxiosSecure } from './useAxiosSecure';

const useCart = () => {
  const { user, loading } = useAuth()
  console.log(user?.email);

  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const res = await axiosSecure.post(`/carts?email=${user?.email}`)
      console.log('res from axios', res);
      return res.data
    },
    // queryFn: async ()=>{
    //     const res  = await axiosSecure(`/carts?email=${user?.email}`)
    //     console.log(res);
    //     return res.data;
    // },
  })
  return [cart, refetch]
}

export { useCart }