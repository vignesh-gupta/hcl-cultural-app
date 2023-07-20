'use client'

import React from "react";

const SurveyPage = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-10 text-center">
      <h1 className="text-2xl font-bold text-white">
        Welcome to HCL&apos;s Cultural Data Platform
      </h1>
      <p className="max-w-3xl text-white md:text-lg">
        This is an organizational survey that is asking some questions regarding
        your organizational environment. It is asking you to consider your
        colleagues, team members, leaders and senior leadership around you when
        answering the questions. In this survey, we want you to answer as
        honestly as you can how you think and feel about organizational
        environment. It’s should be based on your observations on behaviors and
        work practices you come across every day or/and every week. It can be
        about virtual work practices or office behaviors and policies. However,
        in the beginning there are some general questions regarding you, your
        work location and role.
      </p>
      <div className="w-full py-8 mt-10 text-center bg-white rounded-lg md:w-3/4">
        <p className="font-semibold text-primary">
          Please submit the form below to the best of your knowledge
        </p>
      </div>
    </div>
  );
};

export default SurveyPage;
