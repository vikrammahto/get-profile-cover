import React from 'react';

const PositionControls = ({
  namePosition,
  titlePosition,
  onNamePositionChange,
  onTitlePositionChange,
}) => (
  <div>
    <h2 className='mb-4 text-xl font-semibold'>Text Position</h2>
    <div className='space-y-4'>
      <div>
        <h3 className='mb-2 font-medium'>Name Position</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='mb-1 block text-sm font-medium'>X Position</label>
            <input
              type='range'
              min='0'
              max='1584'
              value={namePosition.x}
              onChange={(e) =>
                onNamePositionChange({
                  ...namePosition,
                  x: Number(e.target.value),
                })
              }
              className='w-full'
            />
          </div>
          <div>
            <label className='mb-1 block text-sm font-medium'>Y Position</label>
            <input
              type='range'
              min='0'
              max='396'
              value={namePosition.y}
              onChange={(e) =>
                onNamePositionChange({
                  ...namePosition,
                  y: Number(e.target.value),
                })
              }
              className='w-full'
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className='mb-2 font-medium'>Title Position</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='mb-1 block text-sm font-medium'>X Position</label>
            <input
              type='range'
              min='0'
              max='1584'
              value={titlePosition.x}
              onChange={(e) =>
                onTitlePositionChange({
                  ...titlePosition,
                  x: Number(e.target.value),
                })
              }
              className='w-full'
            />
          </div>
          <div>
            <label className='mb-1 block text-sm font-medium'>Y Position</label>
            <input
              type='range'
              min='0'
              max='396'
              value={titlePosition.y}
              onChange={(e) =>
                onTitlePositionChange({
                  ...titlePosition,
                  y: Number(e.target.value),
                })
              }
              className='w-full'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PositionControls;
