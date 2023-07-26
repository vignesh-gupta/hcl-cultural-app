import React from "react";

const PowerBiSample = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-10 ">
      <h1 className="text-2xl font-bold text-white">
        Welcome to HCL&apos;s Cultural Data Platform
      </h1>
      <div className="items-center w-full py-8 mt-10 bg-white rounded-lg md:w-3/4">
        <p className="mb-3 font-semibold text-center text-primary">
          Please find the visual of the survey results below
        </p>
        <iframe
          title="Sample Report Demo"
          width="100%"
          height="541.25"
          src="https://playground.powerbi.com/sampleReportEmbed"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBiSample;
