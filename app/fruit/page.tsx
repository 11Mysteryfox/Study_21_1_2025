"use client"
import { useState,useEffect } from "react";
import Card from "../components/Card";
export default function Page() {
    const [fruit,setFruit] = useState('apple')
    const toBanana = ()=>{
        setFruit('Banana')
    }
    const toPapaya = ()=>{
        setFruit('Papaya')
    }
    const toOrange = ()=>{
        setFruit('Orange')
    }
    useEffect (() =>{
        document.title = `My fruit is ${fruit}`
    })
    return (
        <div>
            {fruit}
            <button onClick={toBanana}>Banana</button>
            <button onClick={toPapaya}>Papaya</button>
            <button onClick={toOrange}>Orange</button>

            <Card src="/1.jpg" title="Plyer 1"></Card>
            <Card src="/2.jpg" title="Plyer 2"></Card>
            <Card src="/3.jpg" title="Plyer 3"></Card>
        </div>
    );
}