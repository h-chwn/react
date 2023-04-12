import * as React from 'react';
import {
  BsFillCaretDownFill,
  BsFillCaretRightFill,
  BsCheck,
} from 'react-icons/bs';
import './TreeGrid.css';
import Table from 'react-bootstrap/Table';

export interface ITreeGridProps {
  headers?: IHeader[];
  data?: any[];
}

export interface IHeader {
  title: string;
  field: string;
  width: number;
  align: 'center' | 'right' | 'left';
  visible: boolean;
  seq: number;
}

// main
const TreeGrid = (props: ITreeGridProps) => {
  // sorting header
  props.headers.sort((a, b) => a.seq - b.seq);

  return (
    <Table bordered hover size="sm">
      {/* Header */}
      <thead>
        <HeaderNode headers={props.headers} />
      </thead>

      {/* Body */}
      <tbody>
        {props.data.map((v) => {
          return (
            <BodyNode key={v.id} level={1} headers={props.headers} data={v} />
          );
        })}
      </tbody>
    </Table>
  );
};

// header
const HeaderNode = ({ headers }: ITreeGridProps) => {
  return (
    <React.Fragment>
      <tr>
        {headers.map((v) => {
          switch (v.seq) {
            // case 1:
            //   return <th key={v.field} style={{ width: v.width }}></th>;
            default:
              return (
                <th key={v.field} style={{ width: v.width }}>
                  {v.title}
                </th>
              );
          }
        })}
      </tr>
    </React.Fragment>
  );
};

interface IBodyNodeProps {
  headers: IHeader[];
  data: any;
  level: number;
}

// body
const BodyNode = ({ headers, data, level }: IBodyNodeProps) => {
  const [isExpand, setIsExpand] = React.useState(false);
  const hasChildren = data?.children?.length;
  const expanableIcon = () => {
    if (hasChildren) {
      if (isExpand) {
        return <BsFillCaretDownFill />;
      } else {
        return <BsFillCaretRightFill />;
      }
    }
    return <span style={{ marginLeft: 16 }}></span>;
  };

  const onExpand = () => {
    // console.log(!isExpand);
    setIsExpand(!isExpand);
  };

  return (
    <React.Fragment>
      <tr key={data.id} onClick={onExpand}>
        {headers.map((h) => {
          const tdStyle = {
            textAlign: h.align,
          };

          const innerHtml = cellValue(data[h.field]);

          switch (h.seq) {
            case 1:
              return (
                <td key={h.field} style={tdStyle}>
                  <span style={{ marginLeft: (level - 1) * 15 }}></span>
                  {expanableIcon()}
                  {innerHtml}
                </td>
              );
            default:
              return (
                <td key={h.field} style={tdStyle}>
                  {innerHtml}
                </td>
              );
          }
        })}
      </tr>
      {isExpand &&
        hasChildren &&
        data.children.map((v: any) => {
          return (
            <BodyNode key={v.id} level={level + 1} headers={headers} data={v} />
          );
        })}
    </React.Fragment>
  );
};

const cellValue = (param: any) => {
  switch (typeof param) {
    case 'boolean':
      if (param === true) return <BsCheck />;
      else return undefined;
    case 'string':
    default:
      return param;
  }
};

export default TreeGrid;
