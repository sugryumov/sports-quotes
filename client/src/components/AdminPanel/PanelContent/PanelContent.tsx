import React, { ReactElement } from 'react';
import Table from '../Table/Table';

interface Props {
  contentLabel: string;
  contentData: any;
  setContentData: any;
}

function PanelContent(props: Props): ReactElement {
  const renderContent = (value: string) => {
    switch (value) {
      case 'Категории':
        return <Table data={props.contentData} setData={props.setContentData} />;
      case 'Статьи':
        return <div>123</div>;
      default:
        return <div>sdfsdfsdf</div>;
    }
  };

  return <div>{renderContent(props.contentLabel)}</div>;
}

export default PanelContent;
