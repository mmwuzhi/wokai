import { useState, useRef, forwardRef,useEffect, useImperativeHandle } from 'react'

export const LtInput = forwardRef((props, ref) => {
  const [filled, setFilled] = useState('')
  const [value, setValue] = useState('')
  const [checkedInputClassName, setCheckedInputClassName] = useState('')
  const [checkedLabelClassName, setCheckedLabelClassName] = useState('')
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => ({
    checkSubmit,
    focus,
    value,
    setValue,
    setFilled,
  }))
  useEffect(() => {
    !value ? setFilled('') : setFilled('filled')
  }, [value])
  const checkInput = () => {
    setCheckedInputClassName('')
    setCheckedLabelClassName('')
  }
  const checkSubmit = () => {
    if (value) {
      setCheckedInputClassName('')
      setCheckedLabelClassName('')
    } else {
      setCheckedInputClassName('border-red-500')
      setCheckedLabelClassName('text-red-500')
    }
  }
  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div className='mb-4 relative'>
      <input
        className={`${filled} input border border-gray-200 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-blue-200 focus:outline-none active:outline-none active:border-blue-200 ${checkedInputClassName}`}
        id={props.forID}
        type={props.type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        onKeyUp={checkInput}
        ref={inputRef}
        onKeyDown={props.onKeyDown}
      />
      <label
        htmlFor={props.forID}
        onClick={(e) => {
          e.target.previousElementSibling.focus()
        }}
        className={`label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text ${checkedLabelClassName}`}
      >
        {props.children}
      </label>
    </div>
  )
})

export const LightButton = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export const DarkButton = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`border border-blue-400 bg-blue-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-500 focus:outline-none focus:shadow-outline ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export const DeleteButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='inline-block p-3 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none'
    >
      <svg
        className='w-5 h-5 text-white'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  )
}
