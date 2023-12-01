import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader } from './Header.styles';
import Typography from '../Typography';

export default function Header({ calendarName }) {
  return (
    <StyledHeader>
      <Typography as='h3' bold margin='16px 0'>
        Schedule a meeting with {calendarName}
      </Typography>
      <Typography dimmed small>
        Please pick a time slot below.
      </Typography>
    </StyledHeader>
  );
}

Header.propTypes = {
  calendarName: PropTypes.string.isRequired,
};
