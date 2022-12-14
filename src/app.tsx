/* eslint-disable react/no-multi-comp */
import { useGifts } from "./services/gifts";
import { useState, useTransition } from "react";

const App = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  return (
    <main className="pt-20">
      <input
        name="search"
        value={query}
        onChange={(e) => {
          startTransition(() => {
            setQuery(e.currentTarget.value);
          });
        }}
        type="search"
        placeholder="Search for gifs..."
        className="block mx-auto w-56"
      />
      <GiftList isPending={isPending} query={query} />
    </main>
  );
};

const GiftList = ({
  isPending,
  query,
}: {
  isPending: boolean;
  query: string;
}) => {
  const giftsQuery = useGifts({ query });

  if (isPending || giftsQuery.status === "loading") {
    return <div>Loading...</div>;
  }

  if (giftsQuery.status === "error") {
    return <div>Error</div>;
  }

  return (
    <ul className="pt-10 grid grid-cols-3 gap-2 max-w-2xl mx-auto">
      {giftsQuery.data.data.map((gift) => (
        <img
          className="aspect-video w-full h-full object-cover"
          key={gift.id}
          src={gift.images.original.url}
          alt="todo"
        />
      ))}
    </ul>
  );
};

export { App };
