import React, { useContext, useEffect } from "react";
import Blur from "../components/Blur";
import styles from "./auth/Auth.module.css";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../utiils/firebase";
import { AuthContext } from "../context/auth-context";

const Subscribe = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const auth = getAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/auth/login");
    }
  }, [isLoggedIn]);
  const handleSubscribe = async () => {
    if (!auth.currentUser) {
      router.push("/auth/login");
    } else {
      try {
        const docRef = doc(db, "users", auth.currentUser.email);
        // Update the timestamp field with the value from the server
        await updateDoc(docRef, {
          StatusSubscription: true,
          SubscriptionPrice: "€8",
          SubscriptionNextPayment: "27-01-2023",
        });
        router.push({
          pathname: "/subscribeCompleted",
          query: { success: true },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-center my-20 gap-5">
        <div
          className={`flex flex-col rounded-lg w-[457px] text-white px-4 ${styles.shadow} ${styles.gradientBG}`}
        >
          <h1 className="my-4 font-bold text-xl underline text-center">
            BolStats IOS App
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-md font-bold">
              <i className="fa fa-check" aria-hidden="true"></i> Dag
              statistieken{" "}
            </p>
            <p className="text-md font-bold">
              <i className="fa fa-check" aria-hidden="true"></i> Voorraadbeheer{" "}
            </p>
            <p className="text-md font-bold">
              <i className="fa fa-check" aria-hidden="true"></i> Week en maand
              statistieken{" "}
            </p>
            <p className="text-md font-medium">
              <i className="fa fa-check" aria-hidden="true"></i> Notificaties
            </p>
          </div>
          <div className="my-5 px-4">
            <p>
              Met het BolStats app pakket krijg je toegang tot de IOS app die je
              in de App Store kunt downloaden, via daar kun je gemakkelijk je
              online bol.com onderneming volgen.
            </p>
          </div>

          <div className="flex justify-between items-center my-3">
            <button
              className="w-[283.47px] h-[46px] bg-[#3051A3] rounded-3xl text-white"
              onClick={handleSubscribe}
            >
              Abonneren
            </button>
            <div className="flex flex-col items-center bg-[#fcf8f8] text-black px-3 py-2 rounded-xl">
              <span className="font-extrabold text-[#585858] text-[20px]">
                €8,-
              </span>
              <span className="text-[12px]">exc. btw</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src="/Images/subscribe.png" alt="imgs" className="img-fluid" />
        </div>
      </div>

      <Blur width={"8rem"} height={"28rem"} top={"23%"} left={"91%"} />
      <Blur width={"8rem"} height={"28rem"} top={"60%"} left={"-9%"} />
    </>
  );
};

export default Subscribe;
