"use client";

import { useEffect, useRef } from "react";

interface MapProps {
    latitude: number;
    longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapRef.current && window.naver) {
            const mapOptions = {
                center: new window.naver.maps.LatLng(latitude, longitude),
                zoom: 15
            };
            new window.naver.maps.Map(mapRef.current, mapOptions);
        }
    }, [latitude, longitude]);

    return <div ref={mapRef} style={{ width: "100%", height: "60vh" }} />;
};

export default Map;
