import React, {useState, useEffect} from "react";
import DogForm from "../components/DogForm";

const Breeds = () => {
    const [breeds, setBreeds] = useState();

    useEffect(() => {
        const getBreeds = () => {
            fetch("https://dog.ceo/api/breeds/list/all", {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                console.log("breeds: ", data.message);
                setBreeds(data.message);
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong... Please try again at a different time.")
            })
        };

        getBreeds();
    }, []);

    return(
        <div className="breeds-page">   
            <DogForm formType="breed" formOptions={breeds}/>
        </div>
    );
};

export default Breeds;