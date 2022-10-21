import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => { 
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                src="https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg/revision/latest/top-crop/width/360/height/360?cb=20220119211527"
                width={50}
                height={50}
                onClick={() => router.push("/")}
                className='cursor-pointer'
            />
            <h1 className='text-orange-500 text-3xl font-bold'>Pyro</h1>
            <form className="flex flex-grow px-5 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
                <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type='text' />
                <XIcon 
                className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                onClick={() => (searchInputRef.current.value = '')}/>
                <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                <button hidden type="submit" onClick={search}>Search</button>
            </form>
            <Avatar className="ml-auto" url='https://coaching.papareact.com/ai9'/>
          </div>

          <HeaderOptions />
        </header>
    );
}

export default Header;
