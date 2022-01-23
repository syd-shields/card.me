import { Routes, Route } from 'react-router-dom'
import CreateCard from '../pages/CreateCard';
import CreateName from '../pages/CreateName';
import Landing from '../pages/Landing';
import MyCard from '../pages/MyCard';

function AppRouter() {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/name' element={<CreateName />}></Route>
                <Route path='/create-card' element={<CreateCard />}></Route>
                <Route path='/:username' element={<MyCard />}></Route>
            </Routes>
        </div>
    )
}

export default AppRouter;