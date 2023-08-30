import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Biologia from './Biologia'

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bio' element={<Biologia />} />
            </Routes>
        </BrowserRouter>
    )
}