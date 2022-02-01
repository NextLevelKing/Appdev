import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {rentalCard} from './templates/rentalCard'

async function pageInit(){
    const rentalRef = dataRef(db, 'rentals/');
    const rentalSnapShot = await get(rentalRef)
    const data = rentalSnapShot.val();
    

    Console.log(Object.values(data))
    document.body.append(rentalCard())


    // ES Modules For The Render Function

//Object of object rental{{},{},{}}
//Array of Objects
//Objects.keys(data).map(rental=>{
   // return (data[rental])}
//})

//map filter reduce sort find....
//object.keys()  object.eneteries() -- returns key value pairs  object.values() --- returns array of values

    const rentalCards = Object.values(data).map(rental=>{
        const card = rentalCard(rental)
        //layout trashing
        document.body.append(card)
        return card
    })

}

pageInit()