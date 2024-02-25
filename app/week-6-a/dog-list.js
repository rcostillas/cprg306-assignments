"use client";

import { useState } from "react";
import Dog from "./dog.js";
import DogData from "./dog-data.json";

export default function DogList() {
    const [dogs, setDogs] = useState(DogData);

    return (
        <div>
            <h2>Dog List</h2>
            {dogs.map((dog, index) => (
                <Dog key = {index} name={dog.name} age={dog.age}/>
            ))}
        </div>
    )
}