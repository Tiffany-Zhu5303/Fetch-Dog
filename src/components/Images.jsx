import React from "react";

const Images = ({breedName, imgLinks}) => {
    return(
        <div className="display-breed-container">
            <h1 className="display-breed-name">{breedName}</h1>
            <div className="result-images">
                {imgLinks && imgLinks.length > 0 ? 
                    imgLinks.map(image => {
                        return(<img src={image} alt={"random "+breedName} className="dog-image"/>)
                    })
                :null}
            </div>
        </div>
    );
};

export default Images;