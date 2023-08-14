import AuthGuard from "./auth/AuthGuard";
import Redirect from "./auth/Redirect";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import Account from "./views/account";
import crudRoute from "./views/CRUD/CrudRoutes";
import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";
import ecommerceRoutes from "./views/ecommerce/EcommerceRoutes";
import formsRoutes from "./views/forms/FormsRoutes";
import inboxRoute from "./views/inbox/InboxRoutes";
import invoiceRoutes from "./views/invoice/InvoioceRoutes";
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";
import pagesRoutes from "./views/pages/pagesRoutes";
import NotFound from "./views/sessions/NotFound";
import sessionRoutes from "./views/sessions/SessionRoutes";

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,
      ...crudRoute,
      ...dragAndDropRoute,
      ...ecommerceRoutes,
      ...formsRoutes,
      ...invoiceRoutes,
      ...inboxRoute,
      ...pageLayoutRoutes,
      ...pagesRoutes,
      { path: "/page-layouts/account", element: <Account /> },
    ],
  },
  ...sessionRoutes,
  { path: "/", element: <Redirect /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
