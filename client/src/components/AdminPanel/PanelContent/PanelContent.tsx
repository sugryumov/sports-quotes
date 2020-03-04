import React, { ReactElement } from 'react';
import Table from '../Table/Table';
import './PanelContent.css';

interface Props {
  contentLabel: string;
  contentData: any;
  setContentData: any;
}

function PanelContent(props: Props): ReactElement {
  const renderContent = (value: string) => {
    switch (value) {
      case 'Категории':
        return (
          <Table
            data={props.contentData}
            setData={props.setContentData}
            label={props.contentLabel}
          />
        );
      case 'Статьи':
        return (
          <Table
            data={props.contentData}
            setData={props.setContentData}
            label={props.contentLabel}
          />
        );
      default:
        return <div className="chart" />;
    }
  };

  return renderContent(props.contentLabel);
}

export default PanelContent;
