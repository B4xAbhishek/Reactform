import React,{useState,useEffect} from "react";
import axios from "axios";
import dayjs from 'dayjs';

function Success() {
    // oreanda
    const [country,setCountry] = useState("IN")
    const [listAor,setListAor] = useState("orenda_IN")
    const [listingId,setListingId] = useState("steveT_test_2")
    const [latitude,setLatitude] = useState("21.134363470692065")
    const [longitude,setLongitude] = useState("-86.75267459741411")
    const [listPrice,setListPrice] = useState("111111")
    const [listOfficeName ,setListOfficeName] = useState("Beachfront apartment for sale in cancun Ixnah 4N")
    const [photosCount,setPhotosCount] = useState("5")
    const [postalCode,setPostalCode] = useState("33223")
    const [propertyType,setPropertyType] = useState("Residential")
    const [propertySubType,setPropertySubType] = useState("Residential")
    const [standardStatus,setStandardStatus] = useState("Off Market")
    const [stateOrProvince,setStateOrProvince] = useState("Delhi")
    const [unstructuredAddress,setUnstructuredAddress] = useState("1234 Main Street")
    const [photos,setPhotos] = useState("")




    const headers = {
        'X-RED-ApiKey': '7771cf11-4832-4f16-9964-fd22b9c69133',
        'Content-Type': 'Application/Json',
        'Accept': 'Application/Json'
        }

        function savedata(){
            let data = ([{
                country,
                listAor,
                listingId,
                latitude,
                longitude,
                listPrice,
                listOfficeName,
                photosCount,
                postalCode,
                propertyType,
                propertySubType,
                standardStatus,
                stateOrProvince,
                unstructuredAddress,

                photos: [
           
                    {
           
                       "MediaSequenceNumber": 1,
           
                       "MediaUrl": "https://dl.dropboxusercontent.com/s/fi9c4emjoxcp68r/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-759-750.jpg"
           
                    },
           
                    {
           
                       "MediaSequenceNumber": 2,
           
                       "MediaUrl": "https://dl.dropboxusercontent.com/s/onzu5ciwcvonn7l/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-998-750.jpg"
           
                    },
           
                    {
           
                       "MediaSequenceNumber": 3,
           
                       "MediaUrl": "https://dl.dropboxusercontent.com/s/guqq8nu05flbn34/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-139-750.jpg"
           
                    },
           
                    {
           
                       "MediaSequenceNumber": 4,
           
                       "MediaUrl": "https://dl.dropboxusercontent.com/s/7me02gp9zkeg3pl/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-124-750.jpg"
           
                    },
                    {
           
                        "MediaSequenceNumber": 5,
            
                        "MediaUrl": "https://dl.dropboxusercontent.com/s/7me02gp9zkeg3pl/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-124-750.jpg"
            
                     }
           
                 ]
                
               }
            ]
            );

               axios.post("https://apiw1.realestatedigital.com/v1/properties/submit", data ,{headers})
               console.log(data);
        }
    return (
        <div>
        <h1>POST DATA</h1>
            <>
            {/* orenda 
            "country is missing"
                1: "listAor"
                2: "listingId"
                3: "latitude"
                4: "longitude"
                5: "listPrice
                6: listOfficeName
                7: photos
                8: photosCount
                9: postalCode
                10: propertyType
                11: propertySubType
                12: standardStatus
                13: stateOrProvince
                14: unstructuredAddress*/}
            <input type="text" value={country} onChange={(e) => {setCountry(e.target.value)}} name="country"/><br></br>
            <input type="text" value={listAor} onChange={(e) => {setListAor(e.target.value)}} name="listAor"/><br></br>
            <input type="text" value={listingId} onChange={(e) => {setListingId(e.target.value)}} name="listingId"/><br></br>
            <input type="text" value={latitude} onChange={(e) => {setLatitude(e.target.value)}} name="latitude"/><br></br>
            <input type="text" value={longitude} onChange={(e) => {setLongitude(e.target.value)}} name="longitude"/><br></br>
            <input type="text" value={listPrice} onChange={(e) => {setListPrice(e.target.value)}} name="listPrice"/><br></br>
            <input type="text" value={listOfficeName} onChange={(e) => {setListOfficeName(e.target.value)}} name="listOfficeName"/><br></br>
            <input type="text" value={photosCount} onChange={(e) => {setPhotosCount(e.target.value)}} name="photosCount"/><br></br>
            <input type="text" value={postalCode} onChange={(e) => {setPostalCode(e.target.value)}} name="postalCode"/><br></br>
            <input type="text" value={propertyType} onChange={(e) => {setPropertyType(e.target.value)}} name="propertyType"/><br></br>
            <input type="text" value={propertySubType} onChange={(e) => {setPropertySubType(e.target.value)}} name="propertySubType"/><br></br>
            <input type="text" value={standardStatus} onChange={(e) => {setStandardStatus(e.target.value)}} name="standardStatus"/><br></br>
            <input type="text" value={stateOrProvince} onChange={(e) => {setStateOrProvince(e.target.value)}} name="stateOrProvince"/><br></br>
            <input type="text" value={unstructuredAddress} onChange={(e) => {setUnstructuredAddress(e.target.value)}} name="unstructuredAddress"/><br></br>
            {/* photos */}
            {/* <input type="text" value={photos} onChange={(e) => {setPhotos(e.target.value)}} name="photos"/><br></br> */}
                






            <button type="button" onClick={savedata} >Sava Data </button>
            
            </>
        </div>
    )
}

export default Success
