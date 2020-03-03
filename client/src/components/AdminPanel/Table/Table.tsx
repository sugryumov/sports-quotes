import React, { useState } from 'react';
import MaterialTable, { Column } from 'material-table';
import './Table.css';
import {
  createCategory,
  deleteCategory,
  updateCategory,
  createQuote,
  deleteQuote,
  updateQuote,
} from '../../../helpers/services';

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
  const chooseColumns = (label: any) => {
    switch (label) {
      case 'Категории': {
        return [{ title: 'name', field: 'name' }];
      }
      case 'Статьи': {
        return [
          {
            title: 'Категория',
            field: 'category',
            // lookup: { Лыжи: 'Лыжи', Футбол: 'Футбол' },
          },
          { title: 'Автор', field: 'author' },
          { title: 'Цитата', field: 'quote' },
        ];
      }
      default:
        return [];
    }
  };

  const chooseEditable = (label: any) => {
    switch (label) {
      case 'Категории':
        return {
          onRowAdd: (newData: any) =>
            createCategory(newData.name)
              .then(() => props.setData((prevState: any) => prevState.concat(newData)))
              .catch(err => console.log(err)),

          onRowUpdate: (newData: any, oldData: any) => {
            if (oldData) {
              return updateCategory(newData._id, newData.name)
                .then(() =>
                  props.setData((prevState: any) => {
                    return prevState.map((item: any) => {
                      return item._id === newData._id ? newData : item;
                    });
                  })
                )
                .catch(err => console.log(err));
            } else {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                }, 0);
              });
            }
          },

          onRowDelete: (oldData: any) =>
            deleteCategory(oldData._id)
              .then(() =>
                props.setData((prevState: any) => {
                  return prevState.filter((item: any) => item._id !== oldData._id);
                })
              )
              .catch(err => console.log(err)),
        };
      default:
        return {
          onRowAdd: (newData: any) =>
            createQuote(newData.quote, newData.author, newData.category)
              .then(() => props.setData((prevState: any) => prevState.concat(newData)))
              .catch(err => console.log(err)),

          onRowUpdate: (newData: any, oldData: any) => {
            if (oldData) {
              return updateQuote(newData._id, newData.quote, newData.author, newData.category)
                .then(() =>
                  props.setData((prevState: any) => {
                    const data = prevState.map((item: any) => {
                      return item._id === newData._id ? newData : item;
                    });
                    return data;
                  })
                )
                .catch(err => console.log(err));
            } else {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                }, 0);
              });
            }
          },

          onRowDelete: (oldData: any) =>
            deleteQuote(oldData._id)
              .then(() =>
                props.setData((prevState: any) => {
                  return prevState.filter((item: any) => item._id !== oldData._id);
                })
              )
              .catch(err => console.log(err)),
        };
    }
  };

  return (
    <div className="table">
      <MaterialTable
        title="Таблица"
        columns={chooseColumns(props.label)}
        data={props.data}
        editable={chooseEditable(props.label)}
      />
    </div>
  );
}
