'use client'

import Box from '@/components/Box'
import Button from '@/components/Button'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const App = () => {
  const [bookmarks, setBookmarks] = useState<any>([])
  const [q, setQ] = useState<any>('')

  useEffect(() => {
    const setBookmarkData = async () => {
      // Assuming "bookmarks" is the name of your collection
      const bookmarksCollection = collection(db, 'bookmarks')

      try {
        const querySnapshot = await getDocs(bookmarksCollection)
        const bookmarkData = querySnapshot.docs.map(doc => doc.data())
        setBookmarks(bookmarkData)
      } catch (error) {
        console.error('Error getting documents: ', error)
      }
    }

    setBookmarkData()
  }, []) // Make sure to pass an empty dependency array to useEffect to run it only once

  return (
    <>
      <input
        onChange={e => setQ(e.target.value)}
        placeholder='Search bookmark'
        className='w-full px-4 py-1 md:py-2 rounded-lg bg-slate-800 outline-none focus:px-8 transition-all'
      />
      <Button />
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full'>
        {bookmarks.length > 0
          ? bookmarks.map((bookmark: { [key: string]: string }, index: number) =>
              bookmark.title.toLowerCase().includes(q.toLowerCase()) ? (
                <Box
                  key={index}
                  title={bookmark.title}
                  description={bookmark.description}
                  id={bookmark.url}
                />
              ) : (
                ''
              ),
            )
          : 'Loading...'}
      </div>
    </>
  )
}

export default App
