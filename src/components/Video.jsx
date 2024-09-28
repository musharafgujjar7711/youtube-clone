import React from 'react';
import { Link } from 'react-router-dom';
import Time from './Time';
import NumberAbbreviate from 'number-abbreviate';

function Video({ video }) {
  return (
    <div className="relative w-64">
      <Link to={`/video/${video?.videoId}`}>
        <div>
          <img
            src={
              !video?.thumbnails[0]?.url
                ? "https://www.veeforu.com/wp-content/uploads/2023/02/Orange-color-youtube-thumbnail-background-image-free-download.jpg"
                : video?.thumbnails[0]?.url
            }
            alt=""
          />
          <p className="bg-black text-white absolute top-[118px] left-[170px] pl-2 pr-2 rounded">
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <img src={video?.author?.avatar[0]?.url} className='w-10 h-10 rounded-full' alt="" />
          <h1 className="font-bold capitalize">{video?.title.slice(0, 40)}</h1>
        </div>
        <div className='mt-2'>
          <p className='font-thin ml-14'>{video?.author?.title.slice(0, 10)}</p>
          <div className='mt-2 flex items-center'>
            <p className='font-thin ml-14'>{`${NumberAbbreviate(
              !video?.stats?.views ? "300k views" : video?.stats?.views
            )}`} views</p>
            <p>{video?.publishedTimeText}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
