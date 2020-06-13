import React, { useState } from "react";
import { View } from "react-native";
import Chart from "react-apexcharts";
import { useMachine } from "@xstate/react";
import { emotionStateMachine } from "./xstate/stateMachine";
import { EmoObjects } from "./xstate/actions";

const getEmotions = (state) => {
  return Object.values(EmoObjects[state]);
};

const useChart = () => {
  const [current, send] = useMachine(emotionStateMachine);
  const emotions = getEmotions(current.value);
  const series = emotions.map((each) => 1);
  const chart = {
    chartOptions: {
      chart: {
        events: {
          dataPointSelection: (event, chartContext, config) => {
            send(config.w.config.labels[config.dataPointIndex]);
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.seriesIndex];
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
              name: {
                show: true,
              },
            },
          },
        },
      },
      labels: emotions,
      legend: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    series,
  };
  return chart;
};

const Donut = () => {
  const { chartOptions, series } = useChart();

  return (
    <View class="pie">
      <Chart options={chartOptions} series={series} type="pie" width="500" />
    </View>
  );
};

export default Donut;
