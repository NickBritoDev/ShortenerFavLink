import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Links from './Pages/Links'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/links" element={<Links/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp()