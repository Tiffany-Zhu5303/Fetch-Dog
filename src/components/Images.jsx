import React from "react";

const Images = ({breedName, imgLinks, num}) => {
    console.log("images", typeof(imgLinks));
    return(
        <div className="display-breed-container">
            <h1 className="display-breed-name">{breedName}</h1>
            <div className="result-images">
                {imgLinks && num > 1 && imgLinks.length > 0 ? 
                    imgLinks.map(image => {
                        return(<img src={image} alt={"random "+breedName} key={image} className="dog-image"/>)
                    })
                : null}
                {imgLinks.length > 0 && num === 1 ? <img src={imgLinks} alt={"random "+breedName} className={"dog-image"} />:null}
            </div>
        </div>
    );
};

export default Images;