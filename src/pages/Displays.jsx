import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Images from "../components/Images";

const Displays = () => {
    const location = useLocation();
    const props = location.state;
    const [images, setImages] = useState({});

    useEffect(() => {
        const getImages = async() => {
            if(props.type === "breeds"){
                for(const breed in Object.keys(props.breeds)){
                    let subBreed = []
                    if(props.breeds[breed].value.indexOf(" ") !== -1){
                        subBreed = props.breeds[breed].value.split(" ");
                    }
                    
                    console.log(props.breeds[breed].value, subBreed)
                    let query = ``;
                    if(subBreed.length === 0){
                        query = `https://dog.ceo/api/breed/${props.breeds[breed].value}/images/random`;
                    }else{
                        query = `https://dog.ceo/api/breed/${subBreed[1]}/${subBreed[0]}/images/random`;
                    }

                    if(props.num > 1){
                        fetch(query+`/${props.num}`, {
                            method:"GET",
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
                        .catch(err => {
                            console.log(err);
                            alert("An error has occurred. Please try again at a later time.")
                        });
                    }else{
                        fetch(query,{
                            method:"GET",
                        })
                        .then(response => response.json())
                        .then(data => setImages({[props.breeds[breed].value]:data}))
                        .catch(err => {
                            console.log(err);
                            alert("An error has occurred. Please try again at a later time.")
                        });
                    }                
                }
            }else if(props.type === "random"){
                if(props.num > 1){
                    fetch(`https://dog.ceo/api/breeds/image/random/${props.num}`,{
                        method:"GET",
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log("random data", data)
                        setImages(data);
                    })
                    .catch(err => {
                        console.log(err);
                        alert("An error has occurred. Please try again at a later time.")
                    });
                }else{
                    fetch(`https://dog.ceo/api/breeds/image/random`,{
                        method:"GET",
                    })
                    .then(response => response.json())
                    .then(data => setImages(data))
                    .catch(err => {
                        console.log(err);
                        alert("An error has occurred. Please try again at a later time.")
                    });
                }
            }
        }

        getImages();
    }, [props]);

    return(
        <div className="display-page">  
            {props.type === "random" ? <h1>Random Search</h1>: null}
            {props.type === "breeds" && images && Object.keys(images).length > 0 ? Object.keys(images).map((breed) => {
                const capBreedName = breed.charAt(0).toUpperCase() + breed.slice(1);
                if(images[breed].status === "success"){
                    return(<Images breedName={capBreedName} imgLinks={images[breed].message} num={props.num} />)
                }else{
                    return(<h1>No Images Found For {capBreedName}</h1>)
                }
            }) 
            : props.type === "random" && images && images.status === "success"?
                <Images imgLinks={images.message} num={props.num} />
            : <h1>Something went wrong... Please enter your search again!</h1>}
            {props.type === "breeds" ? 
            <Link to="/Breed" className="back-button">Back</Link> : <Link to="/Random" className="back-button">Back</Link>}
        </div>
    );
};

export default Displays;