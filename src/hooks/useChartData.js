import { getSliderVote } from 'pages/Quiz/utils';
import { useMemo } from 'react';
import createPersistedState from 'use-persisted-state';

const useChartAnswers = createPersistedState('chartData');

const getDefaultDataSet = () => {
  const dataSet = {};

  [...Array(12)].forEach((_, i) => {
    dataSet[i] = { y: 5, code: 'Assist' };
  });

  return dataSet;
};

export const useChartData = () => {
  const [chartData, setChartData] = useChartAnswers(getDefaultDataSet());

  const mappedChartData = useMemo(() => {
    return Object.values(chartData);
  }, [chartData]);

  const sliderData = useMemo(() => {
    return mappedChartData.map(val => getSliderVote(val.y));
  }, [mappedChartData]);

  return {
    chartData,
    setChartData,
    mappedChartData,
    sliderData,
  };
};
