//rafce
import React from "react";
import { 
  LayersControl, 
  MapContainer, 
  Marker, 
  TileLayer, 
  useMap, 
  useMapEvents
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers"

// Events function
const ClickToAdd = ({ adding, onPick })=> {
  // function body
  useMapEvents({
    click(e) {
      if (adding) { 
        onPick(e.latlng.lat, e.latlng.lng)
      }
    }
  })
  return
}

// If we need map.flyTo, we will declare a variable const map
//   const map = useMapEvents({
//     click(e) {
//       console.log(e.latlng)
//       map.flyTo(e.latlng, 15)
//       if (adding) {
//         onPick(e.latlng.lat, e.latlng.lng)
//       }
//     }
//   })
//   return
// }

const MapView = ({ adding, onPick }) => {

  const center = [13,100]
  
  return (
    <div className="flex-1">
      <MapContainer
        className="h-full"
        center={center}
        zoom={7}
        scrollWheelZoom={true}
      >
        
      <Layers />

      <ClickToAdd adding={adding} onPick={onPick} />

      </MapContainer>
    </div>
  );
};

export default MapView;
