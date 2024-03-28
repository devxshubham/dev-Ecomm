import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { CategoryProducts } from './pages/CategoryProducts'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

import { RecoilRoot } from 'recoil'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path : '/product/:id',
      element : <ProductPage/>
    },
    {
      path : '/home',
      element : <HomePage/>
    },
    {
      path : '/category/:name',
      element : <CategoryProducts/>
    },
    {
      path : '/login',
      element : <Login/>
    },
    {
      path : '/signup',
      element : <Signup/>
    }
  ])


function App() {

  return (
    <>
      <RecoilRoot>
          <RouterProvider router = {router}>
            <Navbar></Navbar>
          </RouterProvider>
      </RecoilRoot>
      
    </>
  )
}

export default App
