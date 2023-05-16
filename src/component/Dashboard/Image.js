import React, { useState, useEffect } from 'react';
const Image=()=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/images');
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.id}><img style={{width:'50px', height:'50px'}}src={item.image}/></li>
              
            ))}
          </ul>
        )}
      </div>
    );
  }
  export default Image;
  