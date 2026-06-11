const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://bemidbar.vercel.app";

export const site = {
  name: "Бемидбар",
  subtitle: "Интеллектуальный портал Виктора Амчиславского",
  url: siteUrl,
  lurieProfile: "https://dklurie.ru/about/persons/viktor-amchislavskiy/",
  lurieReviews: "https://dklurie.ru/about/reviews/?AUTHOR=15488",
  facebook:
    "https://www.facebook.com/victor.amchislavsky?rdid=bTyizFAniWpVW03Y&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EEYF5zRpG%2F#",
  instagram: "https://www.instagram.com/am_skiy/",
  vk: "https://vk.com/id421989",
  telegram: "",
  locale: "ru_RU"
};

export const trustMarker = "Гид и лектор Дома культуры Льва Лурье";

export const statusPhrase =
  "Куратор библиотеки Большой Хоральной синагоги, историк, исследователь иудаизма и ведущий гид по еврейскому Петербургу.";

export const statusItems = [
  "Автор экскурсий Дома культуры Льва Лурье",
  "Куратор библиотеки Большой Хоральной синагоги",
  "Исследователь русско-еврейского наследия Петербурга",
  "Создатель проекта Jewish Pearls"
];

export const trustPartners = [
  {
    title: "Дом культуры Льва Лурье",
    href: "https://dklurie.ru/",
    description: "Петербургские экскурсии, лекции и культурные программы",
    icon: "lurie"
  },
  {
    title: "Большая Хоральная синагога",
    href: "https://sinagoga.jeps.ru/",
    description: "Община, библиотека и еврейская история Петербурга",
    icon: "synagogue"
  },
  {
    title: "Среди своих",
    href: "https://sredisvoih.com/",
    description: "Лекции и образовательные курсы о еврейской культуре",
    icon: "heritage"
  },
  {
    title: "НКО ЕВА, Петербург",
    href: "https://eva.spb.ru/",
    description: "Публичные лекции, видеоархив и культурная память",
    icon: "heritage"
  },
  {
    title: "ЕСОД",
    href: "https://esod.spb.ru/",
    description: "Еврейский культурный центр Санкт-Петербурга",
    icon: "synagogue"
  }
] as const;

export const jewishPearls = {
  title: "Jewish Pearls",
  status: "В разработке",
  description:
    "Jewish Pearls — отдельный проект Виктора Амчиславского о людях, местах и сюжетах еврейской памяти Петербурга. Раздел находится в разработке. Вы можете поддержать проект связавшись с нами"
};

