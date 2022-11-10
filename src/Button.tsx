import React from 'react';
import { useState } from 'react';
import { InputLabel } from '@mui/material';

interface ButtonProps {
  id?: string;
  value: number;
  updateValue: (newValue: number) => void;
}

export const Button: React.FC<ButtonProps> = ({ id, value, updateValue }) => {
  const [hoverAt, setHoverAt] = useState<number | null>(null);

  return (
    <div id='#/properties/button' className='button'>
      <InputLabel shrink style={{ marginTop: '0.8em' }}>
        Button
      </InputLabel>
      <div style={{ cursor: 'pointer', fontSize: '18px' }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const fullStars = hoverAt ?? value;

          return (
            <span
              onMouseOver={() => setHoverAt(i + 1)}
              onMouseOut={() => setHoverAt(null)}
              onClick={() => updateValue(i + 1)}
              key={`${id}_${i}`}
            >
              {i < fullStars ? '\u2605' : '\u2606'}
            </span>
          );
        })}
      </div>
    </div>
  );
};
