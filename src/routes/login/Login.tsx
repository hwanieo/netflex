import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Label from '../../components/Label'
import { supabase } from '../../supabase'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<{
    email: string
    password: string
  }>({
    email: '',
    password: '',
  })

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.email.trim() || !formData.password.trim()) return

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) {
        console.log(error.message)
        return
      }
      console.log(data)
      navigate('/')
    } catch (e) {
      console.error(e)
    } finally {
      //
    }
  }

  return (
    <div className='w-80 m-auto mt-[25%]'>
      <Label>로그인</Label>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
        <input
          onChange={handleChangeEmail}
          name='email'
          type='email'
          placeholder='Email'
          className='rounded outline-none px-2 py-1 text-black'
        />
        <input
          onChange={handleChangePassword}
          name='password'
          type='password'
          placeholder='Password'
          className='rounded outline-none px-2 py-1 text-black'
        />
        <button type='submit' className='bg-red-500 rounded px-2 py-1'>
          로그인
        </button>
      </form>
    </div>
  )
}
