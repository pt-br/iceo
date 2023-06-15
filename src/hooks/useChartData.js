import { useMemo } from 'react';
import createPersistedState from 'use-persisted-state';

const useChartAnswers = createPersistedState('chartData');

export const useChartData = () => {
  const [chartData, setChartData] = useChartAnswers(0);

  const mappedChartData = useMemo(() => {
    return Object.values(chartData);
  }, [chartData]);

  return {
    chartData,
    setChartData,
    mappedChartData,
  };
};
