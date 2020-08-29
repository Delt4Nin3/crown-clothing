import React from 'react';
import './form-input.styles.scss'

interface FormInputProps {
  handleChange?: any
  label?: string
  name?: string
  required?: boolean
  type: string
  value: string
}

class FormInput extends React.Component<FormInputProps, any> {
  render() {
    const {handleChange, label, ...otherProps} = this.props;
    return <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  }
}

export default FormInput;
