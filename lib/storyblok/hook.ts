import { ISbResult, getStoryblokApi } from "@storyblok/react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TStoryBlokParams, TStoryBlokResponse } from "./types";

export const useGetStoryBlok = (params: TStoryBlokParams): UseQueryResult<ISbResult, unknown> =>
  useQuery({
    queryKey: ["get-story-blok-data", params],
    queryFn: async () => await getStoryblokApi().get("/cdn/stories/home", params),
  });
