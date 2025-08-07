import { gql } from "@apollo/client";

export const GET_CONTENT_PANEL_IMAGE_QUERY = gql`
    query GetContentPanelImageQuery($imageId: Int!) {
        ContentPanelBlock(where: {Image: {Id: {eq: $imageId}}}){
            items{
                Image {
                    Url
                    Id
                }
            }
        }
    }
`;