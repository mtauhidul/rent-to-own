import React from "react";
import ImageCard from "./ImageCard";

const MultipleImageCard = ({data}) => {
  return (
    <div className="w-full h-80 grid grid-cols-2 gap-3">
        {
            data.map(({name,img},index)=>{
                return <ImageCard name={name} img={img} key={index}/>
            })
        }
    </div>
  );
};

export default MultipleImageCard;