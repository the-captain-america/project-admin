import React from 'react';
import { history } from 'state/store';
import { GridContainer, Content } from 'utils/common-ui';

export default () => (
  <GridContainer>
    <Content>
      Nothing found for this URL
      <button onClick={() => history.push('/auth')}>Login</button>
    </Content>
  </GridContainer>
);
