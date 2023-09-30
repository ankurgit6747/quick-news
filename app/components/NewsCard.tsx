import Image from 'next/image'
import React from 'react'
import NewsArticleInterface from '../types/NewsArticleInterface';

interface NewsCardProps {
  newsArticles: NewsArticleInterface[];
}

const NewsCard: React.FC<NewsArticleInterface> = ({newsArticles}) => {

  return (
    <>
      {newsArticles.map((article, index) => (
        <div key={index} className="card lg:card-side bg-base-100 shadow-xl bordered m-4">
          <figure><Image src={article.urlToImage} width="300" height="180" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p>{article.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read full article</button>
            </div>
          </div>
        </div>
      ))}
     
    </>
   
  )
}

export default NewsCard