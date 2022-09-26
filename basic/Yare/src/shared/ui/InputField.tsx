import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Input, { InputProps } from './Input';

interface InputFieldProps
  extends Omit<
    InputProps,
    'value' | 'onChangeText' | 'onBlur' | 'error' | 'errorHint'
  > {
  name: string;
  customOnChange?: (value: any) => {};
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  customOnChange,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          value={field.value}
          onChangeText={value => {
            field.onChange(value);
            if (customOnChange) customOnChange(value);
          }}
          onBlur={field.onBlur}
          error={Boolean(error?.message)}
          errorHint={error?.message}
          {...props}
        />
      )}
    />
  );
};

export default InputField;
