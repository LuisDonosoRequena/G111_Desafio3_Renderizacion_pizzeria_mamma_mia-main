import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// Se mantiene para futuros Desafios.
// import Home from "./pages/Home";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
