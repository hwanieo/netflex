import { Link } from 'react-router-dom'
import LogoutButton from './components/LogoutButton'

export default function Header() {
  return (
    <div className='flex justify-between bg-black px-20 py-4 shadow-lg'>
      <Link to='/' className='uppercase text-3xl text-red-600'>
        Netflex
      </Link>
      <LogoutButton />
    </div>
  )
}
