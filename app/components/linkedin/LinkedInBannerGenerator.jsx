'use client';
import React from 'react';
import Canvas from './Canvas';
import TextControls from './TextControls';
import FontControls from './FontControls';
import BackgroundControls from './BackgroundControls';
import PositionControls from './PositionControls';
import { useCanvasState } from '../../hooks/useCanvasState';

const LinkedInBannerGenerator = () => {
  const { canvasRef, state, updateState, downloadBanner } = useCanvasState();

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-8 text-3xl font-bold text-gray-800'>
          LinkedIn Banner Generator
        </h1>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='rounded-lg bg-white p-6 shadow-md lg:col-span-2'>
            <Canvas
              canvasRef={canvasRef}
              state={state}
              updateState={updateState}
            />
          </div>

          <div className='space-y-6 rounded-lg bg-white p-6 shadow-md'>
            <TextControls
              name={state.name}
              title={state.title}
              onNameChange={(name) => updateState({ name })}
              onTitleChange={(title) => updateState({ title })}
            />

            <FontControls
              nameFont={state.nameFont}
              titleFont={state.titleFont}
              nameFontSize={state.nameFontSize}
              titleFontSize={state.titleFontSize}
              onNameFontChange={(nameFont) => updateState({ nameFont })}
              onTitleFontChange={(titleFont) => updateState({ titleFont })}
              onNameFontSizeChange={(nameFontSize) =>
                updateState({ nameFontSize })
              }
              onTitleFontSizeChange={(titleFontSize) =>
                updateState({ titleFontSize })
              }
            />

            <PositionControls
              namePosition={state.namePosition}
              titlePosition={state.titlePosition}
              onNamePositionChange={(namePosition) =>
                updateState({ namePosition })
              }
              onTitlePositionChange={(titlePosition) =>
                updateState({ titlePosition })
              }
            />

            <BackgroundControls
              backgroundImage={state.backgroundImage}
              backgroundPosition={state.backgroundPosition}
              onBackgroundChange={(backgroundImage) =>
                updateState({ backgroundImage })
              }
              onPositionChange={(backgroundPosition) =>
                updateState({ backgroundPosition })
              }
            />

            <button
              onClick={downloadBanner}
              className='flex w-full items-center justify-center gap-2 rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
            >
              Download Banner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBannerGenerator;
