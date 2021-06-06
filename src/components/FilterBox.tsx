import {
  Box,
  capitalize,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import type Manufacturer from '../types/Manufacturer.d';

import { createURLParams, parseURLParams } from '../utils/string';
import { getJSON } from '../utils/fetch';
import Button from './Button';

export interface FilterBoxProps {
  onChange?: () => void;
}

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

interface ColorResponse {
  colors: string[];
}

interface ManufacturersResponse {
  manufacturers: Manufacturer[];
}

const FilterBox: React.FC<FilterBoxProps> = () => {
  const history = useHistory();

  const { data: dataColors } = useQuery<ColorResponse>('colors', () =>
    getJSON<ColorResponse>('colors')
  );

  const { data: dataManufacturers } = useQuery<ManufacturersResponse>(
    'manufacturers',
    () => getJSON<ManufacturersResponse>('manufacturers')
  );

  const [color, setColor] = useState(
    () => parseURLParams(window.location.search).color || ''
  );
  const [manufacturer, setManufacturer] = useState(
    () => parseURLParams(window.location.search).manufacturer || ''
  );

  useEffect(() => {
    history.push({
      search: createURLParams('', { color, manufacturer }),
    });
  }, [color, manufacturer, history]);

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
              {dataColors?.colors.map((colorOpt) => (
                <MenuItem value={colorOpt} key={colorOpt}>
                  {capitalize(colorOpt)}
                </MenuItem>
              ))}
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
              {dataManufacturers?.manufacturers.map(({ name }) => (
                <MenuItem value={name} key={name}>
                  {name}
                </MenuItem>
              ))}
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
