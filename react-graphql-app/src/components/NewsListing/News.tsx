import React from "react";
import { useQuery } from "@apollo/client";
import { GET_NEWS_QUERY } from "../../graphql/GetNewsQuery.graphql.ts";
import "./News.scss";
import { OptiGraphqlClient } from "../../shared/ApolloClients.tsx";
import { Header } from "../Header/Header.tsx";

export const News: React.FC = () => {
  const { data, loading, error } = useQuery(GET_NEWS_QUERY, {
    client: OptiGraphqlClient,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  // Optional: Add a check for data existence and structure if you prefer
  if (!data || !data.NewsPage || !data.NewsPage.items) {
    return <p>No news data available.</p>;
  }

  return (
    <div className="news-page">
      <Header />
      <h1>Latest News</h1>
      {data.NewsPage.items.map(
        (
          newsItem: any // Using 'any' as a workaround without an interface. With codegen and interface this will change
        ) => (
          <article className="news-card" key={newsItem._id}>
            <div className="card-image">
              {newsItem?.FeaturedImage?.Url != null ? (
                <img
                  src={
                    "https://www.communityamerica.com" +
                    `${newsItem?.FeaturedImage?.Url}`
                  }
                  alt="Description of the news image"
                />
              ) : (
                ""
              )}
            </div>
            <div className="card-content">
              <h2>{newsItem.Headline}</h2>
              <p>{newsItem.ShortDescription}</p>
              {newsItem.facets &&
                newsItem.facets.Topic &&
                newsItem.facets.Topic.Categories &&
                newsItem.facets.Topic.Categories.length > 0 && (
                  <p>Topic: {newsItem.facets.Topic.Categories[0].Title.name}</p>
                )}
              <a href={newsItem.Url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </article>
        )
      )}
    </div>
  );
};
