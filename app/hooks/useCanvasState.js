import { useRef, useState, useEffect } from 'react';

import { drawCanvas } from '../utils/canvas';

const initialState = {
  name: 'John Doe',
  title: 'Software Engineer',
  namePosition: { x: 50, y: 100 },
  titlePosition: { x: 50, y: 150 },
  nameFontSize: 48,
  titleFontSize: 32,
  nameFont: 'Arial',
  titleFont: 'Arial',
  backgroundImage:
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
  backgroundPosition: { x: 0, y: 0 },
  isDraggingName: false,
  isDraggingTitle: false,
};

export const useCanvasState = () => {
  const canvasRef = useRef;
  const [state, setState] = useState(initialState);

  const updateState = (updates) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  useEffect(() => {
    drawCanvas(canvasRef.current, state);
  }, [state]);

  const downloadBanner = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'linkedin-banner.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return {
    canvasRef,
    state,
    updateState,
    downloadBanner,
  };
};
