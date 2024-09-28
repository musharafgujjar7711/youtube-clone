import React from 'react';
import { MdVerified } from 'react-icons/md';
import Time from './Time';
import NumberAbbreviate from 'number-abbreviate';
import { Link } from 'react-router-dom';

function Searchcard({ video }) {
    console.log(video); // Debugging line to check video data

    return (
        <div className='border w-full mt-4 p-5 ml-9'>
            <Link to={`/video/${video?.videoId}`}>
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                    <div className='flex-shrink-0 relative'>
                        <img
                            src={
                                video?.thumbnails[0]?.url || 
                                "https://www.veeforu.com/wp-content/uploads/2023/02/Orange-color-youtube-thumbnail-background-image-free-download.jpg"
                            }
                            className='w-[570px] h-[230px] rounded-md'
                            alt=""
                        />
                        <p className="bg-black text-white absolute bottom-2 left-2 pl-2 pr-2 rounded">
                            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold'>{video?.title}</h1>
                        <p className='flex items-center gap-1'>
                            {`${NumberAbbreviate(
                                !video?.stats?.views ? "300k views" : video?.stats?.views
                            )}`} views
                            <span className='mx-1'>.</span>
                            <span>{video?.publishedTimeText}</span>
                        </p>
                        <ul className='flex items-center gap-3'>
                            <img src={video?.author?.avatar[0]?.url} className='w-10 h-10 rounded-full' alt="" />
                            <li className='capitalize'>{video?.author?.title.slice(0, 10)}</li>
                            <li><MdVerified /></li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Searchcard;
