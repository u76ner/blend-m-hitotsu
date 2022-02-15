import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="App">
      <button onClick={() => speak({ text: "blend em hitots" })}>ブレンドM1つ</button>
    </div>
  );
}

export default App;
