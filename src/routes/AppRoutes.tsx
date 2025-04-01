import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/atomic/templates/NotFound";
import LoginPage from "../pages/auth/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import AdminPage from "../pages/admin/AdminPage";
import AdminStatsPage from "../pages/admin/AdminStatsPage"; 
import AdminReportsPage from "../pages/admin/AdminReportsPage"; 
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import { useAuth } from "../hooks/use-auth";
import { routes } from "./Routes";

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      <Route
        path={routes.home}
        element={
          <RedirectIfAuthenticated isAuthenticated={isAuthenticated}>
            <Navigate to={routes.login} />
          </RedirectIfAuthenticated>
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path={routes.login}
          element={
            <RedirectIfAuthenticated isAuthenticated={isAuthenticated}>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />
      </Route>
      <Route element={<AdminLayout />}>
        <Route
          path={routes.admin}
          element={
            <ProtectedRoute
              component={AdminPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.stats}
          element={
            <ProtectedRoute
              component={AdminStatsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.reports} 
          element={
            <ProtectedRoute
              component={AdminReportsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
