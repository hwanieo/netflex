import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'
import LoadingScreen from '../LoadingScreen'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (error || !user) navigate('/login')
      setIsLoading(false)
    }

    checkUser()
  }, [navigate])

  if (isLoading) return <LoadingScreen />

  return children
}
