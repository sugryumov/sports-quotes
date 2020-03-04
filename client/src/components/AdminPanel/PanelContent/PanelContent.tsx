import React, { ReactElement } from 'react';
import Category from '../Category/Category';
import Quotes from '../Quotes/Quotes';
import './PanelContent.css';

interface Props {
  contentLabel: string;
  contentData: any;
  setContentData: any;
}

function PanelContent(props: Props): ReactElement {
  switch (props.contentLabel) {
    case 'Категории':
      return (
        <Category
          data={props.contentData}
          setData={props.setContentData}
          label={props.contentLabel}
        />
      );
    case 'Статьи':
      return (
        <Quotes
          data={props.contentData}
          setData={props.setContentData}
          label={props.contentLabel}
        />
      );
    default:
      return <div className="chart" />;
  }
}

export default PanelContent;
