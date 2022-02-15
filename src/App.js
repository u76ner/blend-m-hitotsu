import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="App">
      <button onClick={() => speak({ text: "blend m heatohts" })}>ブレンドM1つ</button>
    </div>
  );
}

export default App;
