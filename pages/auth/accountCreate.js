import React, { useState } from "react";
import Blur from "../../components/Blur";
import styles from "./Auth.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../utiils/firebase";
import { Router, useRouter } from "next/router";

const AccountCreate = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    if (!validateData()) return;
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.reloadUserInfo.email), {
          SettingFaceID: false,
          SettingNotificationOrder: false,
          SettingNotificationReturn: false,
          StatusAppAcces: false,
          StatusStoreConnect: false,
          SettingNotificationStock: false,
          StatusSubscription: false,
          StoreAccesToken: "",
          StoreRefreshDate: 0,
          StoreRefreshToken: "",
          StoreValidUntil: 0,
          SubscriptionNextPayment: "",
          SubscriptionPrice: "",
          SubscriptionStatus: false,
          customer_adress: "",
          customer_city: "",
          customer_name: "",
          customer_postalcode: "",
          email: user.reloadUserInfo.email,
          gebruikersnaam: signupData.name,
          nopaymentneeded: false,
          password: signupData.password,
        });
        toast.success("Account Created Successfully!");
        router.push("/");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  const validateData = () => {
    let isValid = true;
    if (!signupData.email || !/^\S+@\S+\.\S+$/.test(signupData.email)) {
      isValid = false;
      toast.error("Invalid email entered!");
    }
    if (!(signupData.password?.length >= 8 && /\d/.test(signupData.password))) {
      isValid = false;
      toast.error("Invalid password entered!");
    }
    if (!signupData.name) {
      isValid = false;
      toast.error("Invalid name entered!");
    }
    return isValid;
  };
  return (
    <>
      <div className="flex items-center justify-center my-3">
        <div
          className={`flex flex-col items-center rounded-lg px-4 ${styles.shadow}`}
        >
          <h1 className="my-4 font-bold text-xl underline">ACCOUNT AANMAKEN</h1>
          <label className="my-3 underline" htmlFor="name">
            Naam
          </label>
          <input
            className="bg-[#F0F1F4] p-2 md:w-[400.58px] h-[43.12px] rounded-md w-full"
            type="text"
            name="name"
            id="name"
            onChange={handleOnChange}
          />
          <label className="my-3 underline" htmlFor="Email">
            Email
          </label>
          <input
            className="bg-[#F0F1F4] p-2 md:w-[400.58px] h-[43.12px] rounded-md w-full"
            type="email"
            name="email"
            id="email"
            onChange={handleOnChange}
          />
          <label className="my-3 underline" htmlFor="password">
            Wachtwoord
          </label>
          <input
            className="bg-[#F0F1F4] p-2 md:w-[400.58px] h-[43.12px] rounded-md w-full"
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
          />
          <div className="flex flex-col mt-44 mb-12 items-center ">
            <button
              className={`w-[283.47px] h-[46px] ${
                isLoading ? "bg-[#888]" : "bg-[#3051A3]"
              } rounded-3xl text-white`}
              onClick={handleSignUp}
              disabled={isLoading}
            >
              ACCOUNT AANMAKEN
            </button>
          </div>
        </div>
      </div>

      <Blur width={"8rem"} height={"28rem"} top={"23%"} left={"91%"} />
      <Blur width={"8rem"} height={"28rem"} top={"60%"} left={"-9%"} />
    </>
  );
};

export default AccountCreate;
