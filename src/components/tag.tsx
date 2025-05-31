import React from 'react'

const Tag = (props: { text: string, classname?: string }) => {
  return (
    <div className={`absolute px-3 py-1 bg-[#FF4400] rounded-[5px] text-center flex justify-center items-center ${props.classname}`}>
      <span className="font-jetbrains font-bold text-base tracking-tighter uppercase text-white whitespace-nowrap">
        {props.text}
      </span>
    </div>
  )
}

export default Tag
