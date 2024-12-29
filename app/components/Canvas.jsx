import React from 'react';

import { useDraggableText } from '../hooks/useDraggableText';

const Canvas = ({ canvasRef, state, updateState }) => {
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDraggableText(
    canvasRef,
    state,
    updateState,
  );

  return (
    <canvas
      ref={canvasRef}
      width={1584}
      height={396}
      className="w-full cursor-move rounded border border-gray-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
};

export default Canvas;
