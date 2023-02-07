import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Blur from "../components/Blur";
import styles from "./auth/Auth.module.css";

const SubscribeCompleted = () => {
  const router = useRouter();
  useEffect(() => {
    if (!router.query?.success) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <div className="flex items-center justify-center my-5">
        <div
          className={`flex flex-col rounded-lg w-[607px] text-white px-28 ${styles.shadow} ${styles.gradientBG}`}
        >
          <h1 className="my-4 font-bold text-xl underline text-center">
            Abonnement geactiveerd
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-md ">
              {" "}
              Je BolStats abonnement is succesvol geactiveerd. Je kunt nu naar
              het BolStats dashboard gaan om je bol.com winkel te koppelen met
              BolStats, als je dat gedaan hebt kun je ook onze IOS BolStats app
              gebruiken.{" "}
            </p>
            <p className="text-md ">
              {" "}
              Heb je hulp nodig met je abonnement? Neem dan contact op met
              contact@bolstats.nl.{" "}
            </p>
          </div>
          <div className="flex justify-between items-center my-12 mt-36">
            <button
              className="w-[283.47px] h-[46px] bg-[#3051A3] rounded-3xl text-white"
              onClick={() => {
                router.push("/");
              }}
            >
              Bolstats dashboard
            </button>
            <div className="">
              <img
                src="/Images/subscribeCompleted.png"
                alt="subscribed"
                className="ml-[100%]"
              />
            </div>
          </div>
        </div>
      </div>

      <Blur width={"5rem"} height={"28rem"} top={"23%"} left={"94%"} />
      <Blur width={"8rem"} height={"28rem"} top={"60%"} left={"-9%"} />
    </>
  );
};

export default SubscribeCompleted;
