import { useLogin } from "hooks/useLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store/store";
import "./loginPage.scss";

export const LoginPage = () => {
    const navigator = useNavigate();
    const { loginAdmin, setLogin, setPassword } = useLogin();

    const status = useAppSelector((state) => state.admin.statusLogIn);

    useEffect(() => {
        if (status) {
            navigator("/admin");
        }
    }, [navigator, status]);

    return (
        <div className='login'>
            <div></div>
            <h1 className='login-head'>LogIn to the AdminPanel</h1>
            <form onSubmit={loginAdmin} className='login-form'>
                <input
                    type='text'
                    placeholder='login'
                    required
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Enter</button>
            </form>
        </div>
    );
};
