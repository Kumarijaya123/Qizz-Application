/* eslint-disable no-unused-vars */
import '../styles/App.css'
import {RouterProvider, createRoutesFromElements, createBrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home.jsx'
import Quiz from './Quiz.jsx'
import Result from './Result.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>}> 
    </Route>  
    <Route path="/quiz" element={<Quiz/>}/>
    
    <Route path="/result" element={<Result/>}/>
   
    </Route>)
)
function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
