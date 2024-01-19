import { Footer } from "components";
import { useNavigate } from "react-router-dom";
import "./successPage.scss";

export const SuccessPage = () => {
    const navigation = useNavigate();

    return (
        <>
            <div className='successPage'>
                <header>
                    <button onClick={() => navigation("/")}>
                        Вернуться на главную
                    </button>
                </header>
                <div className='successPage__info'>
                    <div className='successPage__info-result'>
                        <p>ДОБРО ПОЖАЛОВАТЬ В NAUMOVA_TEAM!</p>
                    </div>
                    <div>
                        <div className='successPage__info-instructions'>
                            Вам на электронную почту отправлено письмо с
                            пригласительной ссылкой. Пройдите по ней, чтобы
                            вступить в общий телеграм-чат.
                        </div>
                        <div className='successPage__info-instructions'>
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
