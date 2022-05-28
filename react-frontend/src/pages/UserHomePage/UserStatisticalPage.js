import useSelection from 'antd/lib/table/hooks/useSelection';
import {CanvasJSChart} from 'canvasjs-react-charts'
import { useEffect, useState } from 'react';
import StatisticalService from './../../services/StatisticalService'
const initialScoreOfMonth = [{ x: 1, y:0 },
    { x: 2, y:1009 },
    { x: 3, y:2000 },
    { x: 4, y:1000 },
    { x: 5, y:500 },
    { x: 6, y:2000 },
    { x: 7, y:5000 },
    { x: 8, y:1500 },
    { x: 9, y:0 },
    { x: 10, y:3000 },
    { x: 11, y:4000 },
    { x: 12, y:4500 },]
function UserStatisticalPage() {
    const [scoreOfMonth,setScoreOfMonth] = useState([]) 
    useEffect(()=> {
        StatisticalService.getStatisticalByUserId(2)
        .then(res => {
            let data = res.data;
            let newScoreOfMonth = initialScoreOfMonth;
            data.forEach(element => {
                let date = new Date(element.dateCreateDate)
                newScoreOfMonth[date.getMonth()].y += element.score;
            });
            setScoreOfMonth(newScoreOfMonth)
        })
    },[])
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", 
        title:{
            text: "Thống kê điểm hàng tháng năm 2022"
        },
        axisY: {
            title: "Điểm",
            // suffix: "%"
        },
        axisX: {
            title: "Tháng của năm",
            prefix: "Tháng",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Tháng {x}: {y} điểm",
            dataPoints: scoreOfMonth
        }]
    }
    return (
        <CanvasJSChart options = {options}/>
    )
}

export default UserStatisticalPage;