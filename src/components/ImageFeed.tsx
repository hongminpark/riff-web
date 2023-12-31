import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Sticker, fetchStickers } from "../lib/supabase";
import ImageComponent from "./ImageComponent";

const ImageFeed: React.FC = () => {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    const newStickers = await fetchStickers(stickers.length, 32);
    setStickers((prevStickers) => [...prevStickers, ...newStickers]);
    if (newStickers.length === 0) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={stickers.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="grid grid-cols-2 gap-px bg-black sm:grid-cols-4 md:grid-cols-6">
        {stickers.map((sticker) => (
          <div
            className="relative border-b border-r border-white last:border-b-0 last:border-r-0"
            style={{ paddingBottom: "120%" }}
          >
            <div className="absolute left-1/4 top-1/4 flex h-1/2 w-1/2 items-center justify-center">
              <ImageComponent
                imageUrl={sticker.image_url}
                prompt={sticker.prompt}
              />
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ImageFeed;
