import { Routes, Route } from 'react-router-dom';

import { Home} from '../pages/Home';
import { Destiny } from '../pages/Destiny';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/destiny' element={<Destiny/>} />
        </Routes>
    );
}