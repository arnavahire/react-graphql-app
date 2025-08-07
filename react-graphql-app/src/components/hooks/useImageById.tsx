import { useQuery } from "@apollo/client";
import { GET_CONTENT_PANEL_IMAGE_QUERY } from "../../graphql/GetContentPanelQuery.graphql";
import { OptiGraphqlClient } from "../../shared/ApolloClients";

export const useImageById = (imageId: number | null, skip: boolean = false) => {
  const { data, loading, error } = useQuery(GET_CONTENT_PANEL_IMAGE_QUERY, {
    client: OptiGraphqlClient,
    variables: { imageId },
    skip: skip || !imageId, // Don't run if imageId is null or skip is true
  });

  const image = data?.ContentPanelBlock?.items?.[0]?.Image || null;

  return { image, loading, error };
};
