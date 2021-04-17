import axios from "axios";
import React from "react";
import dayjs from 'dayjs'
import './Senddata.css';
import { useForm } from "react-hook-form";
import serialize from 'serialize-javascript'
export default function Sentdata() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const headers = {
   'X-RED-ApiKey': '7771cf11-4832-4f16-9964-fd22b9c69133',
   'Content-Type': 'Application/Json',
   'Accept': 'Application/Json'
   }
  
  const onSubmit = data => 
  {
     data = serialize([data])
     axios.post("https://apiw1.realestatedigital.com/v1/properties/submit", data ,{headers})
     console.log(data);
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (

   <div className="input_wrap">
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
       
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="orenda_IN" {...register("listAor")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  defaultValue="Off Market" placeholder="standardStatus" {...register("standardStatus", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.standardStatus && <span>This field is required</span>}

      <input defaultValue="Delhi" type="text " placeholder="city" {...register("city")} />
      <input defaultValue="IN" type="text " placeholder="country" {...register("country")} />

      <input defaultValue="true" type="text " placeholder="idxAddressDisplayYn" {...register("idxAddressDisplayYn")} />

       <input defaultValue="21.134363470692065" type="text " placeholder="latitude" {...register("latitude")} />
      <input defaultValue="-86.75267459741411" type="text " placeholder="longitude" {...register("longitude")} />
      <input defaultValue="steveT_test_2" type="text " placeholder="listingId" {...register("listingId")} />
      <input defaultValue="http://www.google.com/virtualtour" type="text " placeholder="virtualTourUrl" {...register("virtualTourUrl")} />
      <input defaultValue="CAD" type="text " placeholder="currencyCode" {...register("currencyCode")} />
      <input defaultValue="111111" type="text " placeholder="listPrice" {...register("listPrice")} />
      <textarea defaultValue="Beachfront apartment for sale in cancun Ixnah 4N" type="text " placeholder="listOfficeName" {...register("listOfficeName")} />    
     
      <input  defaultValue={dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss')} type="text " placeholder="modificationTimestamp" {...register("modificationTimestamp")} />

      <input defaultValue="5" type="text" placeholder="photosCount" {...register("photosCount")} />
      <input defaultValue="Residential" type="text" placeholder="propertyType" {...register("propertyType")} />

      <input defaultValue="Residential" type="text" placeholder="propertySubType" {...register("propertySubType")} />
      <input defaultValue="DL" type="text" placeholder="stateOrProvince" {...register("stateOrProvince")} />
      <input defaultValue="89758" type="text" placeholder="streetNumber" {...register("streetNumber")} />
      <input defaultValue="1234 Main Street" type="text" placeholder="unstructuredAddress" {...register("unstructuredAddress")} />
      <input defaultValue="33223" type="text" placeholder="postalCode" {...register("postalCode")} />


    {/* Photos */}
    {/* <input defaultValue="https://dl.dropboxusercontent.com/s/xvrugohe2tozhoa/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-310-750.jpg" 
    type="text " placeholder="MediaUrl" {...register("MediaUrl")} />
    <input defaultValue="https://dl.dropboxusercontent.com/s/fi9c4emjoxcp68r/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-759-750.jpg"
     type="text " placeholder="MediaUrl" {...register("MediaUrl")} />
    <input defaultValue="https://dl.dropboxusercontent.com/s/onzu5ciwcvonn7l/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-998-750.jpg" 
    type="text " placeholder="MediaUrl" {...register("MediaUrl")} />
    <input defaultValue="https://dl.dropboxusercontent.com/s/guqq8nu05flbn34/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-139-750.jpg"
     type="text " placeholder="MediaUrl" {...register("MediaUrl")} />
    <input defaultValue="https://dl.dropboxusercontent.com/s/7me02gp9zkeg3pl/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-124-750.jpg" 
    type="text " placeholder="MediaUrl" {...register("MediaUrl")} /> */}
    
      
      <input type="submit" />
    </form>
    <h2>USing different approach</h2>
    </div>
  );
}