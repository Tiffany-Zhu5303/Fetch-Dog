import React from "react";

const DogForm = ({ formType, formOptions }) => {
    return(
        <div className="form-page">
            <form className="dog-form">
                {formType === "breed" ?
                    <>
                        <label htmlFor="breeds">Choose one or more breed(s)</label>
                        <select name="breeds" id="breeds" multiple>
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