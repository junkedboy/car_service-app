export const navigation = [
    {
        id: 1,
        title: 'Послуги та ціни',
        description: 'Перелік виконуємих робіт та цін',
        img: 'https://lh3.googleusercontent.com/06dKcqzeyz-zbsak0LQPehy_shcPTEwaxBScK85LzA_AeU4drKi673O5KUSMpzvO4kJontg73bRng34UJLcyo-6idYelWUkQt2kAExgtDdEkbIFraTNegOKuveD7bR4IcjKnSUIiQg=w2400',
        route: '/services'
    },
    {
        id: 2,
        title: 'Бортжурнал',
        description: 'Історія обслуговування та проведення робіт',
        img: 'https://lh3.googleusercontent.com/OKttFXVObmFiy7q_NMmW0oaZwiTZU1ugZFv4Fq-OQzWpqI5mZ9HQgFodghzKD1clAU7v0bbm63MV0ATdCOJjJIcFSHErHRxOm3QnNtY0babVj5MdebwfoUqPMIrvEhIJV5WN7j4CDw=w2400',
        route: '/journal'
    },
    {
        id: 3,
        title: 'Магазин',
        description: 'Запчастини, розхідники для ТО тощо',
        img: 'https://lh3.googleusercontent.com/kRkWnWtxw67L3w0ifZkfk6v_fFGfjeUMTkRQFH547yo7NNtne1udY_71KbJafre3hW-_MTMEcIomKNPJbUEozGnmmAZ81n3FUyELUKcYcevXaJ-paBMTC0rYU32TGmRY1EPO66xfuA=w2400',
        route: '/shop'
    },
    {
        id: 4,
        title: 'Галерея',
        description: 'Портфоліо наших проектів та інше',
        img: 'https://lh3.googleusercontent.com/UL1FLVSGyAF22Ig25BpLmW5IvtBu2WxHOkPd4x8UrkqNGkRw9UGaLN8bFmwWXuhye5lTQLbbwstXp2rBZO3rcHwjuz2VfYmgBZVt5Si3liA5TaG8OXhIfQFU9vgdIiCJ-J-MXQ-ryw=w2400',
        route: '/gallery'
    },
    {
        id: 5,
        title: 'Про нас',
        description: 'Детально про нас, адреса, як доїхати тощо',
        img: 'https://lh3.googleusercontent.com/UL1FLVSGyAF22Ig25BpLmW5IvtBu2WxHOkPd4x8UrkqNGkRw9UGaLN8bFmwWXuhye5lTQLbbwstXp2rBZO3rcHwjuz2VfYmgBZVt5Si3liA5TaG8OXhIfQFU9vgdIiCJ-J-MXQ-ryw=w2400',
        route: '/about'
    },
]

export const adminModules = [
    // {
    //     id: 1,
    //     key: 'base',
    //     title: 'Основна конфігурація',
    //     description: 'Заміна номерів телефону, картинок та іншої інформації на сайті',
    // },
    {
        id: 2,
        key: 'services',
        title: 'Послуги та ціни',
        description: 'Перелік виконуємих робіт та цін',
    },
    {
        id: 3,
        key: 'journal',
        title: 'Бортжурнал',
        description: 'Історія обслуговування та проведення робіт',
    },
    {
        id: 4,
        key: 'shop',
        title: 'Магазин',
        description: 'Запчастини, розхідники для ТО тощо',
    },
    {
        id: 5,
        key: 'gallery',
        title: 'Галерея',
        description: 'Портфоліо наших проектів та інше',
    },
    {
        id: 6,
        key: 'about',
        title: 'Про нас',
        description: 'Детально про нас, адреса, як доїхати тощо',
    },
    {
        id: 7,
        key: 'users',
        title: 'Користувачі',
        description: 'Додати, видалити або редагувати користувача',
    },
]

// ---------------------- SERVICE ----------------------------

export const serviceCategories = [
    {
        id: 1,
        title: 'ТО'
    },
    {
        id: 2,
        title: 'Ходова'
    },
    {
        id: 3,
        title: 'Двигун'
    },
    {
        id: 4,
        title: 'Паливна система'
    },
    {
        id: 5,
        title: 'Трансміссія'
    },
    {
        id: 6,
        title: 'Гальмівна система'
    },
    {
        id: 7,
        title: 'Кузовні роботи'
    },
    {
        id: 8,
        title: 'Малярні роботи'
    },
    {
        id: 9,
        title: 'Електроніка'
    },
    {
        id: 10,
        title: 'Інше'
    },
]

