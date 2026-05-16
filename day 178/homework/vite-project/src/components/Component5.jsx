import { useContext } from 'react'
import { ColorContext } from '../App';
const Component5 = () => {
    const mode = useContext(ColorContext);
  return (
    <div className={`${mode === 'dark' ? 'text-white' : 'text-black'} font-bold text-2xl`}>Component5</div>
  )
}

export default Component5