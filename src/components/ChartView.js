import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

export function ChartView({ csvFile }) {
  const [chartDataValue, setChartDataValue] = useState([]);

  useEffect(() => {
    if (csvFile) {
      Papa.parse(csvFile, {
        header: true,
        complete: (result) => {
          const data = result?.data;
          const validData = data.filter(
            (row) =>
              !isNaN(parseFloat(row?.X)) &&
              !isNaN(parseFloat(row?.Y)) &&
              !isNaN(parseFloat(row?.Z))
          );
          if (validData?.length > 0) {
            const chartData =
              validData &&
              validData?.map((item) => {
                return { x: parseInt(item.KP), y: parseFloat(item.X) };
              });
            setChartDataValue(chartData);
          }
        },
      });
    }
  }, [csvFile]);

  return (
    <>
      {chartDataValue?.length > 0 && (
        <Scatter
          options={options}
          data={{
            datasets: [
              {
                label: "Data set",
                data: chartDataValue,
                backgroundColor: "rgba(255, 99, 132, 1)",
              },
            ],
          }}
        />
      )}
    </>
  );
}
