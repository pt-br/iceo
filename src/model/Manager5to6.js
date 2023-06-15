import { colors } from 'utils';

export const getOptions = quizData => ({
  chart: {
    polar: true,
  },

  title: {
    text: '',
    // x: -80,
  },

  pane: {
    size: '80%',
  },

  xAxis: {
    categories: [
      'Inspires Others',
      'Develops Talent',
      'Day to Day Management',
      'Hiring',
      'Onboarding',
      'Delivers Feedback',
      'Investment Level Underwriting and Analysis',
      'Develop and Foster Relationships with Originating Partners',
      'Sound Structural and Legal Comprehension',
      'Collaborative & Resourceful',
      'Workouts and Restructuring',
      'Strategic Problem Solving',
      'Strong Presentation Skills',
    ],
    tickmarkPlacement: 'on',
    lineWidth: 0,
    labels: {
      distance: 35,
    },
  },

  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0,
    labels: { enabled: false },
    ceiling: 20,
  },

  plotOptions: {
    area: {},
    line: {
      marker: {
        enabled: false,
      },
    },
    series: {
      lineWidth: 2,
    },
  },

  tooltip: {
    shared: true,
    pointFormat:
      '<span style="color:{series.color}">{series.name}: <b>{point.code}</b><br/>',
  },

  legend: {},

  series: [
    {
      // type: 'area',
      name: 'Ideal',
      data: [
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
      ],
      color: colors.chart_1,
    },
    {
      // type: 'area',
      name: 'Manager Evaluation',
      data: [
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
        { y: 10, code: 'Do' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
        { y: 10, code: 'Do' },
        { y: 10, code: 'Do' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
        { y: 10, code: 'Do' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
        { y: 10, code: 'Do' },
      ],
      color: colors.chart_2,
    },
    {
      // type: 'area',
      name: 'Self Evaluation',
      data: quizData,
      color: colors.chart_3,
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal',
          },
          pane: {
            size: '70%',
          },
        },
      },
    ],
  },

  credits: {
    enabled: false,
  },
});
