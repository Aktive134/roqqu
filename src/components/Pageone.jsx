import React from 'react'
import Button from './Button'

const Pageone = () => {
  return (
    <div className='text-white'>
        <p className='font-black text-[28px] mt-[30px]'>Hey 👋🏽<br /> Welcome to Roqqu </p>
        <p className='font-normal text-[1rem] mt-[4px] text-[#A7B1BC]'>Let’s get to know you!</p>

        <p>We’ll need you to choose a really cool name that other users can find you with, choose something cool like superman, or batman 😜</p>


        <div>
            <form >
                <p className='text-[#A7B1BC] font-normal mt-[20px]'>Username</p>
                <input type="text" className='w-full bg-transparent border rounded-md h-[40px] outline-none ' />

<div className='flex gap-[10px] mt-[30px] items-center'><input type="checkbox" name="" id=""  className='bg-transparent border rounded-md h-[40px] outline-none'/> <p>

I agree to Roqqu's Terms & conditions and privacy policy
</p>
</div>

<Button name='Continue'/>
            </form>
        </div>
    </div>
  )
}

export default Pageone