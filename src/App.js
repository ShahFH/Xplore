import NavigationBar from "./globalComponent/navigationBar.jsx";
import HomePage from "./pages/homePage.jsx";
import "./index.css";
import Footer from "./pages/footer";

export default function App() {
  return (
    <>
      <NavigationBar />
      <HomePage />
      <Footer />
    </>
  );
}
