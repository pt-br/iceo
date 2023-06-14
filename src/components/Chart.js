import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

const Chart = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
