import { gql } from "@apollo/client";

export const GET_ODP_SEGMENTS_QUERY = gql`
    query GetODPSegmentsQuery {
        audiences {
            edges {
                node {
                    name
                }
            }
        }
    }
`;