export const service = [
    {
        id: 1,
        category: 1,
        title: 'Заміна масла у двигуні, фільтр масляний, фільтр повітряний',
        description: 'Підйом авто та повна заміна мастила, заміна фільтра оливи, також опціонально проводиться заміна повітряного фільтра та салонного фільтру згідно регламенту',
        price: 200,
        time: '20-40 хв'
    },
    {
        id: 2,
        category: 1,
        title: 'Заміна ременя ГРМ та роликів',
        description: 'Детальний опис для Заміна ременя ГРМ та роликів <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 1500,
        time: '3-5 годин'
    },
    {
        id: 3,
        category: 1,
        title: 'Заміна привідних ременів та роликів',
        description: 'Детальний опис для Заміна привідних ременів та роликів <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 500,
        time: '2-3 тижня'
    },
    {
        id: 4,
        category: 1,
        title: 'Заміна рідини охолодження двигуна (антифріз)',
        description: 'Детальний опис для Заміна рідини охолодження двигуна (антифріз) <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 600,
        time: '20-40 хв'
    },
    {
        id: 5,
        category: 1,
        title: 'Заміна рідини ГПК (ГУР)',
        description: 'Детальний опис для Заміна рідини ГПК (ГУР) <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 300,
        time: '3-5 годин'
    },
    {
        id: 6,
        category: 2,
        title: 'Діагностика ходової',
        description: 'Детальний опис для Діагностика ходової <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 300,
        time: '2-3 тижня'
    },
    {
        id: 7,
        category: 2,
        title: 'Заміна шарової опори (1шт)',
        description: 'Детальний опис для Заміна шарової опори (1шт) <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 300,
        time: '3-5 годин'
    },
    {
        id: 8,
        category: 2,
        title: 'Заміна рульових накінечників (2шт)',
        description: 'Детальний опис для Заміна рульових накінечників (2шт) <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 500,
        time: '2-3 тижня'
    },
    {
        id: 9,
        category: 2,
        title: 'Заміна сайлентблока (1шт)',
        description: 'Детальний опис для Заміна сайлентблока (1шт) <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 550,
        time: '20-40 хв'
    },
    {
        id: 10,
        category: 3,
        title: 'Діагностика двигуна ендоскопом',
        description: 'Детальний опис для Діагностика двигуна ендоскопом <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 700,
        time: '3-5 годин'
    },
    {
        id: 11,
        category: 3,
        title: "Комп'ютерна діагностика двигуна",
        description: 'Детальний опис для Комп діагностики двигуна <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 300,
        time: '2-3 тижня'
    },
    {
        id: 12,
        category: 3,
        title: "Регулювання клапанів",
        description: 'Детальний опис для Регулювання клапанів <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 2000,
        time: '20-40 хв'
    },
    {
        id: 13,
        category: 3,
        title: "Заміна патрубка системи охолодження",
        description: 'Детальний опис для Заміна патрубка системи охолодження <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 200,
        time: '3-5 годин'
    },
    {
        id: 14,
        category: 4,
        title: 'Чистка форсунок',
        description: 'Детальний опис для Чистка форсунок <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 1000,
        time: '2-3 тижня'
    },
    {
        id: 15,
        category: 4,
        title: 'Заміна бензонаноса',
        description: 'Детальний опис для Заміна бензонаноса <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 200,
        time: '20-40 хв'
    },
    {
        id: 16,
        category: 4,
        title: 'Заміна магістрілей паливної системи',
        description: 'Детальний опис для Заміна магістрілей паливної системи <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 500,
        time: '3-5 годин'
    },
    {
        id: 17,
        category: 4,
        title: 'Заміна палвного фільтра',
        description: 'Детальний опис для Заміна палвного фільтра <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 400,
        time: '2-3 тижня'
    },
    {
        id: 18,
        category: 5,
        title: 'Заміна щеплення',
        description: 'Детальний опис для Заміна щеплення <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 2500,
        time: '20-40 хв'
    },
    {
        id: 19,
        category: 5,
        title: 'Заміна троса щеплення',
        description: 'Детальний опис для Заміна троса щеплення <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 2500,
        time: '3-5 годин'
    },
    {
        id: 20,
        category: 6,
        title: 'Заміна гальмівних дисків Заміна гальмівних дисків Заміна гальмівних дисків Заміна гальмівних дисків Заміна гальмівних дисків ',
        description: 'Детальний опис для аміна гальмівних дисків <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 500,
        time: '2-3 тижня'
    },
    {
        id: 21,
        category: 6,
        title: 'Заміна гальмівних колодок',
        description: 'Детальний опис для Заміна гальмівних колодок <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 300,
        time: '20-40 хв'
    },
    {
        id: 22,
        category: 6,
        title: 'Ремонт супорту',
        description: 'Детальний опис для Ремонт супорту <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 600,
        time: '3-5 годин'
    },
    {
        id: 23,
        category: 7,
        title: 'Виправлення вмятин',
        description: 'Детальний опис для Виправлення вмятин <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 1000,
        time: '2-3 тижня'
    },
    {
        id: 24,
        category: 7,
        title: 'Антикор арок',
        description: 'Детальний опис для Антикор арок <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 600,
        time: '20-40 хв'
    },
    {
        id: 25,
        category: 7,
        title: 'Антикор дна',
        description: 'Детальний опис для Антикор дна <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 2600,
        time: '3-5 годин'
    },
    {
        id: 26,
        category: 8,
        title: 'Покраска деталі',
        description: 'Детальний опис для Покраска деталі <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 5000,
        time: '2-3 тижня'
    },
    {
        id: 27,
        category: 8,
        title: 'Покраска всього авто',
        description: 'Детальний опис для Покраска всього авто <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 70000,
        time: '20-40 хв'
    },
    {
        id: 28,
        category: 9,
        title: 'Припаяти контакт',
        description: 'Детальний опис для Припаяти контакт <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 5000,
        time: '3-5 годин'
    },
    {
        id: 29,
        category: 9,
        title: 'Перепрошивка КАН-шини',
        description: 'Детальний опис для Перепрошивка КАН-шини <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 1000000,
        time: '2-3 тижня'
    },
    {
        id: 30,
        category: 9,
        title: 'Замінити лампочку',
        description: 'Детальний опис для Замінити лампочку <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 1450,
        time: '20-40 хв'
    },
    {
        id: 31,
        category: 10,
        title: 'Щось зробити 1',
        description: 'Детальний опис для Щось зробити 1 <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 1000,
        time: '3-5 годин'
    },
    {
        id: 32,
        category: 10,
        title: 'Щось зробити 2',
        description: 'Детальний опис для Щось зробити 2 <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 2000,
        time: '2-3 тижня'
    },
    {
        id: 33,
        category: 10,
        title: 'Щось зробити 3',
        description: 'Детальний опис для Щось зробити 3 <Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, neque?>',
        price: 300,
        time: '20-40 хв'
    },
]

