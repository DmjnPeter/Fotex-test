import { useQuery } from "@tanstack/react-query";
import { getArtists } from "../services/api";

export const useArtists = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["artists", params],
    queryFn: () => getArtists(),
  });
};