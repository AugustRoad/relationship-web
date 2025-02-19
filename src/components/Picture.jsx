import React from 'react'
import { aquarium1 } from '../assets'
import { aurora2 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft,ArrowRight } from './icons'
import { useNavigate } from 'react-router-dom'
import first from '../assets/first.jpg';
import aurora from '../assets/aurora.jpg';
import fearfarm from '../assets/fearfarm.jpg';
import scary from '../assets/scary.jpg';
import snowman from '../assets/snowman.jpg';
import leave from '../assets/leave.jpg';
import together from '../assets/together.jpg';
import tobe from '../assets/tobe.jpeg';

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: first, title: 'September 12, 2024', description: "第一次在德州见面。要了你的联系方式"},   
    { Image: aurora, title: 'October 11, 2024', description: "说走就走的旅行。看到了很好看的北极光"},
    { Image: fearfarm, title: 'October 25, 2024', description: "玩鬼屋。有点太怕小丑了吧"},   
    { Image: scary, title: 'October 25, 2024', description: "很吓人的一幕"},
    { Image: snowman, title: 'December 2, 2024', description: "一起堆的雪人和雪玫瑰"},   
    { Image: leave, title: 'December 16, 2024', description: "要走了 ;-; "},
    { Image: together, title: 'February 9, 2025', description: "在一起了"},
    { Image: tobe, title: '以后', description: "以后要加更多！"},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          一起的时光
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="时光"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-between w-full mt-12">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
              onClick={() => navigate('/timer')}
            >
              <ArrowLeft />  前页
            </button>
          <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
              onClick={() => navigate('/Closing')}
          >
                下页 <ArrowRight />
          </button>
        </div>
      </div>
    </div>


  )
}

export default Picture
