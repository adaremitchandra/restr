import { Text } from '@react-pdf/renderer'
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import compose from './styles/compose'

const EditableTextarea = ({
  className,
  placeholder,
  value,
  onChange,
  pdfMode,
  rows,
}) => {
  return (
    <>
      {pdfMode ? (
        <Text style={compose('inv-span ' + (className ? className : ''))}>{value}</Text>
      ) : (
        <TextareaAutosize
          minRows={rows || 1}
          className={'inv-input ' + (className ? className : '')}
          placeholder={placeholder || ''}
          value={value || ''}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      )}
    </>
  )
}

export default EditableTextarea
