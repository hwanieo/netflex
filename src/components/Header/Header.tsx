import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../supabase'
import AuthButtons from './components/AuthButtons'
import LogoutButton from './components/LogoutButton'

export default function Header() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser()
        if (error) throw error
        setUser(user)
      } catch (error) {
        console.error('Error fetching user: ', error)
      } finally {
        //
      }
    }

    fetchUser()
  }, [])

  return (
    <div className='flex justify-between bg-black px-20 py-4 shadow-lg'>
      <Link to='/' className='uppercase text-2xl text-red-500'>
        Netflex
      </Link>

      {user ? <LogoutButton /> : <AuthButtons />}
    </div>
  )
}
