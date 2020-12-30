import React from 'react'

export const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const [txt, setTxt] = React.useState('')
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={txt}
      onChange={(e) => setTxt(e.target.value)}
      className="mt-3"
    />
  )
}
