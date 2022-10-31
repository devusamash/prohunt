import Login from "./components/Login";
import Header from "./core_components/Header";
import Footer from "./core_components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./core_styling/theme";
import Home from "./Pages/Home";
import Signup from "./components/Signup";
import ContactUs from "./Pages/ContactUs";
import Subheader from "./core_components/Subheader";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHome from "./Pages/Dashboard/Dashboard Home/DashboardHome";
import DashboardRoute from "./Pages/Dashboard/DashboardRoute";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Topbar />
        <div className="container">
          <Sidebar />
          <DashboardHome />
        </div> */}
        <DashboardRoute />
      </ThemeProvider>
    </>
  );
}

export default App;
