

import Card from "./Card";
import travelJournal from './date'

// Define the type for our travel journal entries


export default function Main(){
    let cardElement  =travelJournal.map((item,) =>{
        return <Card key={item.id} {...item}/>
    })


    return(
        <>
            {
                cardElement
            }
        </>
    )
}