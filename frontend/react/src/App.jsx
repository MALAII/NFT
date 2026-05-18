import React from 'react'
import "./App.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Rootlayout from './layout/Rootlayout'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import Events from './pages/Events'
import Donation from './pages/Donation'
import Volunteer from './pages/Volunteer'
import Mission from './pages/Mission'
import Board from './pages/Board'
import Gallery from './pages/Gallery'
import Bank from './pages/Bank'
import Books from './pages/Books';
// import Reports from './pages/Reports'
import PdfView from './pages/PdfView'

function App() {

      const router = createBrowserRouter(createRoutesFromElements(

            <Route path='/' element={<Rootlayout />}>
                  <Route index element={<Home />} />
                  <Route path='Contact' element={<Contact />} />
                  <Route path='About' element={<About />} />
                  <Route path='Blog' element={<Blog />} />
                  <Route path='Events' element={<Events />} />
                  <Route path='Donation' element={<Donation />} />
                  <Route path='Volunteer' element={<Volunteer />} />
                  <Route path='Mission' element={<Mission />} />
                  <Route path='Board_of_trustees' element={<Board />} />
                  <Route path='Gallery' element={<Gallery />} />
                  <Route path="/Bank/:slug" element={<Bank />} />
                  {/* <Route path='Reports' element={<Reports />} /> */}
                  <Route path='PdfView' element={<PdfView />} />
                  <Route path='/Books' element={<Books/>}/>

                  <Route path='*' element={<NotFound />} />
            </Route>
      ))

      return (


            <RouterProvider router={router}>

            </RouterProvider>


      )

}
export default App