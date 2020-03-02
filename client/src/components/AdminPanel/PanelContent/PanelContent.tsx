import React, { ReactElement } from 'react';
import Table from '../Table/Table';

interface Props {
  contentData: string;
  categoryData: any;
}

function PanelContent(props: Props): ReactElement {
  const renderContent = (value: string) => {
    switch (value) {
      case 'Категории':
        return <Table data={props.categoryData} />;
      case 'Статьи':
        return <div>123</div>;
      default:
        return <div>sdfsdfsdf</div>;
    }
  };
  return <div>{renderContent(props.contentData)}</div>;
}

export default PanelContent;
