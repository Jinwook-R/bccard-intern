import React, { useEffect } from "react";
import styled from "styled-components";

const StyledMap = styled.div`
  display: block;
  position: inherit;
  height: 500px;
`


const Map = () => {

    const mapScript = document.createElement("script");

    const Lat = "35.85133"
    const Lng = "127.734086"
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d2d0b5a6d50aee20c0862cdd775bc868&autoload=false`;
    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng(Lat, Lng), // 지도의 중심좌표
                level: 8, // 지도의 확대 레벨
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOption);
            var mapTypeControl = new window.kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new window.kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            // 마커가 표시될 위치입니다
            var markerPosition = new window.kakao.maps.LatLng(Lat, Lng);

            // 마커를 생성합니다
            var marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
        });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return <StyledMap id="map"/>
};

export default Map;