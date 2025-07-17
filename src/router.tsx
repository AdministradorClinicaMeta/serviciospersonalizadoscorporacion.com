import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/IndexPage";
import Layout from "@/layouts/layout";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />

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
