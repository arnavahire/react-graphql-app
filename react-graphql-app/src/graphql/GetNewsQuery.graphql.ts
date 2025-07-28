import { gql } from "@apollo/client";

// Graphql Query
export const GET_NEWS_QUERY = gql`
  query GetNewsListQuery {
    NewsPage {
      total
      facets {
        Topic {
          Categories {
            Title {
              name
            }
          }
        }
      }
      items {
        Headline
        PostingDate
        ShortDescription
        FeaturedImage {
          Url
          Id
        }
        _id
        Url
      }
    }
  }
`;