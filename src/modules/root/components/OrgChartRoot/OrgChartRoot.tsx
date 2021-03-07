import React from 'react';
import ReactPanZoom from '@ajainarayanan/react-pan-zoom';

type ChartNode = {
  name: string | undefined;
  position: string | undefined;
  children?: ChartNode[] | undefined;
};
type PropsWithChartNode = { node: ChartNode };

const OrgChartRoot: React.FC<PropsWithChartNode> = (props: PropsWithChartNode): JSX.Element => {
  let dragMode = false;
  let cursorNode: HTMLElement | null = null;
  let originalDragHoverTarget: HTMLElement | null = null;
  let scale: number = 1;

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (dragMode === false && target.tagName === 'SPAN') {
      dragMode = true;
      e.preventDefault();
      e.stopPropagation();

      cursorNode = target.cloneNode(true) as HTMLElement;
      cursorNode.onmousedown = null;
      cursorNode.onmousemove = null;
      cursorNode.onmouseup = null;
      cursorNode.style.display = 'none';
      cursorNode.style.zIndex = '3';
      cursorNode.style.backgroundColor = '#c8e4f8';
      cursorNode.style.width = '20rem';
      cursorNode.style.wordWrap = 'break-word';
      cursorNode.style.padding = '0.5rem 1rem';
      cursorNode.style.textAlign = 'center';
      cursorNode.style.color = '#000';
      cursorNode.style.border = '0.2rem solid red';
      cursorNode.style.borderRadius = '0.5rem';
      cursorNode.style.fontFamily = 'arial, verdana, tahoma';
      cursorNode.style.fontSize = '1.1rem';
      document.getElementsByClassName('chart-container')[0]?.prepend(cursorNode);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragMode) {
      e.preventDefault();
      e.stopPropagation();

      if (cursorNode) {
        cursorNode.style.display = 'block';
        cursorNode.style.position = 'absolute';
        cursorNode.style.left = `${e.clientX + 10}px`;
        cursorNode.style.top = `${e.clientY + 450}px`;
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    cursorNode?.parentNode?.removeChild(cursorNode);

    if (dragMode) {
      dragMode = false;
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleMouseWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    scale += e.deltaY * -0.1;

    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);

    // Apply scale transform
    const el = document.getElementsByClassName('chart-root')[0] as HTMLElement;
    el.style.transform = `scale(${scale})`;
  };

  const handleOnMouseEnter = (e: React.MouseEvent) => {
    if (dragMode && cursorNode) {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'SPAN') {
        cursorNode.style.borderColor = 'green';
        target.style.border = '0.1rem solid green';
        originalDragHoverTarget = target;
      }
    }
  };

  const handleOnMouseLeave = (e: React.MouseEvent) => {
    if (dragMode && cursorNode) {
      const target = e.target as HTMLElement;
      if (target && originalDragHoverTarget) {
        cursorNode.style.borderColor = 'red';
        originalDragHoverTarget.style.border = '0.1rem solid #94a0b4';
        originalDragHoverTarget = null;
      }
    }
  };

  const ChartNode: React.FC<PropsWithChartNode> = (props2: PropsWithChartNode): JSX.Element => {
    const { node } = props2;

    const childChartNodes = node.children?.map((child) => <ChartNode node={child} />);

    return (
      <li>
        <span onMouseEnter={(e) => handleOnMouseEnter(e)} onMouseLeave={(e) => handleOnMouseLeave(e)}>
          {node.position} <br />
          {node.name}
        </span>
        {childChartNodes && childChartNodes.length > 0 ? <ul>{childChartNodes}</ul> : ''}
      </li>
    );
  };

  const { node } = props;

  return (
    <ReactPanZoom>
      <div
        className="chart-container"
        role="button"
        tabIndex={-2}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onWheel={(e) => handleMouseWheel(e)}
      >
        <ul className="chart-root">
          <ChartNode node={node} />
        </ul>
      </div>
    </ReactPanZoom>
  );
};

export default OrgChartRoot;
