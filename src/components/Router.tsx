import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import OEstudioPage from '@/components/pages/OEstudioPage';
import JanaPage from '@/components/pages/JanaPage';
import ServicosPage from '@/components/pages/ServicosPage';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
import PlanoPersonalizadoPage from '@/components/pages/PlanoPersonalizadoPage';
import DepoimentosPage from '@/components/pages/DepoimentosPage';
import ParceirosPage from '@/components/pages/ParceirosPage';
import ContatoPage from '@/components/pages/ContatoPage';
import FAQPage from '@/components/pages/FAQPage';
import PrivacidadePage from '@/components/pages/PrivacidadePage';
import TermosPage from '@/components/pages/TermosPage';
import AgendarPage from '@/components/pages/AgendarPage';
import LoginPage from '@/components/pages/LoginPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "o-estudio",
        element: <OEstudioPage />,
        routeMetadata: {
          pageIdentifier: 'o-estudio',
        },
      },
      {
        path: "jana",
        element: <JanaPage />,
        routeMetadata: {
          pageIdentifier: 'jana',
        },
      },
      {
        path: "servicos",
        element: <ServicosPage />,
        routeMetadata: {
          pageIdentifier: 'servicos',
        },
      },
      {
        path: "servicos/:slug",
        element: <ServiceDetailPage />,
        routeMetadata: {
          pageIdentifier: 'service-detail',
        },
      },
      {
        path: "plano-personalizado",
        element: <PlanoPersonalizadoPage />,
        routeMetadata: {
          pageIdentifier: 'plano-personalizado',
        },
      },
      {
        path: "depoimentos",
        element: <DepoimentosPage />,
        routeMetadata: {
          pageIdentifier: 'depoimentos',
        },
      },
      {
        path: "parceiros",
        element: <ParceirosPage />,
        routeMetadata: {
          pageIdentifier: 'parceiros',
        },
      },
      {
        path: "contato",
        element: <ContatoPage />,
        routeMetadata: {
          pageIdentifier: 'contato',
        },
      },
      {
        path: "faq",
        element: <FAQPage />,
        routeMetadata: {
          pageIdentifier: 'faq',
        },
      },
      {
        path: "privacidade",
        element: <PrivacidadePage />,
        routeMetadata: {
          pageIdentifier: 'privacidade',
        },
      },
      {
        path: "termos",
        element: <TermosPage />,
        routeMetadata: {
          pageIdentifier: 'termos',
        },
      },
      {
        path: "agendar",
        element: <AgendarPage />,
        routeMetadata: {
          pageIdentifier: 'agendar',
        },
      },
      {
        path: "login",
        element: <LoginPage />,
        routeMetadata: {
          pageIdentifier: 'login',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
