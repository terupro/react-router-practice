import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Page1 } from "../components/Page1"
import { Page1DetailA } from "../components/Page1DetailA"
import { Page1DetailB } from "../components/Page1DetailB"
import { Page2 } from "../components/Page2"
import { Page404 } from "../components/Page404"
import { UrlParameter } from "../UrlParameter"


export const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route index path='/page1' element={<Page1 />} ></Route>
      <Route path='/page1/detailA' element={<Page1DetailA />}></Route>
      <Route path='/page1/detailB' element={<Page1DetailB />}></Route>
    <Route path='/page2' element={<Page2 />}></Route>
     <Route path='/page2/:id' element={<UrlParameter />}></Route>
     <Route path="*" element={<Page404/>}></Route>
   </Routes>
   
  )
}