import js from '@/assets/certificate/js.pdf';
import jsreact from '@/assets/certificate/react_js.pdf';

type TCertfifcate = {
  title: string;
  link: string;
};

interface IAboutData {
  text: string[];
  certificate: TCertfifcate[];
}

type TExperience = {
  where: string;
  date: string;
  description: string;
  techlogies: string[];
};

export const aboutData: IAboutData = {
  text: [
    'Привет ), рад видет в моем портфолио!',
    `Увлеченный разработчик с опытом создания SPA с использованием в основном React, Redux, Typescript. 
    Я совершенствую свои навыки в этом направлении и планирую расширить их за счет новых технологий.`,
    `Открыт для ваших предложений.`,
  ],
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
    description: `В мои обязанности входило участвовать в разработке и поддержке собственной CMS системы и создание и настройку функционала, а также участие в разработке веб-приложений для клиентов на базе этой системы.`,
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
