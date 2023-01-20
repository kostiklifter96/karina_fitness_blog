import { AboutMeItem } from "./AboutMeItem";

import { data } from "./../../data/data";
export const AboutMe = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='about__wrapper'>
                    <div className='about__photo'></div>

                    <div className='about__descr'>
                        <h2 className='title title__fz16 about__title'>
                            Про Меня
                        </h2>
                        <div className='title title__fz36 about__subtitle'>
                            Меня зовут Карина
                        </div>
                        <div className='divider'></div>
                        <p className='about__text'>
                            Получила высшее биологическое образование. С начала
                            2017 года я работала в фитнес-клубе. В 2020 г
                            забеременела, ушла в декрет. Далее занялась своим
                            послеродовым восстановлением, транслируя тренировки
                            в Инстаграм. Так я заинтересовала многих девушек, в
                            том числе молодых мам, которые хотели быстрее
                            вернуться в форму. Летом в 2022 г я собрала группу
                            девушек, добавила их в закрытый аккаунт и проводила
                            Online тренировки в прямом эфире. Так образовалась
                            команда Naumova_team. В марте 2023 г я
                            усовершенствовала проект и теперь приглашаю каждую
                            желающую принять участие , чтобы заполучить тело
                            мечты.
                        </p>
                    </div>

                    <div className='about__skills'>
                        {data[0].aboutMe?.map((item) => (
                            <AboutMeItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
