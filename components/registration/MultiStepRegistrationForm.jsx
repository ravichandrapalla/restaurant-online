"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const MultiStepRegistrationComponent = dynamic(
  () => import("@/components/registration/MultiStepRegistrationForm"),
  { ssr: false }
);

const MultiStepRegistrationForm = () => {
  const [userInputData, setUserInputData] = useState({
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    address: {
      locale: "",
      district: "",
      state: "",
      pincode: "",
    },
  });
  return (
    <form className="flex flex-col gap-y-4  w-1/2 h-1/2 border-1 outline-0 rounded-2xl px-16 py-8 overflow-y-auto scrollbar-hidden">
      {Object.entries(userInputData).map(([classification, fields]) => {
        return Object.entries(fields).map(([key, value]) => (
          <div className="flex w-full items-center justify-between ">
            <label htmlFor={key} className=" w-[40%] font-semibold">
              {key.replace(/^./, (str) => str.toUpperCase())}
            </label>
            <input
              className="flex-1 border rounded-xl border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none px-4 py-2 transition"
              type="text"
              id={key}
              placeholder={key}
            />
          </div>
        ));
      })}
    </form>
  );
};

export default MultiStepRegistrationForm;
