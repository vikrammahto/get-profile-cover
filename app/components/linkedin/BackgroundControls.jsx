import React from 'react';
import { BACKGROUND_OPTIONS } from '../../constants';

const BackgroundControls = ({
  backgroundImage,
  backgroundPosition,
  onBackgroundChange,
  onPositionChange,
}) => (
  <div>
    <h2 className='mb-4 text-xl font-semibold'>Background</h2>
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-2'>
        {BACKGROUND_OPTIONS.map((bg) => (
          <button
            key={bg}
            onClick={() => onBackgroundChange(bg)}
            className={`rounded border p-1 ${
              backgroundImage === bg ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <img
              src={bg}
              alt='background option'
              className='h-20 w-full rounded object-cover'
            />
          </button>
        ))}
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium'>
          Background Position X
        </label>
        <input
          type='range'
          min='-500'
          max='500'
          value={backgroundPosition.x}
          onChange={(e) =>
            onPositionChange({
              ...backgroundPosition,
              x: Number(e.target.value),
            })
          }
          className='w-full'
        />
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium'>
          Background Position Y
        </label>
        <input
          type='range'
          min='-500'
          max='500'
          value={backgroundPosition.y}
          onChange={(e) =>
            onPositionChange({
              ...backgroundPosition,
              y: Number(e.target.value),
            })
          }
          className='w-full'
        />
      </div>
    </div>
  </div>
);

export default BackgroundControls;
