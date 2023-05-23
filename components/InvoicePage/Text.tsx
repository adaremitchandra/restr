import { Text as PdfText } from '@react-pdf/renderer'
import React from 'react'
import compose from './styles/compose'


const Text = ({ className, pdfMode, children }) => {
  return (
    <>
      {pdfMode ? (
        <PdfText style={compose('inv-span ' + (className ? className : ''))}>{children}</PdfText>
      ) : (
        <span className={'inv-span ' + (className ? className : '')}>{children}</span>
      )}
    </>
  )
}

export default Text
