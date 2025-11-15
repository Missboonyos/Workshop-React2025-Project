//rafce
import React from "react";
import { 
  LayersControl, 
  MapContainer,   
  Marker,   
  Popup,   
  TileLayer, 
  Tooltip, 
  useMap, 
  useMapEvents
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers"
import useDutyStore from "../../store/useDutyStore";

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

  // All data in s.locations are assigned to be in const locations
  const locations = useDutyStore((s)=>s.locations)

  const center = [13,100]
  
  return (
    <div className="flex-1">
      <MapContainer className="h-full" center={center} zoom={7}
        scrollWheelZoom={true}>
        <Layers />
        <ClickToAdd adding={adding} onPick={onPick} />

      {
        locations.map((item)=>{
          return <Marker 
          key={item.id}
          position={[item.lat, item.lng]}>

            <Popup>
              <div className="text-sm">{item.name}</div>
              <div className="text-sm text-gray-500">
                {item.lat.toFixed(6)},{item.lng.toFixed(6)}</div>
            </Popup>

            <Tooltip direction="auto">
              <div>{item.name}</div>
              <div>{item.lat.toFixed(6)},{item.lng.toFixed(6)}</div>
            </Tooltip>
            
          </Marker>
        })
      }

      </MapContainer>
    </div>
  );
};

export default MapView;
