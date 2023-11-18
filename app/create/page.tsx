'use client'

import Box from '@/components/Box'
import Button from '@/components/Button'
import { db } from '@/firebase'
import { setDoc, doc, addDoc, collection } from 'firebase/firestore'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState<any>('')
  const [description, setDescription] = useState<any>('')
  const [url, setURL] = useState<any>('')

  return (
    <>
      <form
        className='flex flex-col gap-y-4 w-full h-full items-center justify-start'
        onSubmit={async e => {
          e.preventDefault()
          try {
            if (title && description && url) {
              await addDoc(collection(db, 'bookmarks'), {
                title,
                description,
                url,
              })
            } else {
              alert('Please make sure you enter all fields correctly.')
            }
          } catch (e) {
            console.error(e)
            alert('Something went wrong')
          } finally {
            window.location.pathname = '/'
          }
        }}
      >
        <input
          onChange={e => setTitle(e.target.value)}
          placeholder='Title'
          className='w-[50%] px-4 py-1 md:py-2 rounded-lg bg-slate-800 outline-none focus:px-8 transition-all'
          required
        />
        <input
          onChange={e => setDescription(e.target.value)}
          placeholder='Description'
          className='w-[50%] px-4 py-1 md:py-2 rounded-lg bg-slate-800 outline-none focus:px-8 transition-all'
          required
        />
        <input
          onChange={e => setURL(e.target.value)}
          placeholder='URL'
          className='w-[50%] px-4 py-1 md:py-2 rounded-lg bg-slate-800 outline-none focus:px-8 transition-all'
          required
        />
        <button
          type='submit'
          className='bg-red-700/20 hover:bg-red-700/50 px-3 py-2 rounded-lg transition-colors'
        >
          Create Bookmark
        </button>
      </form>
    </>
  )
}

export default App
