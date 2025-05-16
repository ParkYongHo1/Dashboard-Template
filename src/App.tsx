import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactNode } from "react";
import Footer from "@widgets/footer/ui/Footer.tsx";
import HomePage from "@pages/HomePage.tsx";
import Header from "@widgets/header/ui/Header.tsx";
import DashboardInfoPage from "@pages/dashboard/ui/DashboardInfoPage";
import StatsListPage from "@pages/stats/ui/StatsListPage";
import StatsItemPage from "@pages/stats/ui/StatsItemPage";

interface LayoutWrapperProps {
  children: ReactNode;
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/add-dashboard"
            element={<DashboardInfoPage mode="add" />}
          />
          <Route
            path="/edit-dashboard/:id"
            element={<DashboardInfoPage mode="edit" />}
          />
          <Route path="/stats" element={<StatsListPage />} />
          <Route path="/stats/:id" element={<StatsItemPage />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <>
      <main>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default App;
