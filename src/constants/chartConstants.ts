import { ApexOptions } from "apexcharts";

export const  treeOptions: ApexOptions = {
  legend: {
    show: true,
  },
  plotOptions:{
    treemap:{
      enableShades:true,
      dataLabels: {
        format:  "truncate"
     },
    }
  },

  chart: {
    type: 'treemap'
  },
  title: {
    text: 'Basic Treemap'
  }
}