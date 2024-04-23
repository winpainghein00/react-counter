import React from 'react'
import DisplayText from './DisplayText'
import PlusButton from './PlusButton'
import MinusButton from './MinusButton'
import ResetButton from './ResetButton'

const ContainerBox = (props) => {
  return (
    <div className='p-5 border-2 rounded-md w-[300px] mx-auto mt-20 justify-center items-center flex flex-col gap-6 bg-gray-600'>
    <div className='bg-gray-300 px-5 py-2 rounded-md w-full'>
    <DisplayText state={props.state}/>
    </div>
    <div className='flex w-full justify-center gap-5'>
    <PlusButton addBtn= {props.addBtn}/>
    <MinusButton subBtn = {props.subBtn} state ={props.state}/>
    <ResetButton resetBtn = {props.resetBtn} />
    </div>
    </div>
  )
}

export default ContainerBox