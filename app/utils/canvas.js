export const drawCanvas = async (canvas, state) => {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Load and draw background image
  const img = new Image();
  img.crossOrigin = 'anonymous'; // Add crossOrigin attribute
  img.src = `${state.backgroundImage}?auto=format&fit=crop&w=1584&h=396`;

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  // Clear canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate scaled dimensions to cover canvas
  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  const scaledWidth = img.width * scale;
  const scaledHeight = img.height * scale;

  // Draw background with position offset
  ctx.drawImage(
    img,
    state.backgroundPosition.x - (scaledWidth - canvas.width) / 2,
    state.backgroundPosition.y - (scaledHeight - canvas.height) / 2,
    scaledWidth,
    scaledHeight,
  );

  // Add semi-transparent overlay for better text visibility
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw name with shadow for better visibility
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.font = `${state.nameFontSize}px ${state.nameFont}`;
  ctx.fillStyle = 'white';
  ctx.fillText(state.name, state.namePosition.x, state.namePosition.y);

  // Draw title
  ctx.font = `${state.titleFontSize}px ${state.titleFont}`;
  ctx.fillText(state.title, state.titlePosition.x, state.titlePosition.y);
};
