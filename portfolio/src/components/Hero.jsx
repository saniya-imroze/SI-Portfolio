import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import profilePic from '../assets/SaniyaProfile.png'

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                 <div className="flex flex-col items-center lg:items-start lg:pl-28">
                 <h1 className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Saniya Imroze
                 </h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Senior Software Engineer
                </span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter ">{HERO_CONTENT}</p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center ">
                <img src={profilePic} alt="Saniya Imroze" className="h-25 w-25 rounded-t-2xl object-cover" />
            </div>

        </div>
    </div>
</div>

  )
}

export default Hero
