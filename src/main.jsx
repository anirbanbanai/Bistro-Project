import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthPrvider from './Components/AuthPrvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthPrvider>
     <HelmetProvider>
     <QueryClientProvider client={queryClient}>
     <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
    
    </HelmetProvider>
   </AuthPrvider>
)
