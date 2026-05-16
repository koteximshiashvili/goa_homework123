import React, { useState, useRef, useContext, useEffect } from 'react';
import { Theme } from '../App';
import ToggleSwitch from './ToggleSwitch';
const tools = [
  {
    logo: "/assets/images/logo-devlens.svg",
    title: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    active: false
  },
  {
    logo: "/assets/images/logo-style-spy.svg",
    title: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    active: false
  },
  {
    logo: "/assets/images/logo-speed-boost.svg",
    title: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    active: false
  },
  {
    logo: "/assets/images/logo-json-wizard.svg",
    title: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    active: false
  },
  {
    logo: "/assets/images/logo-tab-master-pro.svg",
    title: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    active: false
  },
  {
    logo: "/assets/images/logo-viewport-buddy.svg",
    title: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    active: false
  },
  {
    logo: "/assets/images/logo-markup-notes.svg",
    title: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    active: false
  },
  {
    logo: "/assets/images/logo-grid-guides.svg",
    title: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    active: false
  },
  {
    logo: "/assets/images/logo-palette-picker.svg",
    title: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    active: false
  },
  {
    logo: "/assets/images/logo-link-checker.svg",
    title: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    active: false
  },
  {
    logo: "/assets/images/logo-dom-snapshot.svg",
    title: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    active: false
  },
  {
    logo: "/assets/images/logo-console-plus.svg",
    title: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    active: false
  }
];

const Extensions = () => {
  const theme = useContext(Theme);
  const orig = useRef(tools);
  const [extensions, setExtensions] = useState(tools);
  useEffect(() => {
    document.body.style.background = theme === 'dark' ? 'linear-gradient(180deg, #040918 0%, #091540 100%)' : '#ebf4fb'
  }, [theme])
  function filterAll() {
    setExtensions(orig.current);
  }

  function filterActive() {
    setExtensions(orig.current.filter(i => i.active));
  }

  function filterInactive() {
    setExtensions(orig.current.filter(i => !i.active));
  }

  function remove(index) {
    orig.current = orig.current.filter((_, ind) => index !== ind);
    setExtensions(orig.current);
  }

  function handleActive(index) {
    orig.current = orig.current.map((i, ind) =>
      ind === index ? { ...i, active: !i.active } : i
    );
    setExtensions(orig.current);
  }

  return (
    <div className='flex flex-col space-y-10 justify-center'>
      <div className='flex w-full justify-between'>
        <p className={theme === 'dark' ? 'text-xl font-bold text-white' : 'text-xl font-bold text-[#414a6d]'}>Extensions List</p>
        <div className='flex space-x-2'>
          <button onClick={filterAll} className={theme === 'dark' ? 'px-4 py-2 rounded-2xl text-white font-bold bg-[#e96057] hover:bg-[#fafefe] hover:text-black' : 'px-4 py-2 rounded-2xl font-bold bg-[#fafefe] hover:bg-[#e96057] hover:text-white'}>All</button>
          <button onClick={filterActive} className={theme === 'dark' ? 'px-4 py-2 rounded-2xl text-white font-bold bg-[#e96057] hover:bg-[#fafefe] hover:text-black' : 'px-4 py-2 rounded-2xl font-bold bg-[#fafefe] hover:bg-[#e96057] hover:text-white'}>Active</button>
          <button onClick={filterInactive} className={theme === 'dark' ? 'px-4 py-2 rounded-2xl text-white font-bold bg-[#e96057] hover:bg-[#fafefe] hover:text-black' : 'px-4 py-2 rounded-2xl font-bold bg-[#fafefe] hover:bg-[#e96057] hover:text-white'}>Inactive</button>
        </div>
      </div>
      <div className='flex flex-wrap gap-4'>
        {extensions.map((i, index) => (
          <div key={index} className={theme === 'dark' ? 'flex flex-col space-y-2 w-[30%] justify-between rounded-2xl bg-[#1f2535] border border-[#242a3d] p-5' : 'flex flex-col space-y-2 w-[30%] rounded-2xl bg-[#fcfdff] justify-between border border-[#ecf2fa] p-5'}>
            <div className='flex space-x-2 items-start'>
              <img style={{position: "relative", top: 0, objectFit: 'contain', aspectRatio: '1 / 1'}} src={i.logo} alt="logo" width={100} height={100}/>
            <div>
              <h1 className={theme === 'dark' ? 'text-white font-bold text-[18px]' : 'text-[#565c7c] font-bold text-[18px]'}>{i.title}</h1>
            <p className={theme === 'dark' ? 'text-[#60636b] font-bold text-[14px]' : 'text-[#b3b4ba] font-bold text-[14px]'}>{i.description}</p>
            </div>
            </div>
            <div className='flex justify-between items-center'>
              <button onClick={() => remove(index)} className={theme === 'dark' ? 'bg-[transparent] text-white font-bold px-4 py-2 border border-gray-500 rounded-2xl' : 'bg-[transparent] font-bold px-4 py-2 border border-gray-500 rounded-2xl'}>Remove</button>
              <div className='flex items-center space-x-2'>
                <ToggleSwitch isOn={i.active} handleToggle={() => handleActive(index)} theme={theme} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extensions;
