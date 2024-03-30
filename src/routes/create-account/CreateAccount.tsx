import { ChangeEvent, FormEvent, useState } from 'react'
import { supabase } from '../../supabase'

export default function CreateAccount() {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: '',
      password: '',
    }
  )

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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      if (error) console.log('error message:', error.message)
      console.log(data)
    } catch (e) {
      console.error(e)
    } finally {
      //
    }
  }

  return (
    <div className='w-80 m-auto mt-[25%]'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
        <input
          onChange={handleChangeEmail}
          name='email'
          type='email'
          className='rounded outline-none px-2 py-1 text-black'
        />
        <input
          onChange={handleChangePassword}
          name='password'
          type='password'
          className='rounded outline-none px-2 py-1 text-black'
        />
        <button type='submit' className='bg-red-500 rounded px-2 py-1'>
          회원가입
        </button>
      </form>
    </div>
  )
}
