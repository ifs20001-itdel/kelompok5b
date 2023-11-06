import React from 'react';
import ReactPlayer from 'react-player';

const Header = () => {
  return (
    <div>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-white-900">Home</a>
            <a className="mr-5 hover:text-white-900">About</a>
            <a className="mr-5 hover:text-white-900">Member</a>
            <a className="hover:text-white-900">Project</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoM37dBiNsYw34VjkUYbx45Vqh4XVMm4uHDbhHJk2zcfq5OBzySwLeq2gOi95HS831jw&usqp=CAU"
              alt="logo"
              style={{
                borderRadius: "1000px",
                width: "50px",
              }}
            />
            <span className="ml-3 text-xl">KELOMPOK 5B</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-white-200 rounded text-base mt-4 md:mt-0">Log in
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ZZw6-dF2l2Q"
          controls
          playing
          width="0"
          height="0"
        />
      </div>
    </div>
  );
};

export default Header;
