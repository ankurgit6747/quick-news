'use client';

import { Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Selection from './components/Selection';
import NewsArticleInterface from './types/NewsArticleInterface';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('in');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const [newsArticles, setNewsArticles] = useState<NewsArticleInterface[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=3bffa1c86c2a42458e6de0332c635c6f`);
      const data = await response.json()
      const filterArticles = data.articles.filter((item: NewsArticleInterface) => item.urlToImage !== null && item.author !== null && item.title !== null && item.description !== null && item.publishedAt !== null);
      setNewsArticles(filterArticles);
    }

    fetchNews();
  }, [selectedCountry, selectedLanguage])


  return (
    <main>
      <Header />
      <Selection setSelectedCountry={setSelectedCountry} setSelectedLanguage={setSelectedLanguage} />
      <Suspense fallback={<Loading />}>
        <NewsCard newsArticles={newsArticles} />
      </Suspense>
    </main>
  )
}
