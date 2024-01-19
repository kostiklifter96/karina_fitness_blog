import { Footer } from "components";
import { useNavigate } from "react-router-dom";
import "./errorPage.scss";

export const ErrorPage = () => {
    const navigation = useNavigate();

    return (
        <>
            <div className='errorPage'>
                <header>
                    <button onClick={() => navigation("/")}>
                        Вернуться на главную
                    </button>
                </header>
                <div className='errorPage__info'>
                    <div className='errorPage__info-result'>
                        <p>ПРОИЗОШЛА ОШИБКА, ПОПРОБУЙТЕ ЕЩЕ РАЗ</p>
                    </div>
                    <div>
                        <div className='errorPage__info-instructions'>
                            В случае возникновения вопросов, просьба написать на{" "}
                            {
                                <a href='mailto:naumova_team@mail.ru'>
                                    naumova_team@mail.ru
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
