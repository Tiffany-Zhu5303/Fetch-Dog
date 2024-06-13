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
                let formatBreeds = [];
                const objectKeys = Object.keys(data.message);
                for(const key in objectKeys){
                    if(data.message[objectKeys[key]].length > 0){
                        for(let i = 0; i < data.message[objectKeys[key]].length; i++){
                            formatBreeds.push({
                                "value":data.message[objectKeys[key]][i]+ " " + objectKeys[key],
                                "label":data.message[objectKeys[key]][i]+ " " + objectKeys[key]
                            })
                        }
                    }
                    else{
                        formatBreeds.push({
                            "value":objectKeys[key],
                            "label":objectKeys[key]
                        })
                    }
                }

                console.log(formatBreeds)
                setBreeds(formatBreeds);
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