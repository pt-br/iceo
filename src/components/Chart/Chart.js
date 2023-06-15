import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import { ChartWrapper } from './Chart.style';

HighchartsMore(Highcharts);

const Chart = ({ options }) => {
  return (
    <ChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartWrapper>
  );
};

export default Chart;
