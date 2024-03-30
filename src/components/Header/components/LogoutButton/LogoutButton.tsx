import { supabase } from '../../../../supabase'

export default function LogoutButton() {
  const handleClick = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error(error)
    } finally {
      //
    }
  }
  return (
    <button onClick={handleClick} className='text-lg'>
      로그아웃
    </button>
  )
}
