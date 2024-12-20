import React from 'react';

const TextControls = ({ name, title, onNameChange, onTitleChange }) => (
  <div>
    <h2 className='mb-4 text-xl font-semibold'>Text Content</h2>
    <input
      type='text'
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
      className='mb-2 w-full rounded border p-2'
      placeholder='Your Name'
    />
    <input
      type='text'
      value={title}
      onChange={(e) => onTitleChange(e.target.value)}
      className='w-full rounded border p-2'
      placeholder='Your Title'
    />
  </div>
);

export default TextControls;
