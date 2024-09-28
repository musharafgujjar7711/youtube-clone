import React, { useEffect, useState } from 'react';
import { BiDislike, BiDownload, BiLike, BiShare } from 'react-icons/bi';
import Suggestion from './Suggestion';
import { useParams } from 'react-router-dom';
import { FetchDataFromApi } from './Api';
import ReactPlayer from 'react-player';
import NumberAbbreviate from 'number-abbreviate';

function Playvideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState([]); // Initialize as an empty array
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails(id);
    fetchRelatedVideos(id);
  }, [id]);

  const fetchVideoDetails = () => {
    FetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  const fetchRelatedVideos = () => {
    FetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  };

  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='flex flex-col ml-0 md:ml-14 p-6 w-full md:w-[900px]'>
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="570px"
            controls
            style={{ background: "#000" }}
            playing={true}
          />
        </div>
        <h1 className="font-bold capitalize w-full ml-0 md:ml-7">{video?.title}</h1>
        <div className='capitalize w-full ml-0 md:ml-7 mt-5'>
          <div className='mid flex items-center justify-between md:w-[800px] w-full'>
            <div className='subcrip'>
              <ul className='flex items-center gap-3'>
                <img src={video?.author?.avatar[0]?.url} className='w-10 h-10 rounded-full' alt="" />
                <li className='flex flex-col'>
                  <p className='font-thin'>{video?.author?.title.slice(0, 10)}..</p>
                  <p>{`${NumberAbbreviate(
                    !video?.stats?.subscribers ? "300k subscribers" : video?.stats?.subscribers
                  )}`}</p>
                </li>
                <li className='bg-black p-2 rounded-full text-white'>Subscribe</li>
              </ul>
            </div>
            <div className='likesharedown md:flex items-center gap-3 hidden '>
              <span className='flex items-center bg-slate-300 p-2 rounded gap-3'>
                <p className='flex items-center gap-2'>
                  <BiLike size={30} className=' hidden md:block' />
                  <h1 className=' hidden md:block'>4.k likes</h1>
                </p>
                <p className='border-l-2 border-black'>
                  <BiDislike size={30}  className=' hidden md:block'/>
                </p>
              </span>
              <div className='download flex items-center gap-2 bg-slate-300 p-2 rounded'>
                <BiShare  className=' hidden md:block'/>
                <p className='hidden md:block'>Share</p>
              </div>
              <div className='download flex items-center gap-2 bg-slate-300 p-2 rounded '>
                <BiDownload className=' hidden md:block'/>
                <p className=' hidden md:block'>Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[calc(100vh-4.44rem)] overflow-y-auto overflow-x-hidden w-full md:w-auto'>
        <div className='suggestion mt-10 mr-0 md:mr-32'> 
          {
            relatedVideo?.contents?.map((item) => {
              if (item.type !== "video") return null; 
              return <Suggestion key={item.id} video={item.video} />;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Playvideo;

