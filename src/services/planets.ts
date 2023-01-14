import { useQuery } from "@tanstack/react-query";

const usePlanet = ({ planetId }: { planetId: number }) =>
  useQuery({
    queryKey: ["planets", "detail", planetId],
    queryFn: async ({ signal }) => {
      const response = await fetch(
        `https://swapi.dev/api/planets/${planetId}/`,
        { signal }
      );

      return response.json() as unknown as {
        name: string;
      };
    },
  });

export { usePlanet };
