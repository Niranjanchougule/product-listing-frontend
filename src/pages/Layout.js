import { Outlet } from "react-router-dom";
import Header from "../components/home/Header";
const Layout = () => {
  return (
    <div style={{ backgroundColor: "#f1f3f6", minHeight: "100vh" }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
