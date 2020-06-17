import React from "react";
import { Map, TileLayer } from "react-leaflet";

import { mapConstants } from "../../constants/map.constants";
function TargetsMap() { 
    return (   
            <Map
                center={{lat: mapConstants.INTIAL_LAT, lng: mapConstants.INITIAL_LONG}}
                zoom={mapConstants.INITIAL_ZOOM}
                style={{ width: "70vw", height: "100vh"}}
            >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
    )
}

export default TargetsMap;
