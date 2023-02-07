import { getAuth, updatePassword } from "firebase/auth";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blur from "../components/Blur";
import DashboardBox from "../components/DashboardBox";
import { AuthContext } from "../context/auth-context";
import { db } from "../utiils/firebase";

const UserDashboard = () => {
  const { isLoggedIn, currentUser } = useContext(AuthContext);
  const [settingsData, setSettingsData] = useState({
    SettingFaceID: false,
    SettingNotificationReturn: false,
    SettingNotificationOrder: false,
    SettingNotificationStock: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [resetInfo, setResetInfo] = useState({
    oldPassword: "",
    password: "",
  });
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/auth/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (userData) {
      setSettingsData({
        SettingFaceID: userData.SettingFaceID,
        SettingNotificationReturn: userData.SettingNotificationReturn,
        SettingNotificationOrder: userData.SettingNotificationOrder,
        SettingNotificationStock: userData.SettingNotificationStock,
      });
    }
  }, [userData]);

  useEffect(() => {
    if (!currentUser) return;

    const docRef = doc(db, "users", currentUser.email);
    const unsub = onSnapshot(docRef, (doc) => {
      setUserData(doc.data());
    });
    return () => {
      unsub;
    };
  }, [currentUser]);
  const handleUnSubscribe = async () => {
    if (!auth.currentUser) {
      router.push("/auth/login");
    } else if (
      confirm("Are you sure you want to terminate the subscription?")
    ) {
      try {
        setIsLoading(true);
        const docRef = doc(db, "users", auth.currentUser.email);
        // Update the timestamp field with the value from the server
        await updateDoc(docRef, {
          StatusSubscription: false,
          SubscriptionPrice: "",
          SubscriptionNextPayment: "",
        });
        setIsLoading(false);
        toast.success("Subscription terminated successfully");
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };
  const handleSaveSettings = async () => {
    if (!auth.currentUser) {
      router.push("/auth/login");
    } else {
      try {
        setIsLoading(true);
        const docRef = doc(db, "users", auth.currentUser.email);
        await updateDoc(docRef, {
          ...settingsData,
        });
        toast.success("Settings updated successfully");
        setIsLoading(false);
      } catch (error) {
        toast.error("Error updating settings");
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  const handleResetPassword = () => {
    const user = auth.currentUser;
    if (resetInfo.oldPassword !== userData.password) {
      toast.error("Old password is not correct");
      return;
    }
    if (!(resetInfo.password?.length >= 8 && /\d/.test(resetInfo.password))) {
      toast.error("Invalid password entered!");
      return;
    }
    setIsLoading(true);
    updatePassword(user, resetInfo.password)
      .then(() => {
        setResetInfo({
          oldPassword: "",
          password: "",
        });
        toast.success("Password updated successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error updating password");
        setIsLoading(false);
      });
  };
  return (
    <>
      <div className="mx-3">
        <div className="row flex justify-between">
          <div className="col-md-4 col-sm-12 flex flex-col ">
            <div className="flex gap-4 items-center justify-center md:my-0 my-4">
              <img
                src="/Images/bell.png"
                alt="bell"
                className={`${
                  userData?.StoreAccesToken ? "bg-[#00c93a]" : "bg-[#C03C3C]"
                } pt-[12px] pb-[12px] pl-[18px] pr-[18px] rounded-full`}
              />

              <span>
                Winkel {userData?.StoreAccesToken ? "" : " niet "} gekoppeld
              </span>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 flex gap-4 items-center justify-center md:my-0 my-4">
            <img
              src="/Images/bell.png"
              alt="bell"
              className={`${
                userData?.StatusSubscription ? "bg-[#00c93a]" : "bg-[#C03C3C]"
              } pt-[12px] pb-[12px] pl-[18px] pr-[18px] rounded-full`}
            />
            <span>
              Abonnement {userData?.StatusSubscription ? "" : " niet "} actief
            </span>
          </div>
          <div className="col-md-4 col-sm-12 flex gap-4 items-center justify-center md:my-0 my-4">
            <img
              src="/Images/bell.png"
              alt="bell"
              className={`${
                userData?.StatusAppAcces ? "bg-[#00c93a]" : "bg-[#C03C3C]"
              } pt-[12px] pb-[12px] pl-[18px] pr-[18px] rounded-full`}
            />
            <span>App toegang</span>
          </div>
        </div>
      </div>

      {/* FIRST ROW */}

      <div className="container my-5">
        <div className="row gap-5 items-center justify-center">
          <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
            <div className="">
              <h1 className="text-[16px] font-bold text-center my-3">
                Bol.com Koppeling
              </h1>
              <div className="my-2 mx-2">
                <DashboardBox
                  line1={"Koppeling"}
                  line2={`${
                    userData?.StatusStoreConnect
                      ? "GEKOPPELD"
                      : "NIET GEKOPPELD"
                  }`}
                />
              </div>
              <div
                className="pl-10 pr-24 py-2 text-left text-xs"
                style={{ lineHeight: "1" }}
              >
                <span className="text-[#8C8C8C]">
                  De BolStats app werkt alleen als je jouw bol.com winkel hebt
                  gekoppeld met BolStats.
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="w-full lg:w-[138px]  h-[46px] bg-[#3051A3] rounded-xl text-white text-[20px] font-semibold">
                Koppelen
              </button>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
            <div className="">
              <h1 className="text-[16px] font-bold text-center my-3">
                Abonnement
              </h1>
              <div className="my-3 mx-2">
                <DashboardBox
                  line1={"Abonnement"}
                  line2={`${userData?.StatusSubscription ? "" : "NIET "}ACTIEF`}
                />
              </div>
              <div className="my-3 mx-2">
                <DashboardBox
                  line1={"Prijs"}
                  line2={userData?.SubscriptionPrice + " - exc. btw"}
                />
              </div>
              <div className="my-3 mx-2">
                <DashboardBox
                  line1={"Volgende betaling"}
                  line2={userData?.SubscriptionNextPayment ?? "-"}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className={`w-full lg:w-[138px] h-[46px] ${
                  isLoading || !userData?.StatusSubscription
                    ? "bg-[#888]"
                    : "bg-[#A33030]"
                } rounded-xl text-white text-[20px] font-semibold`}
                onClick={handleUnSubscribe}
                disabled={isLoading || !userData?.StatusSubscription}
              >
                Opzeggen
              </button>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
            <div className="">
              <h1 className="text-[16px] font-bold text-center my-3">
                App Instellingen
              </h1>
              <div className="my-3 mx-2">
                <DashboardBox
                  id={"checkbox1"}
                  line1={"Face ID voor toegang"}
                  check={true}
                  value={settingsData?.SettingFaceID}
                  onChange={(e) => {
                    setSettingsData({
                      ...settingsData,
                      SettingFaceID: e.target.checked,
                    });
                  }}
                />
              </div>
              <div className="my-3 mx-2">
                <DashboardBox
                  id={"checkbox2"}
                  line1={"Notificatie bij nieuwe bestelling"}
                  check={true}
                  value={settingsData?.SettingNotificationOrder}
                  onChange={(e) => {
                    setSettingsData({
                      ...settingsData,
                      SettingNotificationOrder: e.target.checked,
                    });
                  }}
                />
              </div>
              <div className="my-3 mx-2">
                <DashboardBox
                  id={"checkbox3"}
                  line1={"Notificatie bij nieuwe retour"}
                  value={settingsData?.SettingNotificationReturn}
                  check={true}
                  onChange={(e) => {
                    setSettingsData({
                      ...settingsData,
                      SettingNotificationReturn: e.target.checked,
                    });
                  }}
                />
              </div>
              <div className="my-3 mx-2">
                <DashboardBox
                  id={"checkbox4"}
                  line1={"Notificatie bij lage voorraad"}
                  check={true}
                  value={settingsData?.SettingNotificationStock}
                  onChange={(e) => {
                    setSettingsData({
                      ...settingsData,
                      SettingNotificationStock: e.target.checked,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className={`w-full lg:w-[138px] h-[46px] ${
                  isLoading ? "bg-[#888]" : "bg-[#387A47]"
                } rounded-xl text-white text-[20px] font-semibold`}
                onClick={handleSaveSettings}
                disabled={isLoading}
              >
                Opslaan
              </button>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}

        <div className="row gap-5 my-10">
          <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
            <div className="">
              <h1 className="text-[16px] font-bold text-center my-3">
                Gebruikersinstellingen
              </h1>
              <div className="my-3 mx-2">
                <DashboardBox
                  line1={"Bedrijfsnaam"}
                  line2={userData?.customer_name}
                />
              </div>
              <div className="my-3 mx-2">
                <DashboardBox line1={"Naam"} line2={userData?.gebruikersnaam} />
              </div>
              <div className="my-3 mx-2">
                <DashboardBox line1={"Email"} line2={userData?.email} />
              </div>
            </div>
            <div
              className="flex justify-center items-center"
              style={{ lineHeight: "0px" }}
            >
              <div className="px-10 text-left">
                <span className="text-[#8C8C8C] text-xs">
                  Deze gegevens kun je op dit moment alleen wijzigen door een
                  mail te sturen naar <br />
                  contact@bolstats.nl.
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 px-4 rounded">
            <div className="">
              <h1 className="text-[16px] font-bold text-center my-3">
                Wachtwoord veranderen
              </h1>
              <div className="my-3 mx-2 flex flex-col text-center">
                <label className="my-3" htmlFor="Email">
                  Oud Wachtwoord
                </label>
                <input
                  className="bg-[#F0F1F4] p-2 h-[43.12px] rounded-md"
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={resetInfo.oldPassword}
                  onChange={(e) => {
                    setResetInfo({
                      ...resetInfo,
                      oldPassword: e.target.value,
                    });
                  }}
                />
                <label className="my-3" htmlFor="password">
                  Wachtwoord
                </label>
                <input
                  className="bg-[#F0F1F4] p-2  h-[43.12px] rounded-md"
                  type="password"
                  name="password"
                  id="password"
                  value={resetInfo.password}
                  onChange={(e) => {
                    setResetInfo({
                      ...resetInfo,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className={`w-full lg:w-[138px] h-[39px] ${
                  isLoading ? "bg-[#888]" : "bg-[#387A47]"
                } rounded-xl text-white text-[20px] font-semibold`}
                onClick={handleResetPassword}
                disabled={isLoading}
              >
                Opslaan
              </button>
            </div>
          </div>
        </div>
      </div>

      <Blur width={"4rem"} height={"28rem"} top={"23%"} left={"95%"} />
      <Blur width={"10rem"} height={"28rem"} top={"60%"} left={"-9%"} />
      <Blur width={"5rem"} height={"28rem"} top={"150%"} left={"94%"} />
    </>
  );
};

export default UserDashboard;
