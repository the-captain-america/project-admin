import React from 'react';
import { Card, Heading, Content } from 'utils/common-ui';
import { DeleteControl } from 'features';

export const DataItems = ({
  items = {},
  onRemove,
  onSelect,
  isEdit = false
}) => {
  const findItem = items;
  const itemKeys = Object.keys(findItem);
  return itemKeys.map((id, index) => {
    const data = findItem[id];
    const handleDelete = () => {
      onRemove(data);
    };
    return (
      <Card key={index}>
        <Content onClick={onSelect}>
          <Heading>{data.name ? data.name : 'Name not provided'}</Heading>
          {data.items ? data.items : 1}
          {data.items > 1 ? ` ${data.items}s` : ` ${data.items}`}
        </Content>
        <DeleteControl isActive={isEdit} onPress={handleDelete} />
      </Card>
    );
  });
};
