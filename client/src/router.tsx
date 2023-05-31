import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from './pages/home';
import Kitty from './pages/kitty';
import SearchResults from './pages/search-results';
import loadCatById from './data/loadCatById';
import AppError from './AppError';

const router: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search-results',
    element: <SearchResults />,
  },
  {
    path: '/kitty/:id',
    element: <Kitty />,
    loader: async ({ params }) => {
      const { id } = params;
      return (await loadCatById(id!)).data;
    },
    errorElement: <AppError />,
  },
  {
    path: '*',
    element: <AppError />,
  },
];

export default router;
