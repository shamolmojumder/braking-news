import React, { useEffect, useState } from 'react';

const TopHeadline = () => {
    const [articles,setArticates]= useState([])
    useEffect(()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=5633f1fdb14c4b39b2ee2c2f24394458';
    fetch(url)
    .then(res=>res.json())
    .then(data=> setArticates(data.articles) )
} 
   ,[])
    return (
        <div>
            <h1>Top Headline{articles.length}  </h1>
        </div>
    );
};

export default TopHeadline;