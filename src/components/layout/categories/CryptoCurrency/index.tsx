import React from 'react'
import TrendingAINews from '../AI/TrendingAINews'
import LastestNPopularNews from '../../../landing/LastestNPopularNews'
import Headline from '../../../landing/Headline'
import Banner from '../../../landing/Banner'
import Blogs from '../../../landing/Blogs'

const CryptocurrencyTab = () => {
  return (
    <div>
      <TrendingAINews
        trendingSrc="/images/crypto-cat.webp"
        trendingTitle="Solana defies overall market trend to hit new all-time high market cap"
      />

      <LastestNPopularNews />
      <Headline />
      <Banner />
      <Blogs />
    </div>
  )
}

export default CryptocurrencyTab
