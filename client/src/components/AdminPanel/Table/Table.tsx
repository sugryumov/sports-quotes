import React, { useState } from 'react';
import MaterialTable, { Column } from 'material-table';

interface Row {
  id: string;
  author: string;
  text: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

interface ITable {
  title: string;
  data: any;
}

export default function Table(props: any) {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'id', field: 'id' },
      { title: 'author', field: 'author' },
      { title: 'text', field: 'text' },
    ],
    data: [
      { id: '123', author: 'Baran', text: 'sdfsdgdgsdfsdfsdf' },
      {
        id: '546',
        author: 'Jora',
        text: 'dfsdf',
      },
    ],
  });

  return (
    <MaterialTable
      title="Таблица"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
