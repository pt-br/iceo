import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import { ChartWrapper, LeadershipTitle, RoleTitle } from './Chart.style';

HighchartsMore(Highcharts);

const Chart = ({ options }) => {
  return (
    <ChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <LeadershipTitle>Leadership & Management</LeadershipTitle>
      <RoleTitle>Role Specifics</RoleTitle>
    </ChartWrapper>
  );
};

export default Chart;
