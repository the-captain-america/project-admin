import React from 'react';
import { Delete, Container } from './styles';
import { Icon } from 'utils/common-ui';

export const DeleteControl = ({ isActive, onPress, item = 0 }) => {
  return (
    <Container isActive={isActive}>
      <Delete isActive={isActive} onClick={onPress}>
        <Icon name="delete" />
      </Delete>
    </Container>
  );
};
