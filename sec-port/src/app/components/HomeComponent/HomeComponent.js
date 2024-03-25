import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

const hindi = {
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700' ]
};

export default function HomeComponent() {
    return (
        <React.Fragment>
            <div 
                id="home"
                style={{
                    backgroundImage: "linear-gradient(to right, white 65%, #48AFDE 35%)",
                    minHeight: "500px",
                    maxHeight: "1200px",
                    height: "100%",
                    width: "100%"
                }}
            >
                <div className='container m-auto'>
                    <div className='grid grid-cols-12'>
                        <div className='bg-white flex flex-col justify-center col-span-12 mid:col-span-5 md:bg-transparent'>
                            <div className='container m-auto'>
                                <div className='lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center'>
                                    <p className={`text-[#47AEDE tex-3xl md:text-base lg:text-2xl`} >Hi There!</p>
                                    <h1 className='text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3'>
                                        I'm Chuma Raxothi
                                    </h1>
                                    <h2 className={`text-[#223740] py-2 font-bold uppercase md:text-xl`}>Network Engineer || Software Dveloper</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
