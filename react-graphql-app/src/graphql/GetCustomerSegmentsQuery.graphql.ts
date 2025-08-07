import { gql } from "@apollo/client";

export const GET_CUSTOMER_SEGMENTS_QUERY = gql`
    query GetCustomerSegmentsQuery($userName: String!, $userSegments: [String!]) {
        customer(olb_username_id: $userName) {
            audiences(subset: $userSegments) {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    }
`;