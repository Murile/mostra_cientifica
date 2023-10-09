import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Biologia from './Biologia'
import Quimica from './Quimica'
import Robotica from './Robotica'

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bio' element={<Biologia />} />
                <Route path='/qui' element={<Quimica />} />
                <Route path='/robs' element={<Robotica />} />
            </Routes>
        </BrowserRouter>
    )
}