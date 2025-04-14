"use client";

import { BaseRegistrationSchema } from "@/validators/auth/registrationSchema";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const MultiStepRegistrationComponent = dynamic(
  () => import("@/components/registration/MultiStepRegistrationForm"),
  { ssr: false }
);

const MultiStepRegistrationForm = () => {
  const [formErrors, setFormErrors] = useState({
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

  const [formData, setFormData] = useState({
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
  console.log(formErrors, formData);
  const handleFieldChange = (e, classification) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [classification]: { ...prev[classification], [id]: value },
    }));

    try {
      const currSchema = BaseRegistrationSchema.shape[id];
      const result = currSchema.safeParse(value);
      console.log(result);
      setFormErrors((prev) => ({
        ...prev,
        [classification]: {
          ...prev[classification],
          [id]: result.success ? null : result.error.errors[0].message,
        },
      }));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  return (
    <form className="flex flex-col gap-y-4  w-1/2 h-3/5 border-1 outline-0 rounded-2xl px-16 py-8 overflow-y-auto scrollbar-hidden">
      {Object.entries(formData)
        .slice(0, 1)
        .map(([classification, fields]) => {
          return Object.entries(fields).map(([key, value]) => (
            <div className="flex w-full items-center justify-between" key={key}>
              <label htmlFor={key} className=" w-[40%] font-semibold">
                {key.replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                className={`flex-1 border rounded-xl border-gray-300 focus:ring-1 ${
                  formErrors[classification][key]
                    ? "focus:ring-red-500"
                    : "focus:ring-green-400"
                } focus:outline-none px-4 py-2 transition`}
                type="text"
                id={key}
                value={formData[classification][key]}
                onChange={(e) => handleFieldChange(e, classification)}
                placeholder={key}
              />
            </div>
          ));
        })}
    </form>
  );
};

export default MultiStepRegistrationForm;
