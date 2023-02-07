import React, { useState } from "react";
import Blur from "../components/Blur";
import styles from "./auth/Auth.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const handleSubmit = () => {
    if (!validateData()) return;
    setIsLoading(true);
    postData(`${process.env.NEXT_PUBLIC_ROOT_URL}/send_email`, contactData)
      .then((data) => {
        console.log(data);
        if (data.status === "SUCCESS") {
          toast.success("Email sent successfully");
          setContactData({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else toast.error("Error sending email!!");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setIsLoading(false);
      });
  };
  const validateData = () => {
    if (!contactData.email || !/^\S+@\S+\.\S+$/.test(contactData.email))
      toast.error("Invalid email entered!");
    if (!contactData.name) toast.error("Invalid name entered!");
    if (!contactData.message) toast.error("Invalid message entered!");
    return contactData.email && contactData.name && contactData.message;
  };
  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-center my-20 gap-5">
        <div className="flex">
          <img src="/Images/contact.png" alt="imgs" className="" />
        </div>
        <div
          className={`flex flex-col items-center rounded-lg  px-4 ${styles.shadow}`}
        >
          <h1 className="my-4 font-bold text-xl underline">CONTACT OPNEMEN</h1>
          <label className="my-3" htmlFor="name">
            Naam
          </label>
          <input
            className="bg-[#F0F1F4] w-[400.58px] p-2 h-[43.12px] rounded-md"
            type="name"
            onChange={handleChange}
            name="name"
            id="name"
          />
          <label className="my-3" htmlFor="Email">
            E-mail
          </label>
          <input
            className="bg-[#F0F1F4] w-[400.58px] p-2 h-[43.12px] rounded-md"
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
          />
          <label className="my-3" htmlFor="Jouw bericht">
            Jouw bericht
          </label>
          <textarea
            style={{ resize: "none" }}
            className="bg-[#F0F1F4] p-2 w-[401px] h-[173px] rounded-md"
            name="message"
            id="Jouw bericht"
            onChange={handleChange}
          ></textarea>
          <div className="flex flex-col my-5 items-center ">
            <button
              className={`w-[283.47px] h-[46px] ${
                !isLoading ? "bg-[#3051A3]" : "bg-[#888]"
              } rounded-3xl text-white`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Verzenden
            </button>
          </div>
        </div>
      </div>
      <Blur width={"8rem"} height={"28rem"} top={"23%"} left={"94%"} />
      <Blur width={"8rem"} height={"28rem"} top={"60%"} left={"-9%"} />
    </>
  );
};

export default Contact;
