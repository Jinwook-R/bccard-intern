import {Calendar, Badge, Button, DatePicker} from 'antd';
import AppLayout from "../components/AppLayout";
import {Typography} from "antd";
import React, {useState} from "react";
import styled from "styled-components";
import {Modal} from "antd";
const {Text} = Typography;

const StyledReseravtion = styled.div`
  margin: 20px auto;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font: 20px bold;
`;

function getListData(value) {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event。。....' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ];
            break;
        default:
    }
    return listData || [];
}

function dateCellRender(value) {
    const listData = getListData(value);
    return (
        <ul className="events">
            {listData.map(item => (
                <li key={item.content}>
                    <Badge status={item.type} text={item.content} />
                </li>
            ))}
        </ul>
    );
}

function getMonthData(value) {
    if (value.month() === 8) {
        return 1394;
    }
}

function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
        <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
}

function Reservation() {

    const [openReservationModal, setOpenReservationModal] = useState(false);
    const [openReservationRegisterModal, setOpenReservationRegisterModal] = useState(false);

    const onPanelChange = () => {
        console.log('onPanelChange');
    }

    const handleCancel = () => {
        setOpenReservationModal(false);
    }

    const onSelect = () => {
        console.log('onSelect');
        setOpenReservationModal(true);
    }

    const handleButtonClick = () => {
        setOpenReservationRegisterModal(true)
    }

    const handleReservationRegisterCancel = () => {
        setOpenReservationRegisterModal(false);
    }


    function onDateChange(date, dateString) {
        console.log(date, dateString);
    }


    return (
        <AppLayout>
            <StyledReseravtion>
                <p style={{textAlign:'center'}}>
                    <Text strong style={{font:'30px bold'}}>약속 관리</Text>
                </p>
                <StyledButton onClick={handleButtonClick}>약속 추가</StyledButton>
                <Calendar style={{height:"250px"}} dateCellRender={dateCellRender} onPanelChange={onPanelChange} onSelect={onSelect}  />
                <Modal title="약속 내용" visible={openReservationModal} onCancel={handleCancel}>
                    <p>Some contents...</p>
                </Modal>

                {openReservationRegisterModal &&
                <Modal title="약속 추가" visible={openReservationRegisterModal} onCancel={handleReservationRegisterCancel}>
                    <DatePicker onChange={onDateChange} />
                </Modal>
                }

            </StyledReseravtion>
        </AppLayout>
        );
}

export default Reservation;
