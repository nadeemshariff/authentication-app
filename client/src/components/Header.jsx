import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-400 bg-fixed'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
      <h1 className='font-bold font-sans'>Auth App</h1>
      </Link>
      <ul className='flex gap-4 '>
      <Link to='/'>
        <li className='hover:text-white hover:shadow-inner'>Home</li>
      </Link>
      <Link to='/About'>
        <li className='hover:text-red-500 '>About</li>
      </Link>
      <Link to='/Sign-in'>
        <li className='hover:text-red-500 '>SignIn</li>
      </Link>
      </ul>
      </div>
    </div>
  )
}
