import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableHighlight } from 'react-native';

import DatePicker from './DatePicker';

/**
 * 날짜 선택 다이얼로그 입니다.
 */
class DatePickerModal extends React.Component {

    /**
     * render
     */
    render() {
        const {
            startDate,
            endDate,
            visible,
            onSelect,
        } = this.props;
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>

                <TouchableHighlight
                    style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                    onPress={this.props.onClose}
                >
                    <TouchableHighlight onPress={()=> {}}>
                        <DatePicker
                            startDate={startDate}
                            endDate={endDate}
                            onSelect={onSelect}
                        />
                    </TouchableHighlight>
                </TouchableHighlight>
            </Modal>
        );
    }
}

DatePickerModal.propTypes = {
    /**
     * 모달 다이얼로그 표시 여부입니다.
     */
    visible: PropTypes.bool.isRequired,
    /**
     * 모달 다이얼로그를 닫을 때 발생하는 이벤트 입니다.
     */
    onClose: PropTypes.func.isRequired,
    /**
     * 시작 날짜 입니다.
     */
    startDate: PropTypes.object.isRequired,
    /**
     * 끝 날짜 입니다.
     */
    endDate: PropTypes.object.isRequired,
    /**
     * 날짜를 선택하면 발생하는 이벤트 입니다.
     */
    onSelect: PropTypes.func.isRequired,
};


export default DatePickerModal;