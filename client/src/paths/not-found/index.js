import React from 'react';
import { history } from 'utils/store';
import { GridContainer, Content } from 'utils/common-ui';

export const NotFound = () => (
  <GridContainer>
    <Content>
      Nothing found for this URL
      <button onClick={() => history.push('/auth')}>Login</button>
    </Content>
  </GridContainer>
);
