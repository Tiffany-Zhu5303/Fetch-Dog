import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Images from "../components/Images";

const Displays = () => {
    const location = useLocation();
    const props = location.state;
    console.log(props);
    const [images, setImages] = useState({});

    useEffect(() => {
        const getImages = () => {
            for(const breed in Object.keys(props.breeds)){
                if(props.num > 1){
                    fetch(`https://dog.ceo/api/breed/${props.breeds[breed].value}/images/random/${props.num}`,{
                        method:"GET"
                    })
                    .then(response => response.json())
                    .then(data => {
                        setImages((prev) => {
                            return{
                                ...prev,
                                [props.breeds[breed].value]:data
                            }
                        });
                    })
                }
            }
        }

        getImages();
    }, [props]);

    console.log("final:", images);
    console.log(typeof(images), images)

    return(
        <div className="display-page">
            {images && Object.keys(images).length > 0 ? Object.keys(images).map((breed) => {
                const capBreedName = breed.charAt(0).toUpperCase() + breed.slice(1);
                if(images[breed].status === "success"){
                    return(<Images breedName={capBreedName} imgLinks={images[breed].message} />)
                }else{
                    return(<h1>No Images Found For {capBreedName} :</h1>)
                }
            }) : <h1>Something went wrong... Please enter your search again!</h1>}
            <Link to="/breed" className="back-button">Back</Link>
        </div>
    );
};

export default Displays;