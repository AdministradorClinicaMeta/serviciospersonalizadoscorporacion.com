import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/layout";
import { HomePage } from "@/pages/HomePage";
import AboutUsPage from "@/pages/AboutUsPage";
import CompaniesPage from "@/pages/CompaniesPage";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="/empresas" element={<CompaniesPage />} />

          <Route
            path="*"
            element={
              <>
                <h1>404</h1>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
