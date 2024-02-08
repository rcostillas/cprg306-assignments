"use client"
import { useState } from "react";

export default function DogForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState("");

    console.log("server");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const dog = { name, age, breed };
        console.log(dog);
        alert(dog);<
        setName("");
    }

    return (
        <div>
            <h2> className="text-2xl-"
        </div>
    )
}