export const navItems = [
  { href: "/", label: "Главная" },
  { href: "/tours", label: "Экскурсии и лекции" },
  { href: "/articles", label: "Статьи" },
  { href: "/library", label: "Библиотека" },
  { href: "/jewish-pearls", label: "Jewish Pearls" },
  { href: "/archive", label: "Архив" },
  { href: "/gallery", label: "Галерея" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О Викторе" },
  { href: "/contacts", label: "Контакты" }
];

export const services = [
  {
    title: "Лекции по русско-еврейской истории",
    text: "Авторские лекции о судьбах, текстах, архивах и культурных связях, которые сформировали русско-еврейскую историю."
  },
  {
    title: "Экскурсии по Большой Хоральной синагоге и еврейскому Петербургу",
    text: "Маршруты по городу как по историческому документу: синагога, кварталы, адреса, судьбы и скрытая память места."
  },
  {
    title: "Айн Рэнд в Петербурге",
    text: "Петербургские адреса и интеллектуальный контекст Алисы Розенбаум до ее превращения в Айн Рэнд."
  },
  {
    title: "Петербург Марка Шагала",
    text: "Городские эпизоды, художественная среда и еврейская оптика в петербургской биографии Шагала."
  },
  {
    title: "Петербург Иосифа Бродского",
    text: "Поэтическая география, дворики, комнаты, набережные и культурный нерв ленинградского текста."
  },
  {
    title: "Хасидизм в Петербурге",
    text: "История хасидского присутствия, общинных линий и духовных практик в северной столице."
  },
  {
    title: "Каббалистический Петербург",
    text: "Разговор о мистической традиции, символах и городских сюжетах без сенсационности и упрощений."
  },
  {
    title: "Консультации по еврейской истории и культуре",
    text: "Исследовательская помощь для текстов, проектов, семейных историй, образовательных программ и культурных инициатив."
  },
  {
    title: "Мужчина и женщина в древних традициях и Каббале",
    text: "Лекция о древних текстах, символических ролях и меняющемся языке отношений."
  },
  {
    title: "Еврейский юмор",
    text: "Юмор как память, сопротивление, философия и способ говорить о сложном без потери достоинства."
  },
  {
    title: "Евреи и русская революция",
    text: "Сложный исторический узел без мифов: биографии, идеи, архивы и последствия."
  }
];

export type RouteFormat = "экскурсия" | "лекция" | "прогулка" | "пешеходная экскурсия" | "консультация";

export type ViktorRoute = {
  title: string;
  category: string;
  description: string;
  format: RouteFormat;
  date?: string;
  duration?: string;
  language?: string;
  places?: string[];
  image?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  lurieArchive?: boolean;
};

export const routeCategories = [
  {
    title: "Еврейский Петербург",
    routes: [
      {
        title: "Большая Хоральная синагога: память, архитектура, община",
        category: "Еврейский Петербург",
        description:
          "Погружение в историю главной синагоги Петербурга как архитектурного памятника, общинного центра и живого пространства городской памяти.",
        format: "экскурсия",
        lurieArchive: true
      },
      {
        title: "Еврейский Петербург: от Сената до синагоги",
        category: "Еврейский Петербург",
        description:
          "Маршрут по адресам, где имперская история, правовые ограничения и еврейская жизнь Петербурга складываются в единую городскую карту.",
        format: "прогулка",
        lurieArchive: true
      },
      {
        title: "Евреи в Петербурге: легендарные адреса и Большая Хоральная синагога",
        category: "Еврейский Петербург",
        description:
          "Маршрут от Большой Хоральной синагоги к главным адресам еврейского Петербурга: история общины, молитвенные залы, кашрут, праздники, дома раввинов, учёных, меценатов, кантонистов и городские легенды.",
        format: "экскурсия",
        places: [
          "Большая Хоральная синагога",
          "молитвенные залы",
          "дома раввинов и учёных",
          "адреса меценатов",
          "городские легенды еврейского Петербурга"
        ],
        sourceLabel: "JEvents",
        sourceUrl:
          "https://jevents.ru/2019/ekskursiya-viktora-amchislavskogo-evrei-v-peterburge-legendarnye-adresa-i-bolshaya-horalnaya-sinagoga/"
      },
      {
        title: "Евреи Петербурга: от Переца до Сыркина",
        category: "Еврейский Петербург",
        description:
          "Анонс авторского маршрута Виктора Амчиславского по еврейскому Петербургу: городские адреса, культурные биографии и память общины от Ицхока-Лейбуша Переца до Нахмана Сыркина.",
        format: "экскурсия",
        date: "24 мая 2026",
        image: "/images/routes/evrei-peterburga-cover.webp",
        sourceLabel: "Большая Хоральная синагога",
        sourceUrl:
          "https://sinagoga.jeps.ru/meropriyatiya-sinagogi/evrei-peterburga-ot-peretcza-do-syirkina-v-amchislavskij-24-maya-2026-goda.html"
      },
      {
        title: "Самая еврейская улица: Рубинштейна от Бекицера до Невского",
        category: "Еврейский Петербург",
        description:
          "Прогулка по улице Рубинштейна как по концентрату городских биографий, домов, общинных следов и культурных поворотов.",
        format: "прогулка",
        lurieArchive: true
      },
      {
        title: "Кошерный Васильевский",
        category: "Еврейский Петербург",
        description:
          "Васильевский остров через еврейские адреса, молельные дома, образовательные сюжеты и неожиданные связи с историей города.",
        format: "экскурсия",
        lurieArchive: true
      },
      {
        title: "Евреи Васильевского острова, или прогулка вокруг Левиафана",
        category: "Еврейский Петербург",
        description:
          "Авторская пешеходная экскурсия по еврейской истории Васильевского острова: синагога, дом с магендавидами, Василеостровский Левиафан, еврейский сиротский приют, писатели, художники, раввины и городские легенды.",
        format: "пешеходная экскурсия",
        duration: "2 часа",
        language: "русский",
        places: [
          "Еврейский музей",
          "Синагога Васильевского острова",
          "Дом с магендавидами",
          "Василеостровский Левиафан",
          "Еврейский сиротский приют"
        ],
        sourceLabel: "Sputnik8",
        sourceUrl:
          "https://www.sputnik8.com/ru/st-petersburg/activities/17688-evrei-vasilevskogo-ostrova-ili-progulka-vokrug-leviafana"
      },
      {
        title: "Еврейский Петербург с воды",
        category: "Еврейский Петербург",
        description:
          "Водный маршрут, в котором городские панорамы становятся способом увидеть еврейские адреса Петербурга в другом масштабе.",
        format: "экскурсия",
        lurieArchive: true
      },
      {
        title: "Неформальная синагога",
        category: "Еврейский Петербург",
        description:
          "Живой разговор о синагоге, традиции, общине и вопросах, которые обычно остаются за рамками формальной экскурсии.",
        format: "экскурсия",
        lurieArchive: true
      },
      {
        title: "Ханука в Большой Хоральной синагоге",
        category: "Еврейский Петербург",
        description:
          "Праздничный маршрут о смыслах Хануки, истории синагоги и языке еврейской городской традиции.",
        format: "экскурсия",
        lurieArchive: true
      }
    ] satisfies ViktorRoute[]
  },
  {
    title: "Культурные герои Петербурга",
    routes: [
      {
        title: "Айн Рэнд и её родной Петербург",
        category: "Культурные герои Петербурга",
        description:
          "Петербургские адреса Алисы Розенбаум и интеллектуальная среда, из которой позднее выросла фигура Айн Рэнд.",
        format: "прогулка",
        lurieArchive: true
      },
      {
        title: "Петербург Марка Шагала",
        category: "Культурные герои Петербурга",
        description:
          "Художественный Петербург Шагала: обучение, городская среда, еврейская оптика и память раннего модернизма.",
        format: "экскурсия",
        lurieArchive: true
      },
      {
        title: "Иосиф Бродский и петербургская память",
        category: "Культурные герои Петербурга",
        description:
          "Ленинградский текст Бродского через адреса, дворы, комнаты, набережные и культуру личного сопротивления.",
        format: "прогулка"
      },
      {
        title: "Сергей Дягилев и покорение Европы",
        category: "Культурные герои Петербурга",
        description:
          "История Дягилева как петербургского культурного посредника, изменившего европейское представление о русском искусстве.",
        format: "лекция",
        lurieArchive: true
      }
    ] satisfies ViktorRoute[]
  },
  {
    title: "Сестрорецк и Курортный район",
    routes: [
      {
        title: "Сестрорецк: три века истории от синагоги до пляжа",
        category: "Сестрорецк и Курортный район",
        description:
          "История Сестрорецка через завод, курорт, дачи, религиозные следы, пляжную культуру и личную географию автора.",
        format: "прогулка",
        lurieArchive: true
      },
      {
        title: "От платформы Курорт до синагоги",
        category: "Сестрорецк и Курортный район",
        description:
          "Новый взгляд на Сестрорецк: путь от железнодорожной платформы к забытым адресам, дачной культуре и общинной памяти.",
        format: "прогулка",
        lurieArchive: true
      },
      {
        title: "Дачная Атлантида: Сестрорецкий Курорт",
        category: "Сестрорецк и Курортный район",
        description:
          "Исчезнувшая дачная цивилизация Курорта, старые фотографии, имена, маршруты отдыха и культурная археология места.",
        format: "прогулка",
        lurieArchive: true
      },
      {
        title: "От Тарховки до Александровской: Фидель Кастро и другие дачные герои",
        category: "Сестрорецк и Курортный район",
        description:
          "Дачная линия Курортного района через неожиданные биографии, политические следы и частные истории побережья.",
        format: "прогулка",
        lurieArchive: true
      },
      {
        title: "Сестрорецкие дюны",
        category: "Сестрорецк и Курортный район",
        description:
          "Маршрут по природному и культурному ландшафту дюн: море, сосны, границы, память отдыха и спорные сюжеты места.",
        format: "прогулка",
        lurieArchive: true
      }
    ] satisfies ViktorRoute[]
  },
  {
    title: "Лекции и культурология",
    routes: [
      {
        title: "Еврейский юмор",
        category: "Лекции и культурология",
        description:
          "Юмор как форма памяти, самоиронии, сопротивления и разговора о сложной истории без потери человеческого тепла.",
        format: "лекция",
        lurieArchive: true
      },
      {
        title: "Евреи и русская революция",
        category: "Лекции и культурология",
        description:
          "Разбор мифов и фактов: биографии, идеи, социальные ограничения и драматический контекст революционной эпохи.",
        format: "лекция",
        lurieArchive: true
      },
      {
        title: "Антисемитизм: история ненависти длиной в две тысячи лет",
        category: "Лекции и культурология",
        description:
          "Исторический разговор о механизмах ненависти, устойчивых мифах и том, как менялся язык вражды в разные эпохи.",
        format: "лекция",
        lurieArchive: true
      },
      {
        title: "Мужчина и женщина в древних традициях и Каббале",
        category: "Лекции и культурология",
        description:
          "Древние тексты, символические роли, каббалистическая образность и культурная история отношений.",
        format: "лекция",
        lurieArchive: true
      },
      {
        title: "Еврейский взгляд на искусство: Тора, Каббала и творчество",
        category: "Лекции и культурология",
        description:
          "Как еврейская традиция говорит об изображении, творчестве, запрете, воображении и ответственности художника.",
        format: "лекция",
        lurieArchive: true
      }
    ] satisfies ViktorRoute[]
  }
];

export const testimonials = [
  "живой рассказчик",
  "академическая глубина без тяжеловесности",
  "юмор, уважение к материалу и слушателям",
  "неожиданный взгляд на знакомые места",
  "хочется идти на другие экскурсии"
];

export type Review = {
  excursionTitle: string;
  date: string;
  reviewerName: string;
  excerpt: string;
  source: string;
  sourceUrl: string;
};

export const reviewSourceLabel = "Отзыв на сайте Дома культуры Льва Лурье";

export const reviews: Review[] = [
  {
    excursionTitle: "Кошерный Васильевский с Виктором Амчиславским",
    date: "2025.05.23",
    reviewerName: "Елена",
    excerpt:
      "Прекрасная прогулка. Очень много нового узнала о Васильевском острове. В очередной раз убедилась, что Виктор прекрасный рассказчик.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  },
  {
    excursionTitle: "Неформальная синагога с Виктором Амчиславским",
    date: "2025.05.06",
    reviewerName: "Юлия",
    excerpt:
      "Экскурсовод с неиссякаемыми знаниями о традициях еврейской общины, подкрепленная многолетним опытом работы.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  },
  {
    excursionTitle: "Неформальная синагога с Виктором Амчиславским",
    date: "2025.05.05",
    reviewerName: "Наталья",
    excerpt:
      "Академическая глубина, но с лёгкостью, юмором и доброжелательностью к слушателям. Почти три часа пролетели незаметно.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  },
  {
    excursionTitle: "Кошерный Васильевский с Виктором Амчиславским",
    date: "2025.04.28",
    reviewerName: "Жанна",
    excerpt:
      "Информацию преподносит интересно, легко и понятно, без академического занудства и с большим добром к своей аудитории.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  },
  {
    excursionTitle: "Неформальная синагога с Виктором Амчиславским",
    date: "2025.04.09",
    reviewerName: "Елена",
    excerpt:
      "Удивительная экскурсия. Действительно неформальная. Виктор прекрасный рассказчик с тонким чувством юмора.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  },
  {
    excursionTitle: "Неформальная синагога с Виктором Амчиславским",
    date: "2025.03.23",
    reviewerName: "Дарья",
    excerpt:
      "Подача не формальная, живая, с юмором и от этого воспринимается легко. С радостью приду на другие лекции и экскурсии.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  },
  {
    excursionTitle: "Неформальная синагога от инсайдера. С Виктором Амчиславским",
    date: "2025.03.12",
    reviewerName: "Борис",
    excerpt:
      "Виктор глубоко разбирается в теме и рассказывает потрясающе интересно. По насыщенности информации экскурсия сравнима с университетским курсом.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  },
  {
    excursionTitle: "Неформальная синагога с Виктором Амчиславским",
    date: "2025.03.10",
    reviewerName: "Sergey",
    excerpt:
      "Широта знаний и глубина памяти вызывают искреннее восхищение. Виктор старался вовлечь экскурсантов в живое общение.",
    source: reviewSourceLabel,
    sourceUrl: site.lurieReviews
  }
];

export type ArchiveType =
  | "Публикация"
  | "Видео"
  | "Экскурсия"
  | "Лекция"
  | "Афиша"
  | "Интервью";

export type ArchiveItem = {
  title: string;
  type: ArchiveType;
  date: string;
  source: string;
  excerpt: string;
  image?: string;
  videoUrl?: string;
  externalUrl?: string;
  tags: string[];
};

export const archiveFilters = [
  { label: "Все", value: "all" },
  { label: "Видео", value: "Видео" },
  { label: "Публикации", value: "Публикация" },
  { label: "Экскурсии", value: "Экскурсия" },
  { label: "Лекции", value: "Лекция" },
  { label: "Афиши", value: "Афиша" }
];

export const archiveItems: ArchiveItem[] = [
  {
    title: "Виктор Амчиславский — Дом культуры Льва Лурье",
    type: "Публикация",
    date: "Профиль",
    source: "Дом культуры Льва Лурье",
    excerpt:
      "Профиль Виктора Амчиславского на сайте Дома культуры Льва Лурье: публичная страница автора экскурсий и лекций о Петербурге, памяти и русско-еврейской культуре.",
    image: "/images/viktor/viktor-amchislavsky-hero.webp",
    externalUrl: "https://dklurie.ru/about/persons/viktor-amchislavskiy/",
    tags: ["профиль", "ДК Льва Лурье", "автор", "экскурсии"]
  },
  {
    title: "Отзывы слушателей о маршрутах Виктора Амчиславского",
    type: "Публикация",
    date: "Публичный архив",
    source: "Дом культуры Льва Лурье",
    excerpt:
      "Публичная подборка отзывов слушателей о лекциях и экскурсиях Виктора Амчиславского в Доме культуры Льва Лурье.",
    image: "/images/archive/spbsj-jewish-petersburg.jpg",
    externalUrl: "https://dklurie.ru/about/reviews/?AUTHOR=15488",
    tags: ["отзывы", "ДК Льва Лурье", "слушатели", "доверие"]
  },
  {
    title: "Маршруты Виктора Амчиславского в архиве ДК Льва Лурье",
    type: "Экскурсия",
    date: "Архив маршрутов",
    source: "Дом культуры Льва Лурье",
    excerpt:
      "Публичный контекст авторских прогулок и лекций Виктора: еврейский Петербург, городские биографии, дачные районы и культурная память.",
    image: "/images/viktor-2.jpg",
    externalUrl: "https://dklurie.ru/about/persons/viktor-amchislavskiy/",
    tags: ["маршруты", "экскурсии", "ДК Льва Лурье", "Петербург"]
  },
  {
    title: "Лекции Виктора Амчиславского для НКО «Ева»",
    type: "Видео",
    date: "Видеоархив",
    source: "YouTube",
    excerpt:
      "Плейлист лекций Виктора Амчиславского для НКО «Ева»: русско-еврейская история, культурная память и традиция в авторском изложении.",
    image: "/images/viktor-3.jpg",
    videoUrl: "https://www.youtube.com/embed/videoseries?list=PLjkJ6mGKfk1IrF6CqdqapASvIlJV9bsko",
    externalUrl: "https://www.youtube.com/playlist?list=PLjkJ6mGKfk1IrF6CqdqapASvIlJV9bsko",
    tags: ["видео", "лекции", "НКО Ева", "YouTube"]
  },
  {
    title: "Лекция Виктора Амчиславского для НКО «Ева»",
    type: "Лекция",
    date: "Видео",
    source: "YouTube",
    excerpt:
      "Отдельная видеолекция из публичного YouTube-архива НКО «Ева», добавленная в медиатеку сайта.",
    image: "/images/viktor-4.jpg",
    videoUrl: "https://www.youtube.com/embed/WluYUCVykO0",
    externalUrl: "https://www.youtube.com/watch?v=WluYUCVykO0",
    tags: ["видео", "лекции", "НКО Ева", "YouTube"]
  },
  {
    title: "Евреи Васильевского острова, или прогулка вокруг Левиафана",
    type: "Экскурсия",
    date: "2017",
    source: "Sputnik8",
    excerpt:
      "Пешеходная экскурсия по еврейскому Васильевскому острову: синагога, дом с магендавидами, Левиафан, сиротский приют и городские легенды.",
    image: "/images/viktor-1.jpg",
    externalUrl:
      "https://www.sputnik8.com/ru/st-petersburg/activities/17688-evrei-vasilevskogo-ostrova-ili-progulka-vokrug-leviafana",
    tags: ["маршрут", "Васильевский остров", "Sputnik8", "еврейский Петербург"]
  },
  {
    title: "Евреи Петербурга: от Переца до Сыркина",
    type: "Афиша",
    date: "24 мая 2026",
    source: "Большая Хоральная синагога",
    excerpt:
      "Анонс встречи и авторского маршрута Виктора Амчиславского по еврейскому Петербургу: городские адреса, культурные биографии и память общины.",
    image: "/images/routes/evrei-peterburga-cover.webp",
    tags: ["афиша", "2026", "Большая Хоральная синагога", "еврейский Петербург"]
  },
  {
    title: "Евреи в Петербурге: легендарные адреса и Большая Хоральная синагога",
    type: "Экскурсия",
    date: "2020",
    source: "JEvents",
    excerpt:
      "Анонс маршрута с Большой Хоральной синагогой и легендарными адресами еврейского Петербурга; источник фиксирует статус Виктора как куратора библиотеки БХС и ведущего гида.",
    image: "/images/routes/evrei-peterburga-cover.webp",
    externalUrl:
      "https://jevents.ru/2019/ekskursiya-viktora-amchislavskogo-evrei-v-peterburge-legendarnye-adresa-i-bolshaya-horalnaya-sinagoga/",
    tags: ["маршрут", "Большая Хоральная синагога", "JEvents", "еврейский Петербург"]
  },
  {
    title: "Из-за черты оседлости",
    type: "Публикация",
    date: "Архив",
    source: "Санкт-Петербургский союз журналистов",
    excerpt:
      "Архивная публикация о еврейском Петербурге и памяти города. Изображение сохранено локально для дальнейшей редакторской атрибуции и связывания с материалами Виктора.",
    image: "/images/archive/spbsj-jewish-petersburg.jpg",
    externalUrl: "https://www.spbsj.ru/",
    tags: ["статья", "архив", "Союз журналистов", "еврейский Петербург"]
  },
  {
    title: "Церковный документ и три еврея",
    type: "Публикация",
    date: "Архив",
    source: "Информационный портал еврейской религиозной общины Санкт-Петербурга",
    excerpt:
      "Архивная публикация Виктора Амчиславского на старом портале JEPS о раннем документальном свидетельстве еврейской общины Петербурга.",
    image: "/images/archive/spbsj-jewish-petersburg.jpg",
    externalUrl: "https://old.jeps.ru/modules.php?name=Content&pa=showpage&pid=2246",
    tags: ["публикация", "архив", "JEPS", "история общины"]
  }
];

export type GalleryCategory =
  | "Экскурсии"
  | "Лекции"
  | "Архив"
  | "Большая Хоральная синагога"
  | "Дом культуры Льва Лурье";

export type GalleryItem = {
  title: string;
  caption: string;
  year: string;
  source: string;
  relatedRoute?: string;
  category: GalleryCategory;
  image: string;
};

export const galleryCategories = [
  "Все",
  "Экскурсии",
  "Лекции",
  "Архив",
  "Большая Хоральная синагога",
  "Дом культуры Льва Лурье"
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Виктор Амчиславский",
    caption: "Портрет для главной страницы и раздела «О Викторе».",
    year: "Архив сайта",
    source: "Локальный медиаархив сайта",
    relatedRoute: "О Викторе",
    category: "Большая Хоральная синагога",
    image: "/images/viktor/viktor-amchislavsky-hero.webp"
  },
  {
    title: "Евреи Петербурга: от Переца до Сыркина",
    caption:
      "Сохраненная обложка событийной страницы Большой Хоральной синагоги для маршрута Виктора Амчиславского.",
    year: "2026",
    source: "Большая Хоральная синагога",
    relatedRoute: "Евреи Петербурга: от Переца до Сыркина",
    category: "Экскурсии",
    image: "/images/routes/evrei-peterburga-cover.webp"
  },
  {
    title: "Из-за черты оседлости",
    caption: "Архивное изображение для визуальной библиотеки.",
    year: "Архив",
    source: "Санкт-Петербургский союз журналистов",
    relatedRoute: "Еврейский Петербург",
    category: "Архив",
    image: "/images/archive/spbsj-jewish-petersburg.jpg"
  }
];

export const bio =
  "Виктор Амчиславский — историк, краевед, исследователь русско-еврейского наследия и петербургской культуры, гид и лектор Дома культуры Льва Лурье, создатель проекта «Jewish pearls», лектор московской общины «Среди своих», где ведёт курсы «Легенды архивов» и «Еврейская мозаика». Автор диссертационного исследования о еврейской солдатской общине Петербурга.";

export const positioning =
  "Авторские экскурсии, лекции и тексты о еврейском Петербурге, культурной памяти и скрытых слоях городской истории. Гид и лектор Дома культуры Льва Лурье.";
