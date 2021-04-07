import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
    mapboxgl.accessToken = "pk.eyJ1IjoibWFyY3ZkbWFkZXN0dWRlbnQiLCJhIjoiY2tuNXlsZzBoMDkwMTJvbzZyZjl1a3J2ZCJ9.zK_uoR8p8PGDgoyqwtQl4A";

    useEffect(() => {
        let map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/satellite-streets-v9",
            preserveDrawingBuffer: true,
            center: [4.5, 51.91], // starting position [lng, lat]
            zoom: 12, // starting zoom
        });

        // //dit maakt een marker
        // var marker = new mapboxgl.Marker({
        //     color: "#ebe134",
        // })
        // .setLngLat([4.5, 51.91])
        // .setPopup(new mapboxgl.Popup().setHTML("<h2>Added trees</h2>"))
        // .addTo(map);

        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();
    }, []);

    return <div id="mapContainer" className="map"></div>;
};

export default Map;