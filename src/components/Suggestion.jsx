import React from 'react';
import Time from './Time';
import { Link } from 'react-router-dom';

function Suggestion({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className='relative mt-3 w-[400px]'>
          <div className='border flex'>
            <div>
              <img
                src={video?.thumbnails[0]?.url}
                className="w-[450px] h-[120px] rounded"
                alt=""
              />
              <p className="bg-black text-white absolute top-[94px] left-[120px] pl-2 pr-2 rounded">
                {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
              </p>
            </div>
            <div className='mt-4'>
              <h1 className='font-bold p-2 w-[200px]'>{video?.title.slice(0, 30)}
                <p className='font-thin'>{video?.author?.title.slice(0, 10)}</p>
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Suggestion;
