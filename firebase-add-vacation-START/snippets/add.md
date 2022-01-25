# Add Content To Storage And RTD


### Add Imports

```javascript

    // write.js
    // import your modules
    import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
    import {ref as databaseRef, push, set, get} from 'firebase/database'
    import { db, storage  } from "./libs/firebase/firebaseConfig";
    
```


### Form Event Listener
```javascript
    
    //write.js

    function onAddRental(e) {
    e.preventDefault();
    uploadNewVacactionRenal();
    }
    document.forms["rentalForm"].addEventListener("submit", onAddRental);
    

```

### Input Element Change Event Listener
```javascript
 
     // input change event listener function

    function onImageSelected(e) {
    //selected file
    let file = e.target.files[0];
    // update the display with the requested image
    document.querySelector(".display img").src = URL.createObjectURL(file);

    }

    document.querySelector("#rentalImage").addEventListener("change", onImageSelected);

```




### Upload A New Vacation Rental 
```javascript
async function uploadNewVacactionRenal() {
  //form data
    const city = document.querySelector('#cityName').value.trim();
    const file = document.querySelector('#rentalImage').files[0]

   //paths to the data to write
    const imageRef =     storageRef( storage, `images/${file.name}`);
    const dataRef =  databaseRef( db, 'rentals')

    //uploading file to the storage bucket
    const uploadResult = await uploadBytes(imageRef, file);

    //url to the image stored in the storage bucket
    const urlPath =  await getDownloadURL(imageRef) 

    //path of the storage bucket to the image
    const storagePath = uploadResult.metadata.fullPath;

    //
    const itemRef = await push(dataRef)
    
    set(itemRef,{
      key:itemRef.key,
      sku:`jhvr$(itemRef.key}`,
      urlPath,
      storagePath,
      path,
      city,
      Price:12499
    })
    
}
```


### Testing Image Upload
```javascript
async function checkImageUpload(file) {
    const imageRef = storageRef(storage, file.name);
    const confirmation = await uploadBytes(imageRef, file);
    console.log(confirmation);
  }
```
