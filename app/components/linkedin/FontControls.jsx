import React from 'react';
import { FONTS } from '../../constants';

const FontControls = ({
  nameFont,
  titleFont,
  nameFontSize,
  titleFontSize,
  onNameFontChange,
  onTitleFontChange,
  onNameFontSizeChange,
  onTitleFontSizeChange,
}) => (
  <div>
    <h2 className='mb-4 text-xl font-semibold'>Font Settings</h2>
    <div className='space-y-4'>
      <div>
        <label className='mb-1 block text-sm font-medium'>Name Font</label>
        <select
          value={nameFont}
          onChange={(e) => onNameFontChange(e.target.value)}
          className='w-full rounded border p-2'
        >
          {FONTS.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium'>Name Font Size</label>
        <input
          type='range'
          min='20'
          max='80'
          value={nameFontSize}
          onChange={(e) => onNameFontSizeChange(Number(e.target.value))}
          className='w-full'
        />
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium'>Title Font</label>
        <select
          value={titleFont}
          onChange={(e) => onTitleFontChange(e.target.value)}
          className='w-full rounded border p-2'
        >
          {FONTS.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium'>
          Title Font Size
        </label>
        <input
          type='range'
          min='16'
          max='60'
          value={titleFontSize}
          onChange={(e) => onTitleFontSizeChange(Number(e.target.value))}
          className='w-full'
        />
      </div>
    </div>
  </div>
);

export default FontControls;
