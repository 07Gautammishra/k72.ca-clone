import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef= useRef(null);
  const imageRef=useRef(null);
  const imageArray=[
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Chantal_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  ]

  useGSAP(()=>{
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        markers: false,
        start: "top 10%",
        end: "top -150%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate:(e)=>{
          const imgIndex=Math.floor(e.progress *(imageArray.length-1))
          imageRef.current.src=imageArray[imgIndex];
        }
      }
    })
  })
  return (
    <div>
    <div className="section1 relative py-1 overflow-hidden">
      <div ref={imageDivRef} className="absolute h-[20vw] z-0 w-[15vw] overflow-hidden rounded-2xl top-[20vh] max-[699px]:bottom-[45vh] left-[30vw] ">
        <img ref={imageRef}  className="w-full h-full top-0 object-cover z-0" src="https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg"/>
      </div>
    <div className="relative font-[font2]">
      <div className="mt-[55vh] max-[699px]:mt-[30vh]">
        <h1 className="uppercase text-[19vw] leading-[17vw] text-center">
          Soixan7e
          <br />
          Douze
        </h1>
      </div>
      <div className="pl-5 my-20 min-[699px]:pl-[50%]">
        <p className=" text-[2.8vw] leading-tight font-[font1] pr-5 max-[]:">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
    </div>
    </div>
    <div className="section2 mt-20 ">
      <div className="flex text-xl justify-baseline pl-15 gap-[25vw] font-[font1] ">

      <div>Expertise</div>
      <div className="w-1/2">
        <div>Stratégie</div>
        <div>Publicité</div>
        <div>Branding</div>
        <div>Design</div>
        <div>Contenu</div>
      </div>
      </div>
      <div className=" flex justify-between pl-15 pr-15 gap-[8vw] mt-20 max-md:flex-col max-md:gap-[20px] font-[font1] max-md:pl-5 max-[699px]:text-[1rem]">
        <div className="max-[699px]:w-[90vw]">
          Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.
        </div>
        <div className=" max-[699px]:w-[90vw]">
          Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.
        </div>
        <div className=" max-[699px]:w-[90vw]">Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</div>
      </div>
    </div>
  
    </div>
  );
};

export default Agence;
