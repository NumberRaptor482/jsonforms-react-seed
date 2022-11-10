import { withJsonFormsControlProps } from '@jsonforms/react';
import { Button } from './Button';

interface ButtonControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
}

const ButtonControl = ({ data, handleChange, path }: ButtonControlProps) => (
  <Button
    value={data}
    updateValue={(newValue: number) => handleChange(path, newValue)}
  />
);

export default withJsonFormsControlProps(ButtonControl);
