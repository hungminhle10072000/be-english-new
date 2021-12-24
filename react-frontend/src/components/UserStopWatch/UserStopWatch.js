import React, { Component } from 'react'
import ReactStopwatch from 'react-stopwatch';

export default class UserStopWatch extends Component {
    render() {
        return (
            <ReactStopwatch
                seconds={0}
                minutes={0}
                hours={0}
                limit="00:00:10"
                onChange={({ hours, minutes, seconds }) => {
                // do something
                }}
                onCallback={
                    () => {
                        alert("Thành công");
                    }
                }
                render={({ formatted, hours, minutes, seconds }) => {
                    return (
                        <div>
                            <p>
                                Bạn có 10 phút để hoàn thành các từ <br />
                                { formatted }
                            </p>
                            {/* <p>
                                Giờ: { hours }
                            </p>
                            <p>
                                Phút: { minutes }
                            </p>
                            <p>
                                Giây: { seconds }
                            </p> */}
                        </div>
                    );
                }}
            />
        )
    }
}
