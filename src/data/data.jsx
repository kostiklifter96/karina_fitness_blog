export const data = [
    {
        firstColumn: [
            {
                id: 1,
                universityOrPosition: "МГЭИ им. Сахарова при БГУ",
                aducationOrJob:
                    "Высшее специальное образование | Биолог - аналитик | Минск (2014-2019)",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ea libero sequi accusamus dicta nemo voluptatibus dolor sint ab nihil asperiores, excepturi dolores. Voluptas, doloremque fuga. Eum quis dolor nam?",
                img: "icons/resume/Vector.svg",
            },
            {
                id: 2,
                universityOrPosition: "Фитнес школа 'Адреналин'",
                aducationOrJob: "Инструктор тренажерного зала | Минск (2016)",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ea libero sequi accusamus dicta nemo voluptatibus dolor sint ab nihil asperiores, excepturi dolores. Voluptas, doloremque fuga. Eum quis dolor nam?",
                img: "icons/resume/Courses.svg",
            },
        ],
        secondColumn: [
            {
                id: 3,
                universityOrPosition: "Учебный центр «Фитнес образование»",
                aducationOrJob: " Направление Stretching | Минск (2019)",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ea libero sequi accusamus dicta nemo voluptatibus dolor sint ab nihil asperiores, excepturi dolores. Voluptas, doloremque fuga. Eum quis dolor nam?",
                img: "icons/resume/Biceps.svg",
            },
            {
                id: 4,
                universityOrPosition: "Онлайн-тренинг",
                aducationOrJob: ` Индивидуальные и групповые тренировки | (2020 - ${new Date().getFullYear()})`,
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ea libero sequi accusamus dicta nemo voluptatibus dolor sint ab nihil asperiores, excepturi dolores. Voluptas, doloremque fuga. Eum quis dolor nam?",
                img: "icons/resume/Online.svg",
            },
        ],
        aboutMe: [
            {
                id: 5,
                title: "Тренировки с беременными",
                description:
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ducimus laboriosam quia facere, ut suscipit ullam sapiente",
                img: "icons/aboutMe/mother.svg",
            },
            {
                id: 6,
                title: "Домашние тренировки",
                description:
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ducimus laboriosam quia facere, ut suscipit ullam sapiente",
                img: "icons/aboutMe/HomeFit.svg",
            },
            {
                id: 7,
                title: "Правильное Питание",
                description:
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ducimus laboriosam quia facere, ut suscipit ullam sapiente",
                img: "icons/aboutMe/PP.svg",
            },
        ],

        skills: [
            {
                id: 8,
                title: "9 тренировок ",
                description:
                    "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта",
                img: "icons/skills/RedGirl.svg",
            },
            {
                id: 9,
                title: "Помощь в расчете кБЖУ",
                description:
                    "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта",
                img: "icons/skills/FreeGirl.svg",
            },
            {
                id: 10,
                title: "Меню на 21 день",
                description:
                    "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта",
                img: "icons/skills/Stretching.svg",
            },
            {
                id: 11,
                title: "Общий чат с участниками и со мной",
                description:
                    "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта",
                img: "icons/skills/",
            },
        ],

        level: [
            { id: 15, title: "Создание ", level: "100%" },
            { id: 16, title: "Создание ", level: "85%" },
            { id: 17, title: "Работа ", level: "60%" },
            { id: 18, title: "Креативность", level: "75%" },
            { id: 19, title: "Soft skills", level: "50%" },
            { id: 20, title: "Создание ", level: "75%" },
        ],

        portfolio: [
            { id: 20, href: "#", img: "image/portfolio/1.jpg", className: "" },
            { id: 21, href: "#", img: "image/portfolio/2.jpg", className: "" },
            { id: 22, href: "#", img: "image/portfolio/3.jpg", className: "" },
            {
                id: 23,
                href: "#",
                img: "image/portfolio/4.jpg",
                className: " vertical",
            },
            { id: 24, href: "#", img: "image/portfolio/5.jpg", className: "" },
            {
                id: 25,
                href: "#",
                img: "image/portfolio/6.jpg",
                className: " horizontal",
            },
        ],

        priceList: [
            {
                id: 26,
                type: "Персональный оффлайн-тренер",
                price: "От 130$ / месяц",
                description: "Тренировки в зале под полным присмотром",
            },
            {
                id: 27,
                type: "Персональный онлайн-тренер",
                price: "От 100$ / месяц",
                description: "Тренировки в любой точке мира",
            },
            {
                id: 28,
                type: "План тренировок",
                price: "От 50$ / месяц",
                description: "План тренировок дома / в зале",
            },
            {
                id: 29,
                type: "План питания",
                price: "От 50$ / месяц",
                description:
                    "План питания для набора/похудения/поддержания веса",
            },
            {
                id: 30,
                type: "Разбор анализов",
                price: "50$",
                description: "Разбор ваших анализов крови",
            },
            {
                id: 31,
                type: "Все включено ",
                price: "180$ / месяц",
                description:
                    "Любой вид тренировок + план питания + разбор анализов",
            },
        ],
        listQuestions: [
            {
                id: 32,
                title: "В какое время проходят тренировки?",
                description:
                    "Тренировки предоставляются в записи, поэтому их можно выполнять тогда, когда вам удобно",
            },
            {
                id: 33,
                title: "Вы скидываете набор упражнений или тренируетесь вместе с нами?",
                description:
                    "Я тренируюсь с вами всю тренировку! В моменте объясняю технику упражнений, показываю разные уровни сложности и мотивирую, чтобы вы не сошли с дистанции.",
            },
            {
                id: 34,
                title: "Как нужно питаться во время участия в проекте?",
                description:
                    "Я объясняю, как высчитать свое кБЖУ, плюс отправляю готовое меню на 21 день с расчитанным кБЖУ. Также объясняю, как питаться, если нет желания взвешивать еду.",
            },
            {
                id: 35,
                title: "На сколько кг можно похудеть, участвуя в вашем проекте?",
                description:
                    "Многое зависит от вашего изначального веса и дисциплины. Чаще всего участницы скидывают 3-5 кг за 3 недели.",
            },
            {
                id: 36,
                title: "Как долго сохраняется доступ к тренировкам?",
                description:
                    "Доступ сохраняется на протяжении проекта - 3 недели.",
            },
            {
                id: 37,
                title: "Нужно ли дополнительное оборудование для тренировок? Фитнес-резинки и гантели ?",
                description:
                    "Нет. Тренировки выполняются только с собственным весом тела.",
            },
            {
                id: 38,
                title: "Для какого уровня подготовки рассчитаны тренировки ?",
                description:
                    "Тренировки рассчитаны для любого уровня подготовки, т.к в момент тренировки я объясняю, как упростить /усложнить упражнение. Если у вас есть травмы или особенности организма, то проконсультируйтесь с врачом.",
            },
        ],
    },
];
