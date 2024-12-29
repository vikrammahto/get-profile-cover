import { useCallback } from 'react';

export const useDraggableText = (canvasRef, state, updateState) => {
  const handleMouseDown = useCallback(
    (e) => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if click is near name or title
      const nameDistance = Math.hypot(
        x - state.namePosition.x,
        y - state.namePosition.y,
      );
      const titleDistance = Math.hypot(
        x - state.titlePosition.x,
        y - state.titlePosition.y,
      );

      if (nameDistance < 50) {
        updateState({ isDraggingName: true });
      } else if (titleDistance < 50) {
        updateState({ isDraggingTitle: true });
      }
    },
    [state.namePosition, state.titlePosition],
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (state.isDraggingName) {
        updateState({ namePosition: { x, y } });
      } else if (state.isDraggingTitle) {
        updateState({ titlePosition: { x, y } });
      }
    },
    [state.isDraggingName, state.isDraggingTitle],
  );

  const handleMouseUp = useCallback(() => {
    updateState({ isDraggingName: false, isDraggingTitle: false });
  }, []);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
