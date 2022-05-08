import {CanvasJSChart} from 'canvasjs-react-charts'

function UserStatisticalPage() {
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
            dataPoints: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 10 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 6 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
            ]
        }]
    }
    return (
        <CanvasJSChart options = {options}/>
    )
}

export default UserStatisticalPage;