import {
    AdminPage,
    ErrorPage,
    LoginPage,
    MainPage,
    OfferPage,
    PolicyPage,
    SuccessPage,
} from "pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sass/libs/style.scss";

function App() {
    return (
        <BrowserRouter
            basename='/'
            // basename='/karina_fitness_blog'
            // "homepage": "https://kostiklifter96.github.io/karina_fitness_blog",
        >
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/policy' element={<PolicyPage />} />
                <Route path='/offer' element={<OfferPage />} />
                <Route path='/success' element={<SuccessPage />} />
                <Route path='/error' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
