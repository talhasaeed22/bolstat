import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Blur from "../../components/Blur";
import styles from "./Auth.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth-context";

const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn()) router.push("/");
  }, [isLoggedIn]);

  const handleOnChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    if (!validateData()) return;
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        router.push("/");
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        toast.error(errorMessage);
        setIsLoading(false);
      });
  };
  const validateData = () => {
    if (!loginData.email || !/^\S+@\S+\.\S+$/.test(loginData.email))
      toast.error("Invalid email entered!");
    if (!loginData.password) toast.error("Invalid password entered!");
    return loginData.email && loginData.password;
  };

  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-center my-20 gap-5">
        <div className="flex">
          <img src="/Images/Capture.png" alt="imgs" className="lg:h-[480px]" />
        </div>
        <div
          className={`flex flex-col items-center rounded-lg px-4 ${styles.shadow}`}
        >
          <h1 className="my-4 font-bold text-xl underline">
            INLOGGEN BIJ BOLSTATS
          </h1>
          <label className="my-3" htmlFor="Email">
            Email
          </label>
          <input
            className="bg-[#F0F1F4] p-2 lg:w-[400.58px] h-[43.12px] rounded-md"
            type="email"
            name="email"
            id="email"
            onChange={handleOnChange}
          />
          <label className="my-3" htmlFor="password">
            Wachtwoord
          </label>
          <input
            className="bg-[#F0F1F4] p-2 lg:w-[400.58px] h-[43.12px] rounded-md"
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
          />
          <div className="flex flex-col my-5 items-center ">
            <button
              className={`lg:w-[283.47px] lg:h-[46px] w-full  ${
                !isLoading ? "bg-[#3051A3]" : "bg-[#888]"
              } rounded-3xl text-white`}
              onClick={handleLogin}
            >
              INLOGGEN
            </button>
            <span className="text-sm font-medium mt-3">
              Geen account?{" "}
              <span className="text-[#3051A3]">
                <Link href={"accountCreate"}> Maak er een aan.</Link>
              </span>
            </span>
          </div>
        </div>
      </div>

      <Blur width={"8rem"} height={"28rem"} top={"23%"} left={"91%"} />
      <Blur width={"8rem"} height={"28rem"} top={"60%"} left={"-9%"} />
    </>
  );
};

export default Login;
