"use client";
import React, { useState } from "react";

import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { BaseRegistrationSchema } from "@/validators/auth/registrationSchema";
import MultiStepRegistrationForm from "@/components/registration/MultiStepRegistrationForm";
import SignInClient from "@/components/lib/SignInClient";

// const RegistrationUI = dynamic(() => import("@/app/(auth)/register/page"), {
//   ssr: false,import { DevtoolsInjectOptions } from './../../../node_modules/preact/debug/src/internal.d';

// });
const Tabs = ["user", "address"];

const Page = () => {
  const [currentTab, setCurrentTab] = useState(Tabs[0]);
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
  const handleTabChange = (direction) => {
    const currIndex = Tabs.indexOf(currentTab);
    let nextIndex = direction === "next" ? currIndex + 1 : currIndex - 1;
    if (nextIndex < 0 || nextIndex >= Tabs.length) return;
    setCurrentTab(Tabs[nextIndex]);
  };

  return (
    <div className="h-full w-full flex flex-col gap-y-8 items-center justify-center">
      <MultiStepRegistrationForm
        currentTab={currentTab}
        formData={formData}
        formErrors={formErrors}
        handleFieldChange={handleFieldChange}
      />
      <div className=" w-[60%]  flex items-center justify-between">
        <Button
          className="w-50"
          onClick={() => handleTabChange("prev")}
          disabled={Tabs.indexOf(currentTab) <= 0}
        >
          Prev
        </Button>
        <Button
          className="w-50"
          onClick={() => handleTabChange("next")}
          disabled={Tabs.indexOf(currentTab) >= Tabs.length - 1}
        >
          Next
        </Button>
      </div>
      <div>
        <SignInClient>Sign in with Google</SignInClient>
      </div>
    </div>
  );
};

export default Page;
