"use client";

import MultiStepRegistrationForm from "@/components/registration/MultiStepRegistrationForm";
import Button from "@/components/ui/Button";
import React from "react";

const registerationPage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-8 items-center justify-center">
      <MultiStepRegistrationForm />
      <div className=" w-[60%]  flex items-center justify-between">
        <Button className="w-50">Prev</Button>
        <Button className="w-50">Next</Button>
      </div>
    </div>
  );
};

export default registerationPage;
