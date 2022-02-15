import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="App">
      <button onClick={() => speak({ text: "ブレンドM1つ" })}>ブレンドM1つ</button>
    </div>
  );
}

export default App;
