import videoTraining from "../../../video/promoTraining.mp4";
import "./promoTraining.scss";

export const PromoTraining = () => {
    return (
        <section className='promoTraining' id='promoTraining'>
            <div className='container'>
                <div className='promoTraining__wrapper'>
                    <div className='promoTraining__video'>
                        <video
                            src={videoTraining}
                            autoPlay={true}
                            muted
                            loop
                            controls
                            className='promoTraining__video-item'
                        />
                    </div>
                    <div className='promoTraining__description'>
                        <div className='promoTraining__subtitle'>
                            Пробная тренировка ягодиц
                        </div>{" "}
                        <div className='divider'></div>
                        <div className='promoTraining__text'>
                            Погрузись в атмосферу домашнего комфорта, включи
                            свою любимую музыку и отправляйся в увлекательное
                            путешествие к красивым и упругим ягодицам. Пройди
                            три захватывающих круга, и уже завтра приятная
                            усталость напомнит о достигнутом
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
