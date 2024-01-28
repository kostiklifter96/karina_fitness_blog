import { INSTIcon } from "components/clientComponents/svgIcon/INSTIcon";
import { TGIcon } from "components/clientComponents/svgIcon/TGIcon";
import { VKIcon } from "components/clientComponents/svgIcon/VKIcon";
import { useSendForm } from "hooks/useSendForm";
import { Link } from "react-router-dom";
import { ModalStatusContactForm } from "../../modal/modalStatusContactForm/ModalStatusContactForm";
import { Loading } from "../loading/Loader";
import "./contacts.scss";

export const Contacts = () => {
    const { modalActiv, setModalActiv, textModal, sendEmail, loading } =
        useSendForm();

    return (
        <>
            <ModalStatusContactForm
                active={modalActiv}
                setActive={setModalActiv}
                text={textModal}
            />
            <section className='contacts' id='contacts'>
                <div className='container'>
                    <div className='contacts__wrapper'>
                        <div className='contacts__photo'>
                            <img src='image/Blue-w.webp' alt='naumova' />
                        </div>

                        <div className='contacts__description'>
                            {/* <h2 className='title title__fz16 contacts__title'>
                                Контакты
                            </h2> */}
                            <div className='title title__fz36 contacts__subtitle'>
                                Задайте вопрос
                            </div>
                            <div className='dividerr'></div>

                            <div className='title title__fz16 contacts__text'>
                                Любым удобным для вас способом:
                            </div>

                            <div className='contacts__social'>
                                <a
                                    href='https://t.me/Naumova_karina'
                                    target='blank'
                                    className='contacts__link tg_btn-contacts'
                                >
                                    <TGIcon />
                                </a>
                                <a
                                    href='https://vk.com/public222068936'
                                    target='blank'
                                    className='contacts__link vk_btn-contacts'
                                >
                                    <VKIcon />
                                </a>
                                <a
                                    href='https://www.instagram.com/naumova_karina/?hl=ru'
                                    className='contacts__link inst_btn-contacts'
                                    target='blank'
                                >
                                    <INSTIcon />
                                </a>
                            </div>

                            <div className='title title__fz16 contacts__text'>
                                Или оставьте ваши данные и я сама вам напишу:
                            </div>

                            {loading ? (
                                <Loading loading={loading} />
                            ) : (
                                <form
                                    onSubmit={sendEmail}
                                    className='contacts__form'
                                >
                                    <div className='contacts__input'>
                                        <input
                                            required
                                            type='text'
                                            id='user_name'
                                            name='name'
                                        />
                                        <label htmlFor='user_name'>
                                            Ваше имя
                                        </label>
                                    </div>
                                    <div className='contacts__input'>
                                        <input
                                            required
                                            type='email'
                                            id='user_email'
                                            name='email'
                                        />
                                        <label htmlFor='user_email'>
                                            Ваша почта
                                        </label>
                                    </div>
                                    <div className='contacts__textarea'>
                                        <textarea
                                            name='textarea'
                                            required
                                        ></textarea>
                                        <label htmlFor='message'>
                                            Ваше сообщение
                                        </label>

                                        <div className='contacts__triggers'>
                                            <button className='contacts__btn btn'>
                                                Отправить сообщение
                                            </button>

                                            <div className='contacts__policy'>
                                                <input
                                                    required
                                                    type='checkbox'
                                                />
                                                <span>
                                                    Я согласен(а) с{" "}
                                                    <Link to='/policy'>
                                                        политикой
                                                        конфиденциальности
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
