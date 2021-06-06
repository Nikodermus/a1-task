import { Box, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  margin-top: auto;
`;

const Footer: React.FC = () => {
  return (
    <StyledPaper component="footer" variant="outlined">
      <Box padding={3}>
        <Typography variant="body1" align="center">
          ©AUTO1 Group {new Date().getFullYear()}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default Footer;
