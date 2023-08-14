import { authRoles } from "app/auth/authRoles";
import Analytics2 from "./Analytics2"

const dashboardRoutes = [
  { path: "dashboard/default", element: <Analytics2 />, auth: authRoles.sa },

];

export default dashboardRoutes;