// ---------------------- SHOP ----------------------------

export const shopCategory = [
    {
        id: 1,
        title: 'Моторна олива'
    },
    {
        id: 2,
        title: 'Фільтри'
    },
    {
        id: 3,
        title: 'Гальмівна система'
    },
    {
        id: 4,
        title: 'Підвіска'
    },
    {
        id: 5,
        title: 'Двигун'
    },
    {
        id: 6,
        title: 'КПП'
    },
]

export const shopSubCategory = [
    {
        id: 1,
        categoryId: 1,    //  Моторна олива
        title: '5w20'
    },
    {
        id: 2,
        categoryId: 1,    //  Моторна олива
        title: '5w30'
    },
    {
        id: 3,
        categoryId: 1,    //  Моторна олива
        title: '5w40'
    },
    {
        id: 4,
        categoryId: 1,    //  Моторна олива
        title: '10w40'
    },
    {
        id: 5,
        categoryId: 2,    //  Фільтри
        title: 'Повітряний фільтр двигуна'
    },
    {
        id: 6,
        categoryId: 2,    //  Фільтри
        title: 'Салонний фільтр'
    },
    {
        id: 7,
        categoryId: 2,    //  Фільтри
        title: 'Масляний фільтр'
    },
    {
        id: 8,
        categoryId: 3,    //  Гальмівна система
        title: 'Гальмівні диски'
    },
    {
        id: 9,
        categoryId: 3,    //  Гальмівна система
        title: 'Гальмівні колодки'
    },
    {
        id: 10,
        categoryId: 3,    //  Гальмівна система
        title: 'Гальмівна рідина'
    },
    {
        id: 11,
        categoryId: 4,    //  Підвіска
        title: 'Сайлентблок'
    },
    {
        id: 12,
        category: 4,    //  Підвіска
        title: 'Важіль'
    },
    {
        id: 13,
        categoryId: 4,    //  Підвіска
        title: 'Шарова опора'
    },
    {
        id: 14,
        categoryId: 4,    //  Підвіска
        title: 'Стійка стабілізатора'
    },
    {
        id: 15,
        categoryId: 4,    //  Підвіска
        title: 'Стійка амортизатора'
    },
    {
        id: 16,
        categoryId: 5,    //  Двигун
        title: 'Охолоджуюча рідина'
    },
    {
        id: 17,
        categoryId: 5,    //  Двигун
        title: 'Ремінь ГРМ'
    },
    {
        id: 18,
        categoryId: 5,    //  Двигун
        title: 'Привідні ремені'
    },
    {
        id: 19,
        categoryId: 6,    //  КПП
        title: 'Якась шестерня'
    },
    {
        id: 20,
        categoryId: 6,    //  КПП
        title: 'Шестерня якась'
    },
]

