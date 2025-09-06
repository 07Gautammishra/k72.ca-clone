import React from "react";
import ProjetCard from "../components/projects/ProjetCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projetsBox = [
    {
      image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
    }, {
      image1:"https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:"https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg"
    },
    {
      image1:"https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      image2:"https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg"
    },
    {
      image1:"https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
      image2:"https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg"
    },
    {
      image1:"https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      image2:"https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg"
    },
    {
      image1:"https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
      image2:"https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg"
    },
    {
      image1:"https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:"https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg"
    },
    {
      image1:"https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      image2:"https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg"
    },
  ]
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from(".cardBox",{
      height:"20px",
      stagger:{
        amount:1
      },
      scrollTrigger:{
        trigger:".cardContainer",
        markers:false,
        start: "top 100%",
        end: "top -300%",
        scrub: true
      }
    })
  })
  return (
    <div className="p-4 font-[font2]">
      <div className="pt-[50vh] flex g-0 leading-tight">
        <h1 className="uppercase  text-[15vw]">projets</h1>
        <span className="text-[3.5vw] pt-8 max-[1000px]:pt-5 max-[699px]:pt-0">
          16
        </span>
      </div>
      <div className="-mt-13 cardContainer max-[1200px]:-mt-8 max-[800px]:-mt-3">
        {projetsBox.map((item) => {
          return  <div className="cardBox w-full h-[450px] mb-3 flex gap-3 max-[699px]:flex-col">
          <ProjetCard images={item} />
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
