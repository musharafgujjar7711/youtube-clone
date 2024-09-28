import React, { useEffect, useState } from 'react';
import { BiSearch, BiVideoPlus } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { IoIosNotifications } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useUtils } from './UtilsContext';

function Navbar() {
    const { sidebar, setSidebar, setMobilescreen, mobilescreen } = useUtils();

    useEffect(() => {
        console.log(sidebar);
    }, [sidebar]);

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const searchHandler = (event) => {
        if (event?.key === "Enter" || event?.key === "searchbutton") {
            console.log("Searching for:", searchQuery);
            navigate(`/search/${searchQuery}`);
        }
    };

    const handleSidebar = () => {
        if (window.innerWidth <= 1200) {
            setMobilescreen(!mobilescreen);
        }
        setSidebar(!sidebar);
    };

    return (
        <div className='flex items-center justify-between p-5 w-full  h-[115px]'>
            <div className='flex items-center flex-col-reverse  top-9'>
                <div className='md:hidden'>
                    <RxHamburgerMenu size={40} onClick={handleSidebar} />
                </div>
                {/* Logo */}
                <div className='logo flex gap-3 items-center'>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" 
                        className='w-8 h-8 md:w-16 md:h-16' 
                        alt="YouTube Logo" 
                    />
                    <h1 className='font-bold text-3xl hidden md:block'>YouTube</h1>
                </div>
            </div>

            {/* Search Input and Voice Icon */}
            <div className={`flex items-center flex-grow mx-5 ${window.innerWidth >= 768 ? '' : ''}`}>
                <div className="input flex items-center bg-white border rounded-full shadow-md flex-grow">
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            className="border-none outline-none w-[200px] md:w-full rounded-l-full p-3"
                            placeholder="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            onKeyUp={searchHandler}
                        />
                        <button 
                            className="bg-gray-400 hover:bg-gray-300 text-white rounded-r-full p-4 flex items-center"
                            onClick={() => searchHandler({ key: 'searchbutton' })}
                        >
                            <BiSearch size={30} />
                        </button>
                    </div>
                </div>
                <span className='p-2'>
                    <MdKeyboardVoice size={40} className='rounded-full hover:bg-slate-400' />
                </span>
            </div>

            {/* Icons on the Right */}
            <div className={`flex items-center p-2 gap-4 ${window.innerWidth < 768 ? 'hidden' : ''}`}>
                <BiVideoPlus size={30} className='cursor-pointer' />
                <IoIosNotifications size={30} className='cursor-pointer' />
                <ImProfile size={30} className='cursor-pointer' />
               
            </div>
        </div>
    );
}

export default Navbar;
