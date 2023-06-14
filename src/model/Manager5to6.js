export const options = {
  chart: {
    polar: true,
  },

  title: {
    text: 'Evaluation comparison',
    x: -80,
  },

  pane: {
    size: '100%',
  },

  xAxis: {
    categories: [
      'Hiring',
      'Onboarding',
      'Day-to-Day Management',
      'Career Development + Recognition',
      'High Standards of Ethics and Positive Culture Creation',
    ],
    tickmarkPlacement: 'on',
    lineWidth: 0,
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
  },

  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.code}</b><br/>',
  },

  legend: {},

  series: [
    {
      type: 'area',
      name: 'Next level',
      data: [
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
      ],
      pointPlacement: 'on',
      color: '#85F1B7',
    },
    {
      type: 'area',
      name: 'Manager Evaluation',
      data: [
        { y: 10, code: 'Do' },
        { y: 15, code: 'Guide' },
        { y: 20, code: 'Lead' },
        { y: 10, code: 'Do' },
        { y: 15, code: 'Guide' },
      ],
      pointPlacement: 'on',
      color: '#00A7B4',
    },
    {
      type: 'area',
      name: 'Self Evaluation',
      data: [
        { y: 15, code: 'Guide' },
        { y: 10, code: 'Do' },
        { y: 15, code: 'Guide' },
        { y: 10, code: 'Do' },
        { y: 20, code: 'Lead' },
      ],
      pointPlacement: 'on',
      color: '#9B83BA',
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
};
