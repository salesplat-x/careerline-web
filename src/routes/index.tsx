import type { RouteObject } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout.tsx';
import { MinimalLayout } from './MinimalLayout/MinimalLayout.tsx';
import { Home, Question } from '../pages';
import { Contact } from '../pages/Contact.tsx';

export const getRoutes = (): RouteObject[] => [
  {
    element: <MainLayout navTextColor="black" />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    element: <MinimalLayout />,
    children: [
      {
        path: '/question',
        element: <Question />,
      },
    ],
  },
  {
    element: <MainLayout navTextColor="white" />,
    children: [
      {
        path: '/contact us',
        element: <Contact />,
      },
    ],
  },
];
