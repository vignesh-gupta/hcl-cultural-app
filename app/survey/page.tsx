"use client";

import SubmittedForm from "@/components/SubmittedForm";
import SurveyForm from "@/components/SurveyForm";
import React, { useEffect, useState } from "react";

const SurveyPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(Boolean(localStorage?.getItem("isFormSubmitted")) ?? false);

  

  return (
    <main className="flex flex-col items-center gap-3 p-10 ">
      <div className="items-center w-full py-8 mt-10 bg-white rounded-lg shadow-lg md:w-3/4">
        {!isFormSubmitted ? (
          <>
            <p className="mb-3 text-sm font-semibold text-center text-primary sm:text-base">
              Please submit the form below to the best of your knowledge
            </p>
            <SurveyForm
              isFormSubmitted={isFormSubmitted}
              setIsFormSubmitted={setIsFormSubmitted}
            />
          </>
        ) : (
          <SubmittedForm />
        )}
      </div>
    </main>
  );
};

export default SurveyPage;
