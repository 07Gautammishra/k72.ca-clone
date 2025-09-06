import React from 'react'

const ProjetCard = ({images}) => {
  return (
       <>
          <div className="group w-1/2 h-full hover:rounded-[35px] transition-all overflow-hidden relative max-[699px]:w-full">
            <img
              className="h-full w-full object-cover"
              src={images.image1}
            />
            <div className="group-hover:opacity-100 absolute opacity-0 top-0 left-0 bg-black/35  h-full w-full flex items-center justify-center">
              <h2 className="text-white uppercase text-6xl font-[font1] border-3 border-white px-5 rounded-full pt-1 max-[1100px]:text-3xl">
                {" "}
                voir li projets
              </h2>
            </div>
          </div>
          <div className="group w-1/2 h-full hover:rounded-[35px] transition-all overflow-hidden relative max-[699px]:w-full">
            <img
              className="h-full w-full object-cover"
              src={images.image2}
            />
            <div className="group-hover:opacity-100 absolute opacity-0 top-0 left-0 bg-black/35  h-full w-full flex items-center justify-center">
              <h2 className="text-white uppercase text-6xl font-[font1] border-3 border-white px-5 rounded-full pt-1 max-[1100px]:text-3xl">
                {" "}
                voir li projets
              </h2>
            </div>
          </div>
        
</>
  )
}

export default ProjetCard
