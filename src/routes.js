import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Links from './Pages/Links'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/shortenerfavlink/" element={<Home/>}/>
                <Route path="/links" element={<Links/>}/>
            </Routes>
        </BrowserRouter>
    )
}