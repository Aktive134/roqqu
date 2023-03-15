import './App.css'
import {useState} from 'react'
import Pageone from './components/Pageone'

function App() {

const [page, setPage] = useState(1)

  return (<div className="bg-[#1C2127] h-[100vh] grid place-content-center ">
<div className=" w-[488px] h-[60vh]">

<img src="https://app.roqqu.com/static/media/roqqu-white-logo.7ccb7284c0912651997f111ac71a917c.svg" alt="" />


<p className='mt-[40px] text-white mb-[10px]'>Step{page}/5</p>

<div className='flex items-center '>
  <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
  <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
  <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
  <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
  <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
</div>

<div>
  <Pageone/>
</div>
</div>
  </div>)
}

export default App
