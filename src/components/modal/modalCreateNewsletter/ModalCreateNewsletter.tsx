import { useCreateNewsletter } from "hooks/useCreateNewsletter";
import { useAppSelector } from "store/store";
import "./modalCreateNewsletter.scss";

export const ModalCreateNewsletter = () => {
    const {
        closeModalCreateNewsletter,
        loading,
        onSubmitSendNewsletter,
        setText,
        setTitle,
        setThreads,
    } = useCreateNewsletter();
    const { numberOfThreads } = useAppSelector((state) => state.client);
    return (
        <>
            <div
                className='createNewsletter'
                onClick={closeModalCreateNewsletter}
            >
                <div
                    className='createNewsletter__section'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='createNewsletter__section-title'>
                        Рассылка
                    </div>
                    <form
                        onSubmit={onSubmitSendNewsletter}
                        className='createNewsletter__form'
                    >
                        <select
                            className='createNewsletter__form-select'
                            onChange={(e) => setThreads(+e.target.value)}
                        >
                            <option value={-1}>Все потоки</option>
                            {numberOfThreads.map((el) => (
                                <option key={el} value={el}>
                                    {el} поток
                                </option>
                            ))}
                        </select>
                        <input
                            type='text'
                            placeholder='Заголовок'
                            required
                            className='createNewsletter__form-input'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder='ИМЯ_ПОЛЬЗОВАТЕЛЯ, <br><br>'
                            required
                            onChange={(e) => setText(e.target.value)}
                            className='createNewsletter__form-input'
                        />
                        <button
                            disabled={loading}
                            style={{
                                display: `${loading && "none"}`,
                            }}
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
