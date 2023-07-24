"use client";

import { treeOptions } from "@/constants/chartConstants";
import React from "react";
import Chart from "react-apexcharts";

const ResultPage = () => {
  
  let series =  [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangalore',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]
    }
  ]


  return (
    <div className="flex flex-col items-center gap-3 p-10 ">
      <h1 className="text-2xl font-bold text-white">
        Welcome to HCL&apos;s Cultural Data Platform
      </h1>
      <div className="items-center w-full py-8 mt-10 bg-white rounded-lg md:w-3/4">
        <p className="mb-3 font-semibold text-center text-primary">
          Please find the visual of the survey results below
        </p>
        <Chart options={treeOptions} series={series} type="treemap" width="500" />
      </div>
    </div>
  );
};

export default ResultPage;
