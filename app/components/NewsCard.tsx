import Image from 'next/image'
import React from 'react'
import NewsArticleInterface from '../types/NewsArticleInterface';

interface NewsCardProps {
  newsArticles: NewsArticleInterface[];
}

const NewsCard: React.FC<NewsCardProps> = ({newsArticles}) => {

  return (
    <>
      {newsArticles.map((article) => (
        <div
          key={article.publishedAt}
          className="
            card
            lg:card-side
            bg-base-100
            shadow-xl
            bordered
            max-w-screen-2xl
            m-auto
            mb-4"
          >
          <figure className='max-w-xs'>
            <Image src={article.urlToImage} width="0" layout="responsive" height="150" alt="Album"/>
            {/* <Image src={article.urlToImage} width="300" layout="intrinsic" height="150" alt="Album"/> */}
          </figure>
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