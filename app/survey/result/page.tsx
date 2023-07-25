"use client";

import { getSurveyAction } from "@/actions";
import TreeMap from "@/components/charts/TreeMap";
import { treeOptions } from "@/constants/chartConstants";
import { treeDataMapper } from "@/mapper";
import React, { useEffect, useState } from "react";

const ResultPage = () => {
  const [series, setSeries] = useState([
    {
      data: [
        {
          x: "HCL",
          y: 0,
        },
      ],
    },
  ]);

  useEffect(() => {
    (async function () {
      let res = await getSurveyAction();
      setSeries([{ data: [...treeDataMapper(res)] }]);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 p-10 ">
      <h1 className="text-2xl font-bold text-white">
        Welcome to HCL&apos;s Cultural Data Platform
      </h1>
      <div className="items-center w-full py-8 mt-10 bg-white rounded-lg md:w-3/4">
        <p className="mb-3 font-semibold text-center text-primary">
          Please find the visual of the survey results below
        </p>
        <TreeMap options={treeOptions} series={series} />

        
      </div>
    </div>
  );
};

export default ResultPage;
