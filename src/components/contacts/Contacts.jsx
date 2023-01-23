import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { Loading } from "../Loading/Loader";

import { useSendEmail } from "./../../hooks/useSendEmail";

export const Contacts = () => {
    const [
        sendEmail,
        setName,
        setEmail,
        setTextarea,
        loading,
        modalActiv,
        setModalActiv,
        textModal,
    ] = useSendEmail();

    return (
        <>
            <Modal
                active={modalActiv}
                setActive={setModalActiv}
                text={textModal}
            />
            <section className='contacts' id='contacts'>
                <div className='container'>
                    <div className='contacts__wrapper'>
                        <div className='contacts__photo'>
                            <img src='image/Blue.jpg' alt='naumova' />
                        </div>

                        <div className='contacts__description'>
                            {/* <h2 className='title title__fz16 contacts__title'>
                                Контакты
                            </h2> */}
                            <div className='title title__fz36 contacts__subtitle'>
                                Свяжитесь со мной
                            </div>
                            <div className='divider'></div>

                            <div className='title title__fz14 contacts__text'>
                                Любым удобным для вас способом:
                            </div>

                            <div className='contacts__social'>
                                <a
                                    href='https://www.instagram.com/naumova_karina/?hl=ru'
                                    className='contacts__link'
                                    target='blank'
                                >
                                    <svg
                                        width='30'
                                        height='30'
                                        viewBox='0 0 20 20'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M-6.01032e-07 6.25L-2.73196e-07 13.75C-1.22337e-07 17.2012 2.79875 20 6.25 20L13.75 20C17.2013 20 20 17.2012 20 13.75L20 6.25C20 2.79875 17.2012 -7.51891e-07 13.75 -6.01032e-07L6.25 -2.73196e-07C2.79875 -1.22337e-07 -7.51891e-07 2.79875 -6.01032e-07 6.25ZM13.75 1.875C16.1625 1.875 18.125 3.8375 18.125 6.25L18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125L6.25 18.125C3.8375 18.125 1.875 16.1625 1.875 13.75L1.875 6.25C1.875 3.8375 3.8375 1.875 6.25 1.875L13.75 1.875Z'
                                            fill='black'
                                        />
                                        <path
                                            d='M5 10C5 12.7612 7.23875 15 10 15C12.7613 15 15 12.7612 15 10C15 7.23875 12.7612 5 10 5C7.23875 5 5 7.23875 5 10ZM13.125 10C13.125 11.7225 11.7225 13.125 10 13.125C8.27625 13.125 6.875 11.7225 6.875 10C6.875 8.2775 8.27625 6.875 10 6.875C11.7225 6.875 13.125 8.2775 13.125 10Z'
                                            fill='black'
                                        />
                                        <path
                                            d='M5.29123 4.625C5.29123 4.25704 4.99295 3.95875 4.62499 3.95875C4.25703 3.95875 3.95874 4.25704 3.95874 4.625C3.95874 4.99296 4.25703 5.29125 4.62499 5.29125C4.99295 5.29125 5.29123 4.99296 5.29123 4.625Z'
                                            fill='black'
                                        />
                                    </svg>
                                </a>
                                <a
                                    href='https://t.me/KarinaNaumova'
                                    target='blank'
                                    className='contacts__link'
                                >
                                    <svg
                                        width='30'
                                        height='30'
                                        viewBox='0 0 30 30'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z'
                                            fill='black'
                                        />
                                    </svg>
                                </a>
                                <a
                                    href='https://www.facebook.com/profile.php?id=100027418372980'
                                    target='blank'
                                    className='contacts__link'
                                >
                                    <svg
                                        className='facebook'
                                        width='30'
                                        height='30'
                                        viewBox='0 0 20 20'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M-7.46167e-07 2.92969L-1.28061e-07 17.0703C-5.74539e-08 18.6856 1.31439 20 2.92969 20L17.0703 20C18.6856 20 20 18.6856 20 17.0703L20 11.1719L12.9297 11.1719L12.9297 13.5156L9.41406 13.5156L9.41406 11.1719L7.03125 11.1719C5.09262 11.1719 3.51562 9.59488 3.51562 7.65625L3.51562 4.10156L7.03125 4.10156L7.03125 7.65625L9.41406 7.65625L9.41406 4.10156L12.9297 4.6875L12.9297 7.65625L20 7.65625L20 2.92969C20 1.31439 18.6856 -8.16774e-07 17.0703 -7.46167e-07L2.92969 -1.28061e-07C1.31439 -5.74539e-08 -8.16774e-07 1.31439 -7.46167e-07 2.92969Z'
                                            fill='black'
                                        />
                                    </svg>
                                </a>
                            </div>

                            <div className='title title__fz14 contacts__text'>
                                Или оставьте ваши данные и я сама вам напишу:
                            </div>

                            {loading ? (
                                <Loading loading={loading} />
                            ) : (
                                <form
                                    onSubmit={sendEmail}
                                    className='contacts__form'
                                    // encType='multipart/form-data'
                                    // method='post'
                                >
                                    <div className='contacts__input'>
                                        <input
                                            required
                                            type='text'
                                            id='user_name'
                                            name='name'
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <label htmlFor='user_email'>
                                            Ваша почта
                                        </label>
                                    </div>
                                    <div className='contacts__textarea'>
                                        <textarea
                                            name='textarea'
                                            onChange={(e) =>
                                                setTextarea(e.target.value)
                                            }
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
                                                    <Link
                                                        to='/policy'
                                                        target='_blank'
                                                    >
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
