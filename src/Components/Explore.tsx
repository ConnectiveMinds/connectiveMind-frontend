import React, { useState } from 'react';
import { onLeftSwipe, onRightSwipe } from "../Utilities/onClicks";

type ExploreProps = {
    topic: string;
    description: string;
}

type ContentType= {
    prevContent: ExploreProps;
    currentContent: ExploreProps;

}
 export const contentArr: ContentType[] = [{prevContent:{topic:"",description:""},currentContent:{topic:"",description:""}}];//1st, 2nd and 3rd element represent previous and current respectively. 

export function Explore({ topic, description }: ExploreProps) {
    
    const [contents, setContents] = useState(contentArr);
    let i = 0;
   
    setContents([...contents, {
      prevContent: { topic: "", description: "" },
      currentContent: { topic: topic, description: description },
    }  ] );
    i = contents.length - 1;
    console.log("indec"+i);
  
    return (
        <div className='explore'>
            
            <h1>Explore</h1>
            <div className='recommendation'>
                <div className="container">
                    <h2 className='child'>{contents[i].currentContent.topic}</h2>
                    <p className='child'>{contents[i].currentContent.description}</p>
                    <button className="colored" >Join</button>
                    <div className='swiper'><button className='swipe' ></button ><button className='swipe'></button><button className='swipe' ></button></div>
                </div>
            </div>
        </div>
    )
}