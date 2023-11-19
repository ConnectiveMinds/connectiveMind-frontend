import React, { useState } from 'react';


type ExploreProps = {
    topic: string;
    description: string;
}


 
export function Explore({ topic, description }: ExploreProps) {
    
   
  
  
    return (
      <div className="explore">
        <h1 className="inline-block font-semibold text-[2rem] text-[rgba(119,65,170,1)]">
          Explore
        </h1>
      </div>
    );
}