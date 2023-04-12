import { IHeader } from './TreeGrid';

export const data = [
  {
    id: 1,
    name: '86297WC(1)',
    is_expand: true,
    children: [
      {
        id: 2,
        name: 'Changwon(6)',
        children: [
          {
            id: 3,
            name: 'Grandchild 1',
          },
          {
            id: 4,
            name: 'Grandchild 2',
          },
        ],
      },
      {
        id: 5,
        name: 'Child 2',
      },
    ],
  },
  {
    id: 6,
    name: 'Parent 2',
  },
];

export const header = [
  {
    title: 'Dcn Number',
    field: 'name',
    width: 60,
    align: 'left',
    visible: true,
    seq: 1,
  },
  {
    title: 'Expand',
    field: 'is_expand',
    width: 50,
    align: 'center',
    visible: true,
    seq: 2,
  },
  {
    title: 'Id',
    field: 'id',
    width: 50,
    align: 'left',
    visible: true,
    seq: 2,
  },
  {
    title: 'Name',
    field: 'name',
    width: 300,
    align: 'center',
    visible: true,
    seq: 3,
  },
] as IHeader[];
