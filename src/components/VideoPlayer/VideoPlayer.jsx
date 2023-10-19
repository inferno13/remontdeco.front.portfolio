import React, {useState} from 'react';
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const VideoPlayer = () => {

    const [play,setPlay] = useState(false);

    return (
        <div className={"VideoPlayer"}>
            <h2>Производство декоративного кирпича</h2>

            <div className="video-container">
                <ReactPlayer
                    width='100%'
                    height='100%'
                    playing={play}
                    url='/videos/Video.mp4'
                />

                <button
                    className={`button-play ${play ? "active" : ""}`}
                    onClick={() => setPlay(!play)}
                >
                    <img src="/images/play.svg" alt=""/>
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
