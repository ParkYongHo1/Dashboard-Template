import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactNode } from "react";
import HomePage from "./pages/HomePage";
import Header from "./widgets/header/ui/Header";
import Footer from "./widgets/footer/ui/Footer";

interface LayoutWrapperProps {
  children: ReactNode;
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
