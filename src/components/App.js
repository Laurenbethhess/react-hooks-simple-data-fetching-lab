import React, { useEffect, useState } from 'react'

function App() {
    const [dogImages, setDogImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((r) => r.json())
          .then(data => {
            setDogImages(data.message)
            setIsLoaded(true)
          });
      }, []);

    if (!isLoaded) return <h3>Loading...</h3>;

    return (
        <img src={dogImages} alt="A Random Dog"/>
        
    )
}

export default App
