import React, { useState } from "react";
import './Main.css';
import profile_icon from './profile_icon.png';
import card1_icon from './card1_icon.png';
import card2_icon from './card2_icon.png';
import card3_icon from './card3_icon.png';
import card4_icon from './card4_icon.png';
import add_image_icon from './add_image_icon.png';
import voice_icon from './voice_icon.png';
import send_icon from './send_icon.png';
import axios from 'axios';

function Main() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    if (question.trim() === "") return;
    try {
      setAnswer("Loading...");
      const response = await axios.post("http://localhost:5000/api/gemini", {
        question: question,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("Sorry, something went wrong.");
    }
  }

  const handleCardClick = (text) => {
    setQuestion(text);
    setAnswer("");
    setTimeout(() => generateAnswer(), 0);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Remedi</p>
        <img src={profile_icon} alt="Profile Icon" />
      </div>

      <div className="main-container">
        {answer === "" ? (
          <div className="main-top">
            <div className="greet">
              <p><span>Hello,</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Suggest somethings to do when you are bored in classroom")
                }
              >
                <p>Suggest somethings to do when you are bored in classroom</p>
                <img src={card1_icon} alt="Card 1 Icon" />
              </div>

              <div
                className="card"
                onClick={() =>
                  handleCardClick("Briefly summarize the concept: Urbanization")
                }
              >
                <p>Briefly summarize the concept: Urbanization</p>
                <img src={card2_icon} alt="Card 2 Icon" />
              </div>

              <div
                className="card"
                onClick={() =>
                  handleCardClick("Brainstorm some activity ideas for our literature club, Verbitron")
                }
              >
                <p>Brainstorm some activity ideas for our literature club, Verbitron</p>
                <img src={card3_icon} alt="Card 3 Icon" />
              </div>

              <div
                className="card"
                onClick={() => handleCardClick("Tell me about React.js")}
              >
                <p>Tell me about React.js</p>
                <img src={card4_icon} alt="Card 4 Icon" />
              </div>
            </div>
          </div>
        ) : (
          <div className="answer-container">{answer}</div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                setAnswer("");
              }}
              placeholder="Enter a prompt here"
              onKeyDown={(e) => e.key === "Enter" && generateAnswer()}
            />
            <div>
              <img src={add_image_icon} alt="Add Image" />
              <img src={voice_icon} alt="Voice Input" />
              <img src={send_icon} alt="Send" onClick={generateAnswer} />
            </div>
          </div>
          <p className="bottom-info">
            Remedi may display inaccurate info, including about people, so double-check its responses. Your privacy and trust are important.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
