import {
    AdminPage,
    LoginPage,
    MainPage,
    OfferPage,
    PolicyPage,
} from "pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sass/libs/style.scss";

function App() {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/policy' element={<PolicyPage />} />
                <Route path='/offer' element={<OfferPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
