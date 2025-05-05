import React , {useState} from "react";
import './Main.css';
import profile_icon from './profile_icon.png'
import card1_icon from './card1_icon.png'
import card2_icon from './card2_icon.png'
import card3_icon from './card3_icon.png'
import card4_icon from './card4_icon.png'
import add_image_icon from './add_image_icon.png'
import voice_icon from './voice_icon.png'
import send_icon from './send_icon.png'
import axios from 'axios';

function Main(){
        
    const [question , setQuestion] =useState("");
    const [answer , setAnswer] = useState("");
  
  async function generateAnswer(){
    try{
    setAnswer("loading....")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBhYBDQ3sc03XWGy_EjVRY3gsvZTIpRUhw",
      method:"post" ,
      data: {
        contents: [{
          parts:[{text: question }]
          },],
         },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }catch (error) {
    console.error("Error fetching answer:", error);
    setAnswer("Sorry, something went wrong.");}
  }
        



     return(
        <div className="main">
             <div className="nav">
                <p>Remedi</p>
                <img src={profile_icon} alt="profile_icon" />
             </div>

             <div className="main-container">
             {question=="" ? <div className="main-top">
                <div className="greet">
                    <p><span>Hello,</span></p>
                    <p>How can I help you today?</p>
                </div>
                 
                <div className="cards">

                    <div className="card">
                        <p>Suggest somethings to do when you are bored in classroom</p>
                        <img src={card1_icon} alt="card1_icon" />
                    </div>

                    <div className="card">
                        <p>Briefly summarize the concept:Urbanization</p>
                        <img src={card2_icon} alt="card2_icon" />
                    </div>

                    <div className="card">
                        <p>Brainstrom some activity ideas for our literature club ,Verbitron</p>
                        <img src={card3_icon} alt="card3_icon" />
                    </div>
                    
                    <div className="card">
                        <p>Tell me about React.js</p>
                        <img src={card4_icon} alt="card4_icon" />
                    </div>

                </div>
                </div> : <p>{answer}</p> }
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" value={question} onChange={(e)=> setQuestion(e.target.value)} placeholder="Enter a prompt here"/>
                        <div>
                            <img src={add_image_icon} alt="" />
                            <img src={voice_icon} alt="" />
                            <img src={send_icon} alt=""   onClick={generateAnswer} />
                        </div>
                    </div>
                    <p className="bottom-info">
                    Remedi may display inaccurate info, including about people, so double-check its responses. Your privacy and Remedi Apps
                    </p>
                </div>
                
             </div>

        </div>
     )
}
export default Main;