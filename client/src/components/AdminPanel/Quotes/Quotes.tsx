import React, { ReactElement } from 'react';
import Table from '../Table/Table';

interface Props {}

function Quotes(props: any): ReactElement {
  return (
    <div>
      <Table data={props.data} setData={props.setData} label={props.label} />
    </div>
  );
}

export default Quotes;
