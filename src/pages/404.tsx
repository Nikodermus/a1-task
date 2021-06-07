import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Link from '../components/Link';
import logo from '../images/logo.png';

const StyledImg = styled.img`
  width: 150px;
  padding: 24px 0;
`;

const NotFound: React.FC = () => {
  return (
    <Box py={10} margin="auto" maxWidth={350} textAlign="center">
      <Link to="/">
        <StyledImg src={logo} alt="A1 Logo" />
      </Link>

      <Typography gutterBottom variant="h4">
        404 - Not Found
      </Typography>
      <Typography>
        Sorry, the page you are looking for does not exist. You can always go
        back to the
        <Link to="/" color="primary">
          {` homepage`}
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default NotFound;
