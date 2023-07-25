import { ApexOptions } from 'apexcharts'
import React from 'react'
import Chart from "react-apexcharts";


const TreeMap = ({options, series} : {options: ApexOptions , series: ApexAxisChartSeries | ApexNonAxisChartSeries }) => {
  return (
    <div className="flex justify-center w-full">
          <div className="w-[800px] max-w-full">
            <Chart
              options={options}
              series={series}
              type="treemap"
              width="100%"
            />
          </div>
        </div>
  )
}

export default TreeMap