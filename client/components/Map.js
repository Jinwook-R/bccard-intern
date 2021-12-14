import React, {useEffect} from "react";
import styled from "styled-components";

const StyledMap = styled.div`
  display: block;
  position: inherit;
  border: grey 2px solid;
  @media screen and (min-width: 501px) {
    height: 500px;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const Map = ({lat,lng, name}) => {
    const mapScript = document.createElement("script");
    const Lat = lat ? lat: "37.39818534663808";
    const Lng = lng ? lng: "127.11341614517751"
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d2d0b5a6d50aee20c0862cdd775bc868&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
        window.kakao.maps.load(() => {
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

            // 마커가 표시될 위치입니다
            const markerPosition = new window.kakao.maps.LatLng(Lat, Lng);

            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        window.open(`https://map.kakao.com/link/from/내위치,${position.coords.latitude},${position.coords.longitude}/to/${name},${lat},${lng}`);
                    },
                );
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            const iwPosition = new kakao.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            const infowindow = new kakao.maps.InfoWindow({
                position : iwPosition,
                content : '<span class="info-title" style="    display: block;\n' +
                    '    background: #50627F;\n' +
                    '    color: #fff;\n' +
                    '    text-align: center;\n' +
                    '    height: 24px;\n' +
                    '    line-height:22px;\n' +
                    '    border-radius:4px;\n' +
                    '    padding:0px 10px;">길찾기</span>'
            });

            kakao.maps.event.addListener(map, 'tilesloaded', () => {
                const infoTitle = document.querySelectorAll('.info-title');

                infoTitle.forEach(function(e) {
                    const w = e.offsetWidth + 10;
                    const ml = w/2;
                    e.parentElement.style.top = "82px";
                    e.parentElement.style.left = "50%";
                    e.parentElement.style.marginLeft = -ml+"px";
                    e.parentElement.style.width = w+"px";
                    e.parentElement.previousSibling.style.display = "none";
                    e.parentElement.parentElement.style.border = "0px";
                    e.parentElement.parentElement.style.background = "unset";
                });
            });
            infowindow.open(map, marker);
        });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return <StyledMap id="map"/>
};

export default Map;