import React, {useState, useEffect} from 'react';
import slumData from '../data/combined_filtered_fields.json'
import 'leaflet/dist/leaflet.css';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';

function MapBox(){
    // console.log(slumData);
    // const [norm, setNorm] = useState(0);
    const [slumStyle,setSlumStyle] = useState({
        color:"red",
        fillColor:"red",
        fillOpacity:0.6,
        weight:0.7,
    });
    const onEachSlum = (slum, layer)=>{
        // console.log(slum);
        const slum_name = slum.properties.SLUM_NAME 
        const slum_code = slum.properties.SLUM_CODE
        console.log(slum_name);
        var min = 72;
        var max = 22446;
        var pop = (slum.properties.POPULATION);
        const norm = (pop - min)/(max - min);
        console.log(norm*100);
        if((norm*100)>1.5){
            setSlumStyle({
                color:"yellow",
                weight:0.7,
                fillColor:"red",
                fillOpacity:(norm*100)
            });
        }
        // const info = 
        //      <div>
        //         <h6>{slum_name}</h6>
        //         <p>Population:{pop}</p>
        //     </div>;
        layer.bindPopup(slum_name);
        // layer.bindPopup(slum_code)
        // setSlumStyle({});
        layer.setStyle(slumStyle);
        layer.on({
            click: (event)=> {
                event.target.setStyle(
                    {
                        color: "blue", 
                        // fillColor: "red",
                        // fillOpacity:(),
                    }
                );
            }
        })
    };

    useEffect(() => {}, [slumStyle]);

    return (<div>
        <MapContainer style={{height: "80vh", width:"90vw"}} center={[18.5,73.9]}  zoom={12} >
            <GeoJSON style={slumStyle} data= {slumData} onEachFeature={onEachSlum} />
                <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // url = "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png"
                // url = "https://www.openstreetmap.org/#map={z}/{x}/{y}&layers=T.png"
                // url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                >

                </TileLayer>
                </MapContainer>
    </div>);
}

export default MapBox;