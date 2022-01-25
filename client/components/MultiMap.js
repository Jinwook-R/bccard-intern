import React, {useEffect} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

const StyledMap = styled.div`
  display: block;
  position: inherit;
  height: 300px; 
  border: black 2px solid;
`;


const MultiMap = () => {
    const mapScript = document.createElement("script");
    const Lat = "37.56606808205573";
    const Lng = "126.99453910847235";
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d2d0b5a6d50aee20c0862cdd775bc868&autoload=false`;
    const restaurantList = useSelector(state => state.restaurant.restaurantList);

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
        window.kakao.maps.load(() => {

            const positions = restaurantList?.map(e => {
                return {title: e.name, latlng:new kakao.maps.LatLng(e.lat, e.lng)}
            })

            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng(Lat, Lng), // 지도의 중심좌표
                level: 4, // 지도의 확대 레벨
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOption);
            const mapTypeControl = new window.kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            const zoomControl = new window.kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            positions?.map((e)=> {
                const {title} = e;
                const {La, Ma} = e.latlng;
                const imageSize = new kakao.maps.Size(24, 35);
                const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 마커를 생성합니다
                const marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: e.latlng, // 마커를 표시할 위치
                    title : e.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지
                });

                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function() {
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            window.open(`https://map.kakao.com/link/from/내위치,${position.coords.latitude},${position.coords.longitude}/to/${title},${Ma},${La}`);
                        },
                    );
                });
                marker.setMap(map);
            });
        });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);


    return <StyledMap id="map"/>
};

export default MultiMap;