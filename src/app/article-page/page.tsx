'use client'
import RelatedArticle from '@/components/article-page/RelatedArticle'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Authenticator from '@/components/article-page/Authenticator'
import ArticleContent from '@/components/article-page/ArticleContent'
import SpotifyPlayer from '@/components/article-page/SpotifyPlayer'
import LatestNewsWidget from '@/components/article-page/LatestNewsWidget'
import PopularNewsWidget from '@/components/article-page/PopularNewsWidget'
import type { TRequestObject } from '.'

const ArticlePage = () => {
  const [authReq, setAuthReq] = useState<TRequestObject | null>(null)
  const [isAuth, setIsAuth] = useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const getAuthReq = () => {
    fetch('https://wikiid.onrender.com/getAuthRequest')
      .then((res) => res.json())
      .then((res) => {
        setAuthReq(res?.data)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    // If there's no authReq or if the modal is closed, don't set up the interval.
    if (!authReq || !isOpen) return

    // biome-ignore lint/style/useConst: <explanation>
    let intervalSig: NodeJS.Timeout

    // Define the function that will check the auth status.
    const checkAuthStatus = async () => {
      if (!isOpen) {
        // If the modal is closed, clear the interval and exit the function.
        clearInterval(intervalSig)
        return
      }

      try {
        const response = await fetch(
          `https://wikiid.onrender.com/status?sessionId=${authReq.sessionId}`,
        )
        const { data } = await response.json() // Assuming the response is JSON.
        if (data?.isAuth) {
          // Set is authenticated status here.
          setIsAuth(data.isAuth)
          setIsOpen(false)
          clearInterval(intervalSig) // Clear the interval if authenticated.
        }
      } catch (err) {
        console.error(err)
      }
    }

    // Set up the interval.
    intervalSig = setInterval(checkAuthStatus, 2000)

    // Clear the interval when the component unmounts or authReq changes or the modal is closed.
    return () => clearInterval(intervalSig)
  }, [authReq, isOpen])

  return (
    <div className="relative">
      <div
        className={
          isAuth
            ? ''
            : 'absolute bg-white/10 backdrop-blur-lg top-0 bottom-0 right-0 left-0 z-10 container flex justify-center'
        }
      >
        {!isAuth && (
          <Authenticator
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            authReq={authReq}
            getAuthReq={getAuthReq}
          />
        )}
      </div>
      <div className="container flex gap-10 py-16">
        <div className="flex-1">
          <div className="flex gap-2">
            <span className="w-10 h-10 rounded-full bg-white/20" />
            <div className="text-sm flex flex-col gap-1">
              <span>ALiu Urek</span>
              <span>
                35 min ago | Published 12:26 PM EDT, Thu March 21, 2024
              </span>
            </div>
          </div>
          <h2 className="font-semibold text-6xl mt-2">
            Exclusive Interview with the CEO of IQ.wiki
          </h2>
          <div className="relative w-full mt-8 h-[516px]">
            <Image src="/images/banner.webp" alt="banner" fill />
          </div>
          <ArticleContent />
        </div>
        <div className="flex flex-col gap-24 flex-1 max-w-[369px]">
          <SpotifyPlayer />
          <LatestNewsWidget />
          <PopularNewsWidget />
        </div>
      </div>
      <div className="container">
        <RelatedArticle />
      </div>
    </div>
  )
}

export default ArticlePage
