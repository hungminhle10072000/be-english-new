import useSelection from 'antd/lib/table/hooks/useSelection';
import {CanvasJSChart} from 'canvasjs-react-charts'
import { useEffect, useState } from 'react';
import StatisticalService from './../../services/StatisticalService'
const initialScoreOfMonth = [{ x: 1, y:0 },
    { x: 2, y:0 },
    { x: 3, y:0 },
    { x: 4, y:0 },
    { x: 5, y:0 },
    { x: 6, y:0 },
    { x: 7, y:0 },
    { x: 8, y:0 },
    { x: 9, y:0 },
    { x: 10, y:0 },
    { x: 11, y:0 },
    { x: 12, y:0 },]
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
            text: "Bounce Rate by Week of Year"
        },
        axisY: {
            title: "Bounce Rate",
            // suffix: "%"
        },
        axisX: {
            title: "Tháng của năm",
            prefix: "Tháng",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: scoreOfMonth
        }]
    }
    return (
        <CanvasJSChart options = {options}/>
    )
}

export default UserStatisticalPage;