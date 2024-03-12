import js from '@/assets/certificate/js.pdf';
import jsreact from '@/assets/certificate/react_js.pdf';

interface IAboutData {
  text: string[];
  list: TList;
  certificate: TCertfifcate[];
}

type TList = {
  title: string;
  items: string[];
};

type TCertfifcate = {
  title: string;
  link: string;
};

type TExperience = {
  where: string;
  date: string;
  description: string;
  techlogies: string[];
};

export const aboutData: IAboutData = {
  text: [
    'Привет ), рад видет в моем портфолио!',
    `Я в IT более 2 лет, более 1.5 лет занимаюсь frontend-разработкой коммерческих проектов. 
    Последний год я активно разрабатываю веб приложения (React).`,
    `За все это время я успел поработать самостоятельно в качестве фрилансера и 
    поработал в небольшой компании.`,
    `
    Получил опыт во фрилансе и поработав в небольшой компании, 
    я обладаю большим опытом работы с клиентами и дизайнерами, 
    внедрения проектов от начала до конца.
  `,
    `
    В 2022 году я окончила университет по специальности "Информационные системы и технологии". 
    Также прошла дополнительные курсы по разработке верстки и SPA.`,
  ],
  list: {
    title: 'Мои навыки:',
    items: [
      `Большой опыт работы с системой BEM в стиле написани camelCase, 
      это мне помогает с именованием классов, компонентов, методов и переменных`,
      `Хорший опыт разработки сложных и адаптивных веб-сайтов/веб-приложений. 
      Разработка веб-приложений на <b> React.js (+ Typescript, Hooks, Axios, Redux(RTK Query)) </b>`,
      `Продвинутый <b>HTML</b> (HTML5 API, хорошее понимание семантических тегов), 
      <b>CSS</b> (flexbox, grid, анимация css), <b>JavaScript</b> (ES6+);
      `,
      'Опыт работы с менеджерами задач: <b>YouTrack и Trello</b>',
      'Опыт использование графических редакторов: <b>Figma</b> (Adobe Photoshop, Adobe XD)',
    ],
  },
  certificate: [
    {
      title: 'Практический Javascript',
      link: js,
    },
    {
      title: 'Javascript + React',
      link: jsreact,
    },
  ],
};

export const experienceData: TExperience[] = [
  {
    where: 'Black-Perimeter',
    date: '10.2021 - 02.2023',
    description:
      'В мои обязанности входило участвовать в разработке и поддержке собственной CMS системы и создание и настройку функционала, а также участие в разработке веб-приложений для клиентов на базе этой системы.',
    techlogies: ['React', 'Redux', 'React-router', 'Scss', 'Github'],
  },
  {
    where: 'Freelance',
    date: '04.2021 - 10.2021',
    description: `Работал как фрилансер, сотрудничая с несколькими
    дизайнерами для создания веб-сайтов. Основные обязанности включали разработку и внедрение веб-сайтов с использованием HTML, CSS и JavaScript, а также доработку и поддержку сайтов на платформе WordPress. 
    В процессе работы обеспечивал эффективное взаимодействие с дизайнерами и заказчиками, чтобы достичь требуемых результатов в срок и согласно спецификациям проекта.`,
    techlogies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
];
