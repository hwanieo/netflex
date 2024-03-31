import { Link } from 'react-router-dom'
import { supabase } from '../../../../supabase'

export default function LogoutButton() {
  const handleClick = async () => {
    await supabase.auth.signOut()
  }

  return (
    <Link to={'/login'} onClick={handleClick} className='text-lg'>
      로그아웃
    </Link>
  )
}
