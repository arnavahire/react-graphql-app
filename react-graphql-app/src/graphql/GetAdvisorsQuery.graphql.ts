import { gql } from "@apollo/client";

// Graphql Query
export const GET_ADVISORS_QUERY = gql`
  query GetAdvisorsListQuery {
    AdvisorPage {
        items {
            _id
            FirstName
            LastName
            Picture {
                Url
            }
            Certifications
            Url
            ContactEmail
            PrimaryLocation {
                Expanded {
                    ... on LocationPage {
                        Street
                        City
                        Zip
                        State
                        Url
                        LocationName
                    }
                }
            }
        }
    }
  }
`;