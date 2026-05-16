import React, { useState, useRef } from 'react'
const tools = [
  {
    title: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    active: false
  },
  {
    title: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    active: false
  },
  {
    title: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    active: false
  },
  {
    title: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    active: false
  },
  {
    title: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    active: false
  },
  {
    title: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    active: false
  },
  {
    title: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    active: false
  },
  {
    title: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    active: false
  },
  {
    title: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    active: false
  },
  {
    title: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    active: false
  },
  {
    title: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    active: false
  },
  {
    title: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    active: false
  }
]
const Extensions = () => {
    const orig = useRef(tools)
    const [extentions, setExtentions] = useState(tools);
    function filterAll(){
        setExtentions(orig.current);
    }
    function filterActive(){
        setExtentions(orig.current.filter(i => i.active));
    }
    function filterInActive(){
        setExtentions(orig.current.filter(i => !i.active));
    }
    function remove(index){
        orig.current = orig.current.filter((_, ind) => index !== ind);
        setExtentions(orig.current.filter((_, ind) => index !== ind));
    }
    function handleActive(index){
        setExtentions(orig.current.map((i, ind) => ind === index ? {...i, active: !i.active} : i))
    }
  return (
    <div className='flex flex-col space-y-10 justify-center'>
        <div className='flex w-full justify-between'>
            <p className='text-xl font-bold text-white'>Extensions List</p>
            <div className='flex space-x-2'>
                <button onClick={filterAll} className='w-10 rounded-2xl text-white font-bold bg-[#e96057]'>All</button>
                <button onClick={filterActive} className='w-15 rounded-2xl text-white font-bold bg-[#e96057]'>Active</button>
                <button onClick={filterInActive} className='w-20 rounded-2xl text-white font-bold bg-[#e96057]'>Inactive</button>
            </div>
        </div>
        <div className='flex flex-wrap space-y-4 space-x-4'>
            {extentions.map((i, index) => (
                <div key={index} className='flex flex-col space-y-2 w-[30%] rounded-2xl bg-[#1f2535] border border-[#242a3d] p-5'>
                    <h1 className='text-white font-bold text-[18px]'>{i.title}</h1>
                    <p className='text-[#60636b] font-bold text-[14px]'>{i.description}</p>
                    <div className='flex space-x-20'>
                        <button onClick={() => remove(index)} className='bg-[#1f2535] text-white font-bold w-20 border border-gray-500 rounded-2xl'>Remove</button>
                        <div>
                            <label className='text-white'>Active:</label><input type="checkbox" onChange={() => handleActive(index)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Extensions