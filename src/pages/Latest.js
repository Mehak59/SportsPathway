import React, { useEffect, useState } from 'react';
import './latest.css';

const NewsSection = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const apiKey = '02b5eb252808641b434b28b2f63b9fbf';
    const searchTerms = [
      "football", "basketball", "badminton", "tennis", "table tennis", "hockey",
      "skating", "wrestling", "archery", "hammer throw", "taekwondo", "golf", 
      "shooting-sport", "swimming", "discus throw", "boxing", "javelin throw"
    ];
    const randomSearchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const apiUrl = `https://gnews.io/api/v4/search?q=${randomSearchTerm}&token=${apiKey}&lang=en&max=9`;

    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch news.");
        const data = await response.json();
        setNewsArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <section className="latest-home">
        <div className="headings">
          <h5>Latest</h5>
          <h1>Sports News</h1>
          <p>
            Stay up to date with the latest sports news across a variety of
            disciplines. From football to tennis, basketball to athletics, we've
            got you covered with the freshest updates, match results, and player
            highlights. Get real-time insights into the world of sports and never
            miss a moment of action.
          </p>
        </div>
      </section>

      <div className="latest-container">
        <div id="latest-news-details" className="latest-news-container">
          {newsArticles.length > 0 ? (
            newsArticles.map((article, index) => (
              <div key={index} className="latest-news-card">
                <div className="latest-card">
                  <img
                    src={article.image || "default-image.jpg"}
                    alt={article.title}
                    className="latest-card-img-top"
                  />
                  <div className="latest-card-body">
                    <h5 className="latest-card-title">{article.title}</h5>
                    <small className="latest-text-muted">
                      Published on: {new Date(article.publishedAt).toDateString()}
                    </small>
                    <p className="latest-card-text">{article.description || "No description available"}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No sports news found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;