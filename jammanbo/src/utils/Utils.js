import moment from 'moment';
/**
 * 유틸 모음
 */
class Utils {

    static staticConstructor() {
        /**
         * 요일배열 생성
         */
        const weekdays = new Array(7);
        weekdays[0] =  "일요일";
        weekdays[1] = "월요일";
        weekdays[2] = "화요일";
        weekdays[3] = "수요일";
        weekdays[4] = "목요일";
        weekdays[5] = "금요일";
        weekdays[6] = "토요일";
        Utils.weekdays = weekdays;

        console.log("monent", moment);
    }

    /**
     * 주어진 날짜에 특정 일수를 더한다.
     * @param startDate - 더하기 위한 날짜
     * @param numberOfDays - 더해야하는 일 수
     * @return {Date} - startDate 에서 numberOfDays 더한 결과
     */
    static addDays = (startDate, numberOfDays) => {
        let returnDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()+numberOfDays,
            startDate.getHours(),
            startDate.getMinutes(),
            startDate.getSeconds());
        return returnDate;
    }

    /**
     * 날짜의 '오전 0시 0분' String 을 반환한다.
     * @param date
     * @return {string}
     */
    static getStringDate = (date) => {
        return(
            (date.getHours() < 12 ? '오전 ' : '오후 ') +
            date.getHours() + '시 ' +
            date.getMinutes() + '분'
        );
    }

    /**
     * 타입에 대한 타입 String 을 반환한다.
     * @param type
     * @return {*}
     */
    static getStringType = (type) => {
        if(type === 'work') {
            return {
                text: '정상근무',
                color: 'blue'
            }
        } else if(type === 'late') {
            return {
                text: '지각',
                color: 'red'
            };
        }
        return ''
    }

    /**
     * 근무한 시작 시간관 끝시간을 입력받아 근무시간 String 을 반환한다.
     * @param firstTime
     * @param endTime
     * @return {string}
     */
    static getStringWorkRange = (firstTime, endTime) => {
        const gap = endTime.getTime() - firstTime.getTime();
        const gapHours = parseInt(gap / (1000 * 60 * 60));
        const gapMinute = (gap % (1000 * 60 * 60)) / (1000 * 60);
        return `${gapHours}시간 ${gapMinute}분 근무`;
    }

    /**
     * 연차(Off)에 대한 String 을 반환한다.
     * @param date
     * @return {string}
     */
    static getStringOff = (date) => {
        return `${date.getMonth() + 1}월 ${date.getDate()}일(${Utils.weekdays[date.getDay()]})은 연차였어요`;
    }

    /**
     * 해당하는 달 1일의  날짜를 반환한다.
     */
    static getFirstDayOfMonthDate = (date) => {
        const inputDate = moment(date);
        console.log(inputDate.year());
        console.log(inputDate.month());
        const firstDay = moment({year: inputDate.year(), month: inputDate.month(), day: 1});
        console.log(firstDay);
        return firstDay;
    }
}

Utils.staticConstructor()

export default Utils;