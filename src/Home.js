import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import axios from "axios"
function Home() {
    let [d, Sd] = useState([]);
    let [dd, Sdd] = useState([]);
    let { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    function show() {
        fetch("https://muju-ai.onrender.com/data").then((res) => res.json()).then((data) => {
            Sd(data)


        })
    }

    useEffect(() => {
        show();
    }, [])
    if (!browserSupportsSpeechRecognition) {
        return alert("This Browser Not support !!!");

    }

    function start() {
        SpeechRecognition.startListening({ continuous: true });
    }
    function stop() {
        SpeechRecognition.stopListening();
    }
    function send() {
        axios.post("https://muju-ai.onrender.com/", { transcript })
      //  window.location.reload()



    }





    return (
        <>
            <h1 className="text-center">Welcome To New AI Chat App</h1>
            <hr></hr>
            <div className="inline-flex my-3 mx-3">
                <button className="btn btn-success mx-3" style={{ marginTop: '10px' }} onClick={start}>Start Listneing</button>
                <button onClick={stop} className="btn btn-success mx-3" style={{ marginTop: '10px' }}>Stop Listneing</button>
                <div className="card  mx-3 my-3">
                    <textarea placeholder="Find Defination Of any Word" rows={"10"} value={transcript} ></textarea>
                    <button onClick={send} className="btn btn-success my-3 mx-3">Answer</button>

                </div>
            </div >
            <div className="card my-3 mx-3">
                {d.map((el) => {
                    return <div >
                        {el.list.map((e) => {

                            return <div>
                                <h6>Word:-{e.word}</h6>
                                <h6>Defination :- {e.definition} </h6>
                                <small>Created :- {e.written_on}</small>
                                <h6> Example :-{e.example}</h6>
                                <h6> Author :-{e.author}</h6>
                                <hr></hr>

                            </div>
                        })}

                    </div>
                })}


            </div>

        </>
    )
}
export default Home;
