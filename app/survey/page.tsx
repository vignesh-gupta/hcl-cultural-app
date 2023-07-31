"use client";

import SurveyForm from "@/components/SurveyForm";
import React from "react";

const SurveyPage = () => {
  return (
    <main className="flex flex-col items-center gap-3 p-10 ">
      <div className="items-center w-full py-8 mt-10 bg-white rounded-lg md:w-3/4">
        <p className="mb-3 text-sm font-semibold text-center text-primary sm:text-base">
          Please submit the form below to the best of your knowledge
        </p>
        <SurveyForm />
      </div>
    </main>
  );
};

export default SurveyPage;
