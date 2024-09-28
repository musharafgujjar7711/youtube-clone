import React from 'react';
import Sidebar from './Sidebar';
import Video from './Video';
import { useAuth } from './ContextApi';

function Home() {
  const { data } = useAuth();
  
  return (
    <div className='flex'>
      <Sidebar />
      <div className='h-[calc(100vh-6.66rem)] overflow-y-auto overflow-x-hidden'>
        <div className='p-2 ml-5 grid grid-cols-1 md:grid-cols-4  gap-9'>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <Video key={item.id} video={item?.video} />
            ))
          ) : (
            <p>No videos available.</p> // Optional: Message when no data is present
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
