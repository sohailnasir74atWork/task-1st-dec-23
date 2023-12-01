import React from 'react';

import Flex, { FlexItem } from '../Flex';
import Typography from '../Typography';

export default function Day() {
  return (
    <FlexItem seven>
      <Flex margin='0 0 10px' alignCenter>
        <Typography margin='0 5px 0 0' bold>
          Monday
        </Typography>
        <Typography margin='0' bold small dimmed>
          Dec 15
        </Typography>
      </Flex>
      <Flex>
        <div>5:30pm – 6:30pm</div>
        <div>6:00pm – 7:00pm</div>
      </Flex>
    </FlexItem>
  );
}
