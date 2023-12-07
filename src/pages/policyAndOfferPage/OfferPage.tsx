import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const OfferPage = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <button
                onClick={() => navigate(-1)}
                style={{ marginBottom: "50px", width: "100px" }}
            >
                Вернуться на главную
            </button>

            <pre style={{ whiteSpace: "pre-wrap", fontSize: "14px" }}>
                ДОГОВОР ОБ ОКАЗАНИИ КОНСУЛЬТАЦИОННЫХ УСЛУГ
                <br />
                на условиях публичной оферты
                <br />
                г. Марьина Горка 24 августа 2023 года
                <br />
                <br />
                Плательщик НПД Наумова Карина Дмитриевна, именуемый в дальнейшем
                «Исполнитель», и потребитель информационного видеоконтента в
                сфере фитнеса и здорового питания, распространенного посредством
                сети интернет, именуемый в дальнейшем «Заказчик», с другой
                стороны, именуемые в дальнейшем «Стороны», в соответствии с п. 2
                ст. 407 Гражданского кодекса Республики Беларусь заключили
                настоящий Договор о нижеследующем:
                <br />
                <br />1 ПРЕДМЕТ ДОГОВОРА
                <br />
                1.1 Исполнитель принимает на себя обязательство по оказанию, а
                Заказчик принимает на себя обязательства по оплате
                предоставленной информации в виде видеооконтента в соответствии
                с условиями настоящего договора.
                <br />
                1.2 Под предоставлением информационного видеоконтента (далее -
                Услуги) понимается предоставление мною заказчикам через сеть
                Интернет видеоконтентов на тему здорового питания и фитнеса с
                отсутствием контроля за выполнение заказчиком указанных в них
                рекомендаций
                <br />
                <br />2 ПОРЯДОК ЗАКЛЮЧЕНИЯ ДОГОВОРА
                <br />
                2.1 Публикация (размещение) текста настоящего Договора на
                интернет-сайте Исполнителя по адресу: https://naumova-team.by/
                является публичным предложением (офертой) Исполнителя,
                адресованным неопределенному кругу лиц, заключить настоящий
                Договор (п. 2 ст. 407 Гражданского Кодекса Республики Беларусь).
                <br />
                2.2 Настоящий Договор является публичным договором (ст. 396
                Гражданского Кодекса Республики Беларусь), в соответствии с
                которым Исполнитель принимает на себя обязательство по оказанию
                Услуг в отношении неопределенного круга лиц, обратившихся за
                указанными Услугами.
                <br />
                2.3 Настоящий Договор является договором присоединения. Его
                заключение производится посредством принятия Заказчиком условий
                настоящего Договора в порядке, предусмотренном ст. 398
                Гражданского Кодекса Республики Беларусь, т. е. путем
                присоединения к настоящему Договору в целом без каких-либо
                условий, изъятий и оговорок.
                <br />
                2.4 Фактом принятия (акцепта) Заказчиком условий настоящего
                Договора является предоплата Заказчиком заказанных им Услуг в
                соответствии с условиями настоящего Договора (п. 3 ст. 408
                Гражданского Кодекса-Республики Беларусь).
                <br />
                2.5 Договор признается заключенным в момент получения
                Исполнителем, направившим оферту, ее акцепта (п. 1 ст. 403
                Гражданского Кодекса Республики Беларусь), и действует до
                полного исполнения сторонами своих обязательств. Датой
                осуществления акцепта по настоящему Договору считается дата
                зачисления денежных средств Заказчика на расчетный счет
                Исполнителя в счет предоплаты заказанных Услуг.
                <br />
                2.6 Настоящее предложение (Договор) в соответствии с п. 2 ст.
                407 Гражданского Кодекса Республики Беларусь является публичной
                офертой, а в соответствии со ст. 410 Гражданского Кодекса
                Республики Беларусь настоящий Договор считается сделкой,
                заключенной в письменной форме в городе Полоцке, Республика
                Беларусь.
                <br />
                2.7 Акцептирование Заказчиком настоящего Договора означает, что
                он полностью согласен со всеми положениями настоящего Договора.
                <br />
                <br />3 ПОРЯДОК ОКАЗАНИЯ УСЛУГ
                <br />
                3.1 При желании заключить договор с Исполнителем Заказчик
                осуществляет оформление онлайн-заявки на оказание Услуг. К
                заявке Заказчик прилагает по своему желанию свои фотографии в
                полный рост в облегающей фигуру одежде либо в купальном
                костюме/плавках (фотографии в нижнем белье не принимаются).
                Получив заявку от Заказчика, Исполнитель направляет Заказчику
                через сеть Интернет (Телеграм, социальные сети) или прочие
                сервисы, предусматривающие обмен информацией, подтверждение
                приема заявки.
                <br />
                3.2 После поступления предоплаты от Заказчика, Исполнитель
                направляет Заказчику через сеть Интернет (Телеграм, социальные
                сети) или прочие сервисы, предусматривающие обмен информацией,
                подтверждение приема платежа и предоставляя ссылку на
                видеоконтент тренировок и ознакомительное видео на тему
                здорового питания.
                <br />
                3.3 Подтверждением факта оказания услуг Исполнителем является
                получение Заказчиком ссылки на видеоконтент. Услуги считаются
                оказанными надлежащим образом и в полном объеме, если в течение
                5 (пяти) календарных дней с момента окончания срока оказания
                Услуг Исполнителю не поступило претензий со стороны Заказчика по
                качеству и объему оказанных Услуг. ПРАВА И ОБЯЗАННОСТИ СТОРОН
                <br />
                3.4 Обязанности Заказчика:
                <br />
                3.4.1 Заказчик обязан предоставить исчерпывающую информацию,
                необходимую Исполнителю для надлежащего оказания Услуг.
                <br />
                3.4.2 Заказчик обязуется произвести своевременную оплату услуг
                Исполнителя.
                <br />
                3.4.3 Заказчик по требованию Исполнителя обязан оказывать
                всяческое содействие Исполнителю в оказании услуг: предоставлять
                необходимые данные, выполнять иные действия, необходимые для
                надлежащего оказания Услуг Исполнителем.
                <br />
                3.4.4 Заказчик обязан проконсультироваться у своего лечащего
                врача и (или) иного советующего квалифицированного медицинского
                специалиста о возможности применения (использования) информации,
                предоставленной в виде информационного контента, исходя из его
                (заказчика) состояния здоровья, физического развития, морального
                состояния, о которых не может быть и не могло было быть известно
                Исполнителю.
                <br />
                3.4.5 Заключая настоящий договор Заказчик согласен и
                подтверждает, что в случае неисполнения им своих обязательств,
                указанных в подпункте 4.1.4 настоящего Договора риск
                неблагоприятных последствий применения полученной информации из
                видеоконтента, соответственно, ответственность за такие
                последствия возлагается непосредственно на самого Заказчика.
                <br />
                3.4.6 Своевременно информировать Исполнителя об обстоятельствах,
                которые могут повлиять на исполнение настоящего договора;
                <br />
                3.4.7 Заказчик обязан осуществить все иные действия, необходимые
                для исполнения данного договора, предусмотренные
                законодательством и настоящим договором.
                <br />
                <br />
                3.5 Права Заказчика:
                <br />
                3.5.1 Заказчик вправе проверить качество оказания Услуг, их
                соответствие своим параметрам без вмешательства в деятельность
                Исполнителя.
                <br />
                3.5.2 Заказчик вправе отказаться от настоящего Договора до
                момента полного оказания Исполнителем Услуг.
                <br />
                3.5.2.1 Отказ Заказчика от исполнения настоящего Договора в
                5-дневный срок с момента факта оказания услуг Исполнителем не
                влечет за собой последствия, предусмотренные п. 2 ст. 352
                Гражданского кодекса Республики Беларусь, в части оставления
                суммы предоплаты, внесенной Заказчиком в обеспечение исполнения
                настоящего договора, Исполнителю.
                <br />
                3.5.3.2 Отказ Заказчика от исполнения настоящего Договора влечет
                прекращение всех обязательств Исполнителя по данному Договору.
                <br />
                3.5.4.3 В случае возникновения у Заказчика заболеваний, лишающих
                его возможности следовать плану питания и тренировочной
                программе, Заказчик должен предоставить Исполнителю
                подтверждающий заболевание документ. Данный факт влечет
                прекращение всех обязательств Исполнителя по данному Договору, а
                также возвращение Заказчику 50% процентов внесенной им
                предоплаты.
                <br />
                <br />
                3.6 Права Исполнителя:
                <br />
                3.6.1 Исполнитель имеет право не оказывать Услуги, а начатые
                действия по оказанию Услуг приостановить, в случаях, когда
                нарушение Заказчиком своих обязанностей по настоящему Договору в
                соответствии с п. 4.1. Договора препятствуют исполнению Договора
                Исполнителем, а также если Исполнитель уже ранее реализовал свое
                право по истребованию возврата задатка в соответствии с п. 5.5.
                Договора.
                <br />
                3.6.2 Исполнитель вправе использовать и распоряжаться
                результатами собственной деятельности по оказанию Услуг,
                предоставленными Заказчику, как являющимися объектами
                интеллектуальной собственности, так и не являющимися таковыми,
                любым способом по собственному усмотрению, в том числе и
                предоставлять их третьим лицам.
                <br />
                3.7 Обязанности Исполнителя:
                <br />
                3.7.1 Исполнитель обязуется оказать предусмотренные настоящим
                Договором Услуги в соответствии с условиями настоящего Договора
                и законодательства.
                <br />
                <br />4 СТОИМОСТЬ УСЛУГ И ПОРЯДОК РАСЧЕТОВ
                <br />
                4.1Стоимость Услуг является фиксированной.
                <br />
                4.2 Заказчик осуществляет оплату заказанных Услуг на условиях
                100% предоплаты посредством внесения/перечисления денежных
                средств в белорусских рублях на расчетный счет Исполнителя
                согласно данным и реквизитам, указанным в настоящем Договоре и
                на интернет-сайте Исполнителя.
                <br />
                4.3 Все издержки, связанные с проведением платежей по настоящему
                договору на счет Исполнителя, несет Заказчик.
                <br />
                4.4 Сумма, перечисленная Заказчиком согласно п. 5.2. настоящего
                договора является задатком.
                <br />
                4.5 Заказчик вправе однократно истребовать возврат задатка в
                5-дневный срок с момента факта оказания Услуг, если он остался
                не удовлетворён качеством оказания Услуг, без объяснения
                конкретных причин.
                <br />
                4.6 В случае невозможности исполнения настоящего Договора, по
                истечению 5- дневного срока с момента факта оказания Услуг,
                возникшей из-за невыполнения или ненадлежащего выполнения
                Заказчиком обязанностей по Договору, сумма предоплаты за
                оказание Услуг в силу п. 2 ст. 352 Гражданского кодекса
                Республики Беларусь возврату Заказчику не подлежит.
                <br />
                4.7 Исполнитель имеет право в одностороннем внесудебном порядке
                произвести изменение стоимости услуг по настоящему договору,
                уведомив Заказчика посредством размещения информации
                (объявления) об этом на своем интернет ресурсе -
                https://pokaboka.by/.
                <br />
                <br />5 ОСОБЫЕ УСЛОВИЯ
                <br />
                5.1 Стороны безоговорочно признают, что Услуги не являются
                психологической или психотерапевтической помощью,
                психокоррекцией, либо медицинской помощью, в том числе
                какой-либо медицинской услугой.
                <br />
                5.2 Заказчик несет все риски некорректного и недостаточно
                подробного указания своих параметров и прочих данных при
                оформлении заявки на оказание Услуг.
                <br />
                5.3 Заказчик самостоятельно применяет План питания и Программу
                тренировок, Исполнитель не несет ответственности за результаты
                Деятельности Заказчика.
                <br />
                5.4 Объем ответственности Исполнителя не может превышать
                стоимости Услуг, оказанных Заказчику по настоящему Договору.
                Исполнитель не несет ответственности за причинение убытков
                Заказчику, а также причинение ему морального вреда действиями
                третьих лиц в результате невыполнения Заказчиком рекомендаций
                Исполнителя, содержащихся как в Планах питания, так и в
                консультациях.
                <br />
                5. 5 Все материалы, подготовленные Исполнителем в процессе
                оказания Услуг, формируются им в электронном виде и отправляются
                Заказчику через сеть Интернет (Телеграм, социальные сети) или
                прочие сервисы, предусматривающие обмен информацией. Все
                уведомления, счета и прочие документы направляются сторонами
                через сеть Интернет (Телеграм, социальные сети) или прочие
                сервисы, предусматривающие обмен информацией. Исполнитель не
                несет ответственности за ненадлежащую работу используемых
                Заказчиком почтовых сервисов либо используемых им ресурсов в
                сети Интернет в части несвоевременного получения писем или
                отсутствия возможности их доставить.
                <br />
                5.6 Исполнитель является Оператором, осуществляющим обработку
                персональных данных.
                <br />
                5.7 Совершив принятие (акцепт) условий настоящего Договора,
                Заказчик выражает согласие на обработку своих персональных
                данных.
                <br />
                5.8 Перечень персональных данных, на обработку которых выражает
                согласие Заказчик: фамилия, имя, отчество; гражданство; дата
                рождения; паспортные данные или данные иного документа,
                удостоверяющего личность (серия, номер, дата выдачи,
                наименование органа, выдавшего документ, и др.); сведения о
                регистрации по месту жительства (включая адрес, дату
                регистрации); контактные данные (включая номера рабочего,
                домашнего и (или) мобильного телефона, электронной почты и др.);
                сведения о трудовой деятельности (место работы, должности); пол;
                рост, вес; биометрические персональные данные (включая
                фотографии, изображения с камер видеонаблюдения, записи голоса);
                иные данные, необходимые для надлежащего оказания услуг.
                <br />
                5.9 Исполнитель обязуется использовать все полученные в рамках
                оказания Услуг персональные данные и фото Заказчика
                исключительно в целях надлежащего оказания Услуг.
                <br />
                5.10 Исполнитель не имеет права передавать полученные
                персональные данные и фото третьим лицам. Исполнитель обязуется
                хранить персональные данные Заказчика в течение 2-х лет после
                окончания оказания Услуг, после чего персональные данные
                уничтожаются.
                <br />
                5.11 Заказчик вправе в любой момент отозвать свое согласие на
                обработку персональных данных путем письменного обращения в
                адрес Исполнителя, а Исполнитель обязан в пятидневный срок от
                даты поступления такого обращения удалить все персональные
                данные Заказчика.
                <br />
                <br />6 ОБСТОЯТЕЛЬСТВА НЕПРЕОДОЛИМОЙ СИЛЫ
                <br />
                6.1 Стороны освобождаются от ответственности за частичное или
                полное неисполнение своих обязательств по настоящему Договору,
                если это явилось следствием действия обстоятельств непреодолимой
                силы (форс-мажора), возникших после заключения настоящего
                Договора в результате событий чрезвычайного характера, которые
                Стороны не могли ни предвидеть, ни предотвратить разумными
                мерами.
                <br />
                6.2 К обстоятельствам непреодолимой силы относятся события, на
                которые ни одна Сторона не может оказывать влияния и за
                возникновение которых она не несет ответственности, как то:
                война, восстание, забастовка, землетрясение, наводнение, пожар,
                суровые погодные условия или другие стихийные бедствия,
                правительственные постановления, распоряжения (указы)
                государственных органов и должностных лиц, законы и иные
                нормативные акты компетентных органов, принятые после акцепта
                настоящего Договора и делающие невозможным исполнение
                обязательств, установленных настоящим Договором, а также
                действия государственных или местных органов государственной
                власти и управления или их представителей, препятствующие
                выполнению условий настоящего договора.
                <br />
                6.3 При наступлении обстоятельств непреодолимой силы,
                препятствующих исполнению обязательств по настоящему договору,
                срок выполнения Сторонами таких обязательств переносится
                соразмерно времени действия таких обстоятельств, а также
                времени, требуемого для устранения их последствий, но не более
                ста восьмидесяти календарных дней.
                <br />
                6.4 В случае если обстоятельства непреодолимой силы продолжают
                действовать более срока, указанного в п. 7.3 настоящего
                договора, либо, когда при их наступлении обеим Сторонам
                становится очевидным, что обстоятельства будут действовать более
                этого срока, Стороны обязуются обсудить возможности
                альтернативных способов исполнения настоящего Договора или его
                прекращения.
                <br />
                <br />
                7 ПОРЯДОК РЕШЕНИЯ СПОРОВ И РАЗНОГЛАСИЙ
                <br />
                7.1 Все споры и разногласия, которые могут возникнуть из
                настоящего Договора или в связи с ним, Стороны решают путем
                проведения переговоров.
                <br />
                7.2 Все вопросы, возникающие из настоящего Договора или
                относящиеся к нему, которые стороны не могут урегулировать путем
                переговоров, передаются на разрешаются в суде по месту
                нахождения ответчика.
                <br />
                7.3 Стороны берут на себя взаимные обязательства по соблюдению
                конфиденциальности в отношении информации, полученной при
                исполнении настоящего договора.
                <br />
                7.4 Исполнитель имеет право в одностороннем внесудебном порядке
                произвести изменение любых условий настоящего Договора, уведомив
                Заказчика посредством размещения информации (объявления) на
                своем интернет ресурсе - https://naumova-team.by/.
                <br />
                7.5 Во всех вопросах, не урегулированных настоящим Договором,
                стороны руководствуются законодательством Республики Беларусь.
                <br />
                7.6 Стороны признают юридическую силу настоящего Договора, а
                также всех документов и приложений к нему, направленных на его
                исполнение, переданного(ых) по факсимильной связи и (или)
                электронной почте, позволяющей достоверно установить, что
                документ исходит от Стороны по Договору, а также факсимильного
                воспроизведения подписи с помощью средств механического или
                иного копирования, либо иного аналога собственноручной подписи
                на договоре и иных документах, направленных на его исполнение,
                до предоставления оригиналов.
                <br />
                <br />8 АДРЕСА, РЕКВИЗИТЫ СТОРОН
                <br />
                8.1 Стороны безоговорочно соглашаются под реквизитами Заказчика
                считать информацию, указанную им при оформлении заказа на
                предоставление Услуг.
                <br />
                8.2 Реквизиты Исполнителя:
                <br />
                Наумова Карина Дмитриевна
                <br />
                УНП КВ3361428
                <br />
                Юр. адрес: 222811, Минская область, Пуховичский район, г Марьина
                Горка, ул Красноармейская д 38 кв 1
                <br />
                Р/с: BY48MTBK30140008999901540492 в ЗАО "МТБанк"; БИК: MTBKBY22
            </pre>
        </div>
    );
};
