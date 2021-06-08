import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import boom from "../img/boom.jpg"

const Map = () => {
    require('dotenv').config({ path: ".env"});
    mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    useEffect(() => {
        let map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/satellite-streets-v9",
            //style: "mapbox://styles/mapbox/satellite-v9", voor map zonder namen
            preserveDrawingBuffer: true,
            center: [4.5, 51.91], // starting position [lng, lat]
            zoom: 12, // starting zoom
        });

        // //dit maakt een marker
    //     var marker = new mapboxgl.Marker({
    //         color: "#4CBB17",
    //     })
    //     .setLngLat([4.5, 51.91])
    //     .setPopup(new mapboxgl.Popup().setHTML(`<img class="pin-img" src="${boom}"><h2>Trots op mijn nieuwe geveltuintje!🤩</h2><button class="btn btn-primary">Deel nu!</button></button>`))
    //     .addTo(map);

    //     map.dragRotate.disable();
    //     map.touchZoomRotate.disableRotation();
    // }, []);

    return <div id="mapContainer" className="map"></div>
    ;
};

export default Map;