// ---------------------- GALLERY ----------------------------

export const gallery = [
    {
        id: 1,
        title: 'Hyundai Coupe 2008 GLS - TESLA',
        description: 'Було зроблене велике ТО з заміною всіх рідин, фільтрів та розхідників, також встановлений бампер Hana Motors з покраскою у 2 кольори, JDM-рамкоб номера та решіткою bentley Style',
        date: '26.3.2023',
        url: [
            'https://lh3.googleusercontent.com/w_KxuoqgRVrl7-whkpRejr4S29vMQOpKqPCRKAnijsQYPiqFZEk2E3ciLyQ5utft6_VlGQl9x-UhnRBFqhhuMA2hZOBEoZQL_q1EVXZNo9SJN7Tzg1zCJj_cxoT2Lg_rH--JFYAwmg=w2400',
            'https://lh3.googleusercontent.com/2zW5jWFZj1IX-1ZOdvCJYO_GS3Olcrh9EglfVQoagjr2regpswnYElAXPbcZ2_yQ2cuutuTkzF9deYLG9fcw8zf79G1xIReTnRp0w43YOvhntI1RGokW7KJXn47RR3u9m3kqcDhjKg=w2400',
            'https://lh3.googleusercontent.com/bKx7G8uTwVouvpapJgeCiAj6rQ59y5yFZHSTjGrGoIHQNNZ8GoS6j90Q76VaQg5DkJ6Ze-30mnOmSnzJmAMEPHHAOzSas6Dm45Nn8hpulZPicqvobW_DDfuSGz0gvgyM7Jk2d6NkwA=w2400',
            'https://lh3.googleusercontent.com/O7frhzGMT7gcHa6E-Z9RB1I3-uOkjBJzMUABlKAon2wJkmhtjNZrUfbjYDljhtTfbM-RP-6oA2xY2WBekjVH25VEs5veknbZVxL5Rd-EKL8aldZUSc2pKKNIhQii-TzadBiuA_IYhA=w2400',
            'https://lh3.googleusercontent.com/PYvYlkxCuUyPxPadwMfYiKpg7lcVZB_kB1FhQryTk5QDew4qeHXUkqwLjnS7eMPcODu_oyf0pB-EhdkR3wXxIiErYR6Fi2Gu_Fy_V_kQocljxY67Ls1ylfDev3g4L7iDuoWP81R6dw=w2400',
        ]
    },
    {
        id: 2,
        title: 'Toyota Corolla Sprinter Trueno AE86',
        description: 'Legendary Takumi car fron Initial D anime. The AE86 series of the Toyota Corolla Levin and Toyota Sprinter Trueno are small, front-engine/rear-wheel-drive models within the front-engine/front-wheel-drive fifth generation Corolla (E80) range—marketed by Toyota from 1983 to 1987 in coupé and liftback configurations. Lending themselves to racing, the cars were light, affordable, easily modifiable and combined a five-speed manual transmission, optional limited slip differential, MacPherson strut front suspension, high revving (7800 rpm), twin-cam engine with oil cooler (e.g., in the US), near 50/50 front/rear weight balance, and importantly, a front-engine/rear-drive layout—at a time when this configuration was waning industry-wide.',
        date: '18.9.2022',
        url: [
            'https://lh3.googleusercontent.com/2NeszZFbaIvWrhQv5N4a9QX-tGBs0T0Ugg0kJfuOg8ryNdGo-BqjeiT7kAuN2nTnbNPTv2LOchqK41Io6CCHlUqQ9PwwWKZoNPkOznDKVbUIqVQqxwqsMNKqqg2HkfJJ94LtJR6Dkg=w2400',
            'https://lh3.googleusercontent.com/aoQ8D-8QtWryMtpFU794qTgYXJ8V4BWiZ9VVWZiuEIqjBU35dJv3qhl0Y-x2ApTgHBnuKS_18lB-kB3qh95X9nnbpfAH-HSleecvG3gI-vL4AqBkxPU3RXMmStSlo2KydTWZre4O0A=w2400',
            'https://lh3.googleusercontent.com/dnhaqi4tdbAwQYVoHnP4aKWCKMZZk0itEMPQgI_x1FJm0-bVTDCoNCG57zsl-4w9Uk4GRflriLMdsOPTBeIuFKgIMhOwvwfmXxGj4PEnuNcdXlLUdMvTrb-VVj8iT4jO85cVOrbA4w=w2400',
            'https://lh3.googleusercontent.com/wSvNfFyDSpRFTigGJtiVqn8dVmTZkXwDOfI30CL5jPkNKBpFWqi7bnyurb2sV6JR6fZLd9Q4V-d5g5cTvs77MWBff5k390v5Daq8NVhh0a-SS-x51ubSSufgvdlY18FF_XCIbowvsg=w2400',
            'https://lh3.googleusercontent.com/qjyBFiPvHsDRNQOCe4P7cFkrVky9yzZwaA6oYFjSoUooPEZjvMA-3GWRNaRrwPW5oAG6it6nc1cFr4tN915jdkcrmYkpF6xHcesVZcU_p6Ltxk4pMwhwc2OuG3rdTPr9P0RdE-XXWA=w2400',
        ]
    },
    {
        id: 3,
        title: 'Fast & Furious',
        description: 'Photos of best car ever',
        date: '1.10.2022',
        url: [
            'https://lh3.googleusercontent.com/kvFLIvAxOiWsvkLjX51oCdyNIAM0_VZqj7OAA-FQpAVl3IRyydz5-IzRUykSH1i9m_U8AD7xpJPd3LrSfu0pIRwofBsByThjq2e1fDms7Y8ZgA7reeW8tv3adM_N2S3sEFYPvzTmDg=w2400',
            'https://lh3.googleusercontent.com/r8HeD2wGpbFF8L6tYa4ryZUY-CFTGsvcAqg9RbZiElLblkiddlrCvgQBgeFjn7PlO_mm7jgXNBTtK0CIhFeZp9kp2pl3Ocykn6P5M_IGiX8W1Q5Nt5LNPwFil8ZvOLXKaQha6cFMvA=w2400',
            'https://lh3.googleusercontent.com/g152P1PBMZczv24ANmHe_PnU-TVfVc3WIepaCEXrs2LUWuDxmiG7Z2yIg0OeqZOsvoHdjqUyqLCePWnB7fT_4s-oc6oOznlzgICyTMwfV7pfpOoADaDFgmlhTmEOfGXHNeKAw48BEA=w2400',
            'https://lh3.googleusercontent.com/ZBHPzA-kHy1mIfQLVmCfhhI8Z1_OFdy2dKG09bwQxG0FI1ygHUzR3Giv4FyYNIlvPQtPy6VeN4c23JPZhH_wq_Fc6rHniLIgE7pkH1zYvtZsFp2ECgH3XdAXd-zTmztDZVP27_Khig=w2400',
            'https://lh3.googleusercontent.com/pUsY7xAaVKUAz_EGO_gKhdLJwgmHYMscwNyXsh1kjZ0NQrh5iI6Ki4ASfvFVFcCHuTeK0q2wyOEhZAxQdYHkU4mofVOaf1FRHmYwJJTVY3HrHF4jlBl1BUOL7jFXUd7gRLe0jLGH-w=w2400',
        ]
    },
    {
        id: 4,
        title: 'JDM cars compilation',
        description: 'Mazda RX-8, Toyota Mark 2 100, Mitsubishi Evolution 9, Nissan Skyline R34 and Nissan Silvia S15',
        date: '13.8.2021',
        url: [
            'https://lh3.googleusercontent.com/zkOY2dbppOia5Uz5Dw22yekvEJ_XP-Dc1DyXUPWMVI1FuFpkhDbmWgjfxUAwTEBuTjlbgHXcNSJJSCEan61mfnGLvvHZJjMXr1Pi1CI7ETBMnlDHTLBH5Joc_4P6vZmdqSjy4xDIlg=w2400',
            'https://lh3.googleusercontent.com/riRKTIKV-6o98kz3oLgG4rphAz57eJa42-w__qqQqX3njjhtdui0Ni6BTN5xCk-u3t5_VTPcvB9AMqzW5YMHJLo-s2H6Gx2dKUepJqdHnq0oVfqTipqGPfVEzp_X12ewhXZhqKTy6A=w2400',
            'https://lh3.googleusercontent.com/VRWYmXuqHniPBNDZpxkMHQhXZSYK-6DVF-g1tFB8rOO1K_iiAa64VxQpm_1EvNGLKW-N-1VT8-RicxFvbMQqNa6w6iUO7maISm3gkehLVe91LFl1p8iobonU7us4ENmXEujlfZ_geA=w2400',
            'https://lh3.googleusercontent.com/m8UKTkzh88h5aosDoj6BzTVmhLMfYvsnupeLRZfxKOqSvu7En9rIzHIDijiQVjfQ5kd1X8vvJ_zPRfHoMrf4shQE6GnvAp6-Eiz4ZijH_i5qrjzAss5ivzVztVRetV7L_syMAx7y1g=w2400',
            'https://lh3.googleusercontent.com/HJgfEDvBu0Vv-Cq2QB-2jantkbcNRUziTfLOM2hWarIeitrEZVrcRwapQww1hiOcY1juglGzQ7uQVFls2x01R9eKQghA11x9xJ8iR_lzW9uGfDMen9048WN94PBaEJbSEy8AqAyyoQ=w2400',
        ]
    },
    {
        id: 5,
        title: 'Some car compilation compilation compilation compilation compilation compilation',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi delectus tempore porro nesciunt blanditiis officiis facilis doloribus harum mollitia?',
        date: '28.2.2022',
        url: [
            'https://lh3.googleusercontent.com/5rj0RAihXsmH0bL_C5PpMhaeHeLU0wBKZHgGTgtk1ad7MxEWnvL6Eq61DEOKCMA_kQMsxdGDVmIVARZ2rBAxIPB1XSQLI9B10UR5WefQkCfzinze4Io5aCzKyXFyymTxh6jMEvTaGQ=w2400',
            'https://lh3.googleusercontent.com/CmhBduq3iSZ0Ie7dBZlV7O8WmhEh0lvPQMVkqA2tIlNwmJQCkSl_MeRsjGPUx8UBWI5WqtmSJYD17O7aoR5_KQvWaxrnc39D8XFS2xDpjpMiS0MfSOqiAA3bzVoeLpKwOdKkkggr7w=w2400',
            'https://lh3.googleusercontent.com/iT7Va-k5OSWiAVBS2stZ-XsworFyzm29qt34ZmW1-bWHtj1N2m6paPnU-k9s-RzVFn5ftOzWGQt-9hbvy27_km5frwqBAMQ66zBr2iEhhqylAp8sTLcjSTtK_sfskzMj03Rd11brPQ=w2400',
            'https://lh3.googleusercontent.com/VDj4vKXggbKZw0mlG581ERuKLjwytcM3R86ktvCtLSkgwRfB5oyjoLMdydp7HB14aVQV0er-lusnMo8I1icvw88a1IprCcOxn0RC7fDPT06gwm5ToFleBm_1iS8IFM4NVKIxKjtnCA=w2400',
            'https://lh3.googleusercontent.com/mVYHu_5c_gwyZov-Aw4zoLeL6c2X2nWmWblSkDh4D5UU1fXCfNco25rZxM9slH1k0OvwClq-l-RcWVNMItnlzf0oCd2CrYWX747rD3KD44mf60utsQwuBXvqfiVTkJkhthGz5mKjcQ=w2400',
        ]
    },

]