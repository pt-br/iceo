import { useMemo, useCallback } from 'react';
import createPersistedState from 'use-persisted-state';

import { getSliderVote } from 'pages/Quiz/utils';

const useChartAnswers = createPersistedState('chartData');

const getDefaultDataSet = () => {
  const dataSet = {};

  [...Array(13)].forEach((_, i) => {
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

  const resetChartData = useCallback(() => {
    setChartData(getDefaultDataSet());
  }, []);

  return {
    chartData,
    setChartData,
    mappedChartData,
    sliderData,
    resetChartData,
  };
};
