import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="w-[80%] mx-auto  snap-end">
                <div className="w-full flex md:flex-row flex-col gap-6 m-auto py-4">

                    {/* Logo + Info */}
                    <div className="info w-full lg:w-1/3 lg:border-r mr-[10%]">
                        <img src="https://m-sci.net/assets/logo_rectangle-DB_H_bu_.png" alt="M-Sci Logo" className="scale-90 float-start mr-4" />
                        <div className="flex flex-col  h-full justify-around text-lg">
                            <p>M-Sci</p>
                            <p>Game Genre: NFT</p>
                            <p>Supported OS: Telegram</p>
                            <p>Release: Coming soon</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="nav text-xl  max-sm:w-[90%] flex max-sm:mx-auto">
                        <ul className="flex flex-wrap  justify-between items-center  underline gap-12  h-full">
                            <li className="drop-shadow-md"><a href="#home">HOME</a></li>
                            <li className="drop-shadow-md"><a href="#introduce">INTRODUCE</a></li>
                            <li className="drop-shadow-md"><a href="#keyfeature">KEY-FEATURE</a></li>
                        </ul>
                    </div>
                </div>

                <div className="contact w-full max-sm:text-center text-cyan-500">
                    <a href="https://t.me/muskscicommunity"><span class="border-r px-2"> Contact Us</span></a>
                    <a href="https://www.youtube.com/@Musk-SciOfficial"><span class="border-r px-2">Youtube</span></a>
                    <a href="https://x.com/MuskSci"><span class=" px-2">X</span></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
