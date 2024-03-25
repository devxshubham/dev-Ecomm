import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { CategoryProducts } from './pages/CategoryProducts'

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
    }
  ])

import { RecoilRoot } from 'recoil'

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
