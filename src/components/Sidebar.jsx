import React from 'react';
import { BiHistory } from 'react-icons/bi';
import { BsMusicPlayer } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { GrChannel } from 'react-icons/gr';
import { HiHome } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { LiaVenusDoubleSolid } from 'react-icons/lia';
import { MdLibraryAdd, MdOutlinePlaylistPlay, MdOutlineVideoLibrary, MdSports } from 'react-icons/md';
import { SiTrendmicro, SiYoutubegaming, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio } from 'react-icons/si';
import { TbFileDescription, TbNewSection } from 'react-icons/tb';
import { useUtils } from './UtilsContext';

function Sidebar() {
    const { setMobilescreen, mobilescreen } = useUtils();
    
    const sidebarItems = [
        { id: 1, name: "Home", icon: <HiHome size={20} />, section: "Home" },
        { id: 2, name: "Shorts", icon: <SiYoutubeshorts size={20} />, section: "Home" },
        { id: 3, name: "Description", icon: <TbFileDescription size={20} />, section: "Home" },
        { id: 4, name: "Your Channel", icon: <GrChannel size={20} />, section: "You" },
        { id: 5, name: "Library", icon: <MdLibraryAdd size={20} />, section: "You" },
        { id: 6, name: "History", icon: <BiHistory size={20} />, section: "You" },
        { id: 7, name: "Your Videos", icon: <MdOutlineVideoLibrary size={20} />, section: "You" },
        { id: 8, name: "Playlist", icon: <MdOutlinePlaylistPlay size={20} />, section: "You" },
        { id: 9, name: "Trending", icon: <SiTrendmicro size={20} />, section: "Explore" },
        { id: 10, name: "Live", icon: <LiaVenusDoubleSolid size={20} />, section: "Explore" },
        { id: 11, name: "Music", icon: <BsMusicPlayer size={20} />, section: "Explore" },
        { id: 12, name: "Sports", icon: <MdSports size={20} />, section: "Explore" },
        { id: 13, name: "News", icon: <TbNewSection size={20} />, section: "Explore" },
        { id: 14, name: "Gaming", icon: <SiYoutubegaming size={20} />, section: "Explore" },
        { id: 15, name: "YouTube Premium", icon: <FaYoutube size={20} />, section: "More" },
        { id: 16, name: "YouTube Studio", icon: <SiYoutubestudio size={20} />, section: "More" },
        { id: 17, name: "YouTube Music", icon: <SiYoutubemusic size={20} />, section: "More" },
        { id: 18, name: "YouTube Kids", icon: <SiYoutubekids size={20} />, section: "More" },
    ];

    const Mobiledelay = () => (
        <div className='fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30' onClick={() => setMobilescreen(false)}></div>
    );

    return (
        <>
            <div className={`${
                mobilescreen 
                ? "fixed top-0 bottom-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%]"
                : "hidden w-[240px] h-[calc(100vh-6.66rem)] xl:block"
            } xl:static px-2 lg:px-0 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
                {["Home", "You", "Explore", "More"].map(section => (
                    <div key={section}>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold capitalize ml-5'>{section}</h1>
                            {section !== "Home" && <span><IoIosArrowForward /></span>}
                        </div>
                        {sidebarItems
                            .filter(item => item.section === section)
                            .map(item => (
                                <div key={item.id} className='flex items-center cursor-pointer gap-4 p-2 rounded-full hover:bg-gray-400 duration-200'>
                                    {item.icon}
                                    <h1 className='font-bold capitalize'>{item.name}</h1>
                                </div>
                            ))}
                        <hr />
                    </div>
                ))}
            </div>
            {mobilescreen && <Mobiledelay />}
        </>
    );
}

export default Sidebar;
