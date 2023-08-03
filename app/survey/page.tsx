"use client";

import SubmittedForm from "@/components/SubmittedForm";
import SurveyForm from "@/components/SurveyForm";
import React, { useEffect, useState } from "react";

const SurveyPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(
    Boolean(localStorage?.getItem("isFormSubmitted")) ?? false
  );

  return (
    <div className="flex flex-col items-center gap-3 p-10 ">
      <div className="items-center w-full py-8 mt-10 rounded-lg shadow-lg bg-background md:w-3/4">
        {!isFormSubmitted ? (
          <>
            <p className="mb-3 text-sm font-semibold text-center text-primary sm:text-base">
              Please submit the form below to the best of your knowledge
            </p>
            <SurveyForm setIsFormSubmitted={setIsFormSubmitted} />
          </>
        ) : (
          <SubmittedForm />
        )}
      </div>
    </div>
  );
};

export default SurveyPage;
