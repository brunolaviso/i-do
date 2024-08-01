import { createBrowserRouter } from 'react-router-dom'

import { CouplePage } from '@/pages/admin/couple'
import { DashboardPage } from '@/pages/admin/dashboard'
import { TemplatePage } from '@/pages/app/template'

export const router = createBrowserRouter([
  {
    path: '/:slug',
    element: <TemplatePage />,
  },
  {
    path: '/admin',
    element: <DashboardPage />,
  },
  {
    path: '/admin/couple',
    element: <CouplePage />,
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
])
