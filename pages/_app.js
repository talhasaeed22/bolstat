import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import "../utiils/firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../context/auth-context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Navbar /> <Component {...pageProps} /> <Footer />{" "}
        <ToastContainer autoClose={2000} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
