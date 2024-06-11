import React, { useEffect } from "react";

const DogForm = ({ formType, formOptions }) => {
    const updateCounter = () => {
        var slider = document.getElementById("form-slider");
        var numCounter = document.getElementById("num-dogs-input");
        numCounter.innerHTML = `${slider.value} dogs`;
    }

    return(
        <div className="form-page">
            <form className="dog-form">
                {formType === "breed" ?
                    <>
                        <label htmlFor="breeds" className="input-label">Choose <span className="popout-text">one</span> or 
                        <span className="popout-text"> more</span> breed(s)
                        <p className="instruction-text center-align">(Hold control/command to select multiple options)</p></label>
                        <select name="breeds" id="breeds-options" multiple>
                            <option value="">--Choose Your Breed(s)--</option>
                            {formOptions && Object.keys(formOptions).length > 0 ?
                            Object.keys(formOptions).map(key => {
                                if(formOptions[key].length === 0){
                                    return( <option value={key}>{key}</option> )  
                                }else{
                                    for(let i = 0; i < formOptions[key].length; i++){
                                        return( <option value={formOptions[key][i] + " " + key}>{formOptions[key][i] + " " + key}</option>)
                                    }
                                }
                                }) : null}
                        </select>
                        <label htmlFor="numDogs" className="input-label">Number of dogs</label>
                        <input type="range" min="1" max="50" id="form-slider" list="markers" onChange={updateCounter}></input>
                        <datalist id="markers" className="slider-markers">
                            <option value="1" label="1"></option>
                            <option value="5" label="5"></option>
                            <option value="10" label="10"></option>
                            <option value="15" label="15"></option>
                            <option value="20" label="20"></option>
                            <option value="25" label="25"></option>
                            <option value="30" label="30"></option>
                            <option value="35" label="35"></option>
                            <option value="40" label="40"></option>
                            <option value="45" label="45"></option>
                            <option value="50" label="50"></option>
                        </datalist>
                        <p id="num-dogs-input">50 dogs</p>
                    </> :
                    <>
                        <h2>Random Fetch</h2>
                        <h3>Complete randomized fetch of any breed</h3>
                    </>
                }
                
            </form>
        </div>
    );
};

export default DogForm;