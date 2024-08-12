import React from 'react'
import { PhoneInput } from "react-international-phone";
import TooltipContent from '../Tooltip/Tooltip';
const PhoneNumber = ({
  name,
  defaultCountry,
  value,
  onChange,
  style,
  tooltip,
  tooltipmessage,
  inputClassName,
  lableid,
  tooltipclass
}) => {


  return (
    <div className='w-full'>
      <label id={lableid} className="text-lg text-pretty px-1 font-semibold">PHONE NUMBER</label>
      <div className='w-full flex gap-3 items-center'>
        <PhoneInput
          name={`${name}`}
          defaultCountry={`${defaultCountry}`}
          value={value}
          onChange={onChange}
          style={style}
          inputClassName={inputClassName}
        />
        {
          tooltip ?
            (<div className={` ${tooltipclass} `} >
              <TooltipContent message={tooltipmessage} />
            </div>) :
            <>
            </>
        }
      </div>
    </div>
  )
}

export default PhoneNumber

