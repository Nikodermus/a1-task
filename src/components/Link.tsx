import MaterialLink from '@material-ui/core/Link';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

type ColorType =
  | 'error'
  | 'inherit'
  | 'initial'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary';

const Link: React.FC<Partial<LinkProps>> = ({
  color = 'inherit',
  ...props
}) => (
  <MaterialLink component={RouterLink} color={color as ColorType} {...props} />
);

export default Link;
