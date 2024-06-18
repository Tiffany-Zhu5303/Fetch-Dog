import React, { useEffect, useState } from "react";
import fetchImg from "../assets/fetch-rewards-icon.png";

const About = () => {
    const [image, setImage] = useState();
    useEffect(() => {
        const getRandomImg = () => {
            fetch(`https://dog.ceo/api/breeds/image/random`,{
                method:"GET",
            })
            .then(response => response.json())
            .then(data => setImage(data))
            .catch(err => {
                console.log(err);
            });
        }

        getRandomImg();
    }, []);

    console.log(image)
    return(
        <div className="about-page">
        <h1>Welcome to Dog Fetcher!</h1>
        <h3 className="about-intro">
            <br></br>
            <br></br>
            If you're a dog lover then you're at the right place! 
            <br></br>
            Browse through images of dogs by breed or get completely random images provided by 
            <a href="https://dog.ceo/dog-api/documentation/" className="site-link"> Dog API</a></h3>
            <br></br>
            <br></br>
            {image && image.status === "success" ? 
            <img src={image.message} alt="random dog from Dog API" className="about-image"/> 
            : <img src={fetchImg} alt="fetch rewards logo" className="about-image"/>}

            {image && image.status === "success" ? 
            <p>Image from <a href="https://dog.ceo/dog-api/documentation/" className="site-link">Dog API</a></p> 
            : <p><a href="https://fetch.com/" className="site-link">Fetch Logo</a></p>}
        </div>
    );
};

export default About;