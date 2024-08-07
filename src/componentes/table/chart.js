import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Tableau10 = [

  
];

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};
export default function BasicColor() {
  const [color, setColor] = React.useState('#4e79a7');

  const handleChange = (event, nextColor) => {
    setColor(nextColor);
  };

  return (
    <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <LineChart
        {...chartsParams}
        series={[
          {
            data: [15, 23, 18, 19, 13],
            label: 'USD to Birr Exchange Rate',
            color,
          },
        ]}
      />
      <ToggleButtonGroup
        // orientation="vertical"
        value={color}
        exclusive
        onChange={handleChange}
      >
        {Tableau10.map((value) => (
          <ToggleButton key={value} value={value} sx={{ p: 1 }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value,
                display: 'inline-block',
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}
