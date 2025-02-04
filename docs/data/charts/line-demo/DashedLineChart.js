import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function DashedLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId', color: '#8884d8' },
        { data: uData, label: 'uv', id: 'uvId', color: '#82ca9d' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root, .MuiMarkElement-root': {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-uvId': {
          strokeDasharray: '3 4 5 2',
        },
        '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
          fill: '#fff',
        },
        '& .MuiMarkElement-highlighted': {
          stroke: 'none',
        },
      }}
    />
  );
}
