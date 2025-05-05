import React , {useState} from 'react'
import SideBar from './components/Sidebar'
import Main from './components/Main'
import axios from 'axios';


const App = () => {
  const [question , setQuestion] =useState("");
  const [answer , setAnswer] = useState("");

async function generateAnswer(){
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
}

  return (
    <>
      <SideBar/>
      <Main/>
      <textarea value={question} onChange={(e)=> setQuestion(e.target.value)}></textarea>
      <button onClick={generateAnswer}>Generate answer</button>
      <p>{answer}</p>
    </>
  )
}

export default App
