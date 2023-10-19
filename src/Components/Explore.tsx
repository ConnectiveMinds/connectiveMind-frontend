import React from 'react';

type ExploreProps = {
    topic: string;
    description: string;
}

export function Explore({topic,description}:ExploreProps) {
    return (
        <div className='explore'>
            <h1>Explore</h1>
            <div className='recommendation'>
                <div className="container">
                    <h2 className='child'>{topic}</h2>
                    <p className='child'>{description}</p>
                </div>
            </div>
        </div>
    )
}