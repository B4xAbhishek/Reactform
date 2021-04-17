import './App.css';
import Senddata from './Screens/Senddata'
import Success from './Screens/Success'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Senddata/>
          <br></br>
          <Success/>
{/* ++

          Backend Api schema 
          BODY:

[

   {

      "listAor": "orendaindia_in",

      "standardStatus": "Active",

      "city": "Delhi",

      "country": "IN",

      "idxAddressDisplayYn": "true",

      "latitude": "21.134363470692065",

      "longitude": "-86.75267459741411",

      "listingId": "steveT_test_1",

      "virtualTourUrl": "http://www.google.com/virtualtour",

      "listPrice": "111111",

      "listOfficeName": "Beachfront apartment for sale in cancun Ixnah 4N",

      "modificationTimestamp": "2021-03-31 8:00:00",

      "photosCount": 5,

      "propertyType": "Residential",

      "propertySubType": "Single Family",

      "stateOrProvince": "DL",

      "streetNumber": "89758",

      "streetName": "Beachfront apartment for sale in cancun Ixnah 4N",

      "unstructuredAddress": "1234 Main Street",

      "postalCode":"33223",

      "photos": [

         {

            "MediaSequenceNumber": 1,

            "MediaUrl": "https://dl.dropboxusercontent.com/s/xvrugohe2tozhoa/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-310-750.jpg"

         },

         {

            "MediaSequenceNumber": 2,

            "MediaUrl": "https://dl.dropboxusercontent.com/s/fi9c4emjoxcp68r/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-759-750.jpg"

         },

         {

            "MediaSequenceNumber": 3,

            "MediaUrl": "https://dl.dropboxusercontent.com/s/onzu5ciwcvonn7l/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-998-750.jpg"

         },

         {

            "MediaSequenceNumber": 4,

            "MediaUrl": "https://dl.dropboxusercontent.com/s/guqq8nu05flbn34/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-139-750.jpg"

         },

         {

            "MediaSequenceNumber": 5,

            "MediaUrl": "https://dl.dropboxusercontent.com/s/7me02gp9zkeg3pl/departamento-frente-al-mar-en-venta-en-cancun-ixnah-4n-124-750.jpg"

         }

      ]

   }

] */}
      </header>
    </div>
  );
}

export default App;
