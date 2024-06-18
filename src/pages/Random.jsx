import React from "react";
import DogForm from "../components/DogForm";

const Random = () => {
    return(
        <div className="random-page">
            <DogForm formType="random" />
        </div>
    );
};

export default Random;