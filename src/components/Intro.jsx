import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Oyinade</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
               Hi, I'm <br />
               Oyinade Odogun <br />
               I develop web applications,<br />
               user interfaces and Data Analysis
            </p>
        </div>
    )
}

export default Intro;