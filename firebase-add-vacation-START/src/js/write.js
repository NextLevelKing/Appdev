    // import your modules
    import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
    import {ref as databaseRef, push, set, get} from 'firebase/database'
    import { db, storage  } from "./libs/firebase/firebaseConfig";

    document.querySelector("#rentalImage").addEventListener("change", onImageSelected); 
    document.forms["rentalForm"].addEventListener("submit", onAddRental);

    function onAddRental(e) {
        e.preventDefault();
        uploadNewVacactionRenal();
        }
        
    
    // input change event listener function

   

     function onImageSelected(e) {
        //selected file
        //file objects [fileObj,fileObj]
        let file = e.target.files[0];
        console.log(file)
        // update the display with the requested image
        document.querySelector(".display img").src = URL.createObjectURL(file);

        //testUpload(file)
    
        }
    
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
          
              //to obtain the firebase unique key
              const itemRef = await push(dataRef)
              
              set(itemRef,{
                key:itemRef.key,
                sku:`jhvr${itemRef.key}`,
                urlPath,
                storagePath,
                city,
                Price:12499
              })
              
          }


        
          // For test if the upload happened to upload 

        // async function testUpload(file){
        //     //first create ref to where you want to write the file
        //     const imageRef = storageRef(storage, file.name);
        //     //Write the file to the ref(location/path)
        //    const confirmation = await uploadBytes(imageRef, file);
        //     console.log(confirmation);
        // }