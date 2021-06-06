import {
  Box,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

export interface FilterBoxProps {
  onChange?: () => void;
}

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const FilterBox: React.FC<FilterBoxProps> = () => {
  const [color, setColor] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="stretch"
          paddingTop={2}
          paddingX={2}
        >
          <Box marginBottom={3}>
            <InputLabel id="car-color">Color</InputLabel>
            <Select
              displayEmpty
              fullWidth
              labelId="car-color"
              onChange={(e) => setColor(e.target.value as string)}
              value={color}
            >
              <MenuItem value="">All car colors</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>

          <Box marginBottom={3}>
            <InputLabel id="car-manufacturer">Manufacturer</InputLabel>
            <Select
              displayEmpty
              fullWidth
              labelId="car-manufacturer"
              onChange={(e) => setManufacturer(e.target.value as string)}
              value={manufacturer}
            >
              <MenuItem value="">All car manufacturers</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>

          <StyledButton color="primary" variant="contained" disableElevation>
            Filter
          </StyledButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FilterBox;
