import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path : '/product/:id',
      element : <ProductPage/>
    },
    {
      path : '/home',
      element : <HomePage/>
    }
  ])

import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
          <Navbar></Navbar>
          <RouterProvider router = {router}></RouterProvider>
      </RecoilRoot>
      
    </>
  )
}

export default App
