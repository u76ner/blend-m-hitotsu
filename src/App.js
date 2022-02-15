import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="App">
      <button onClick={() => speak({ text: "ブレンド の M ひとつ" })}>ブレンドのM1つ</button>
      <button onClick={() => speak({ text: "blend no m heatohts" })}>ブレンドのM1つ（無理やりver）</button>
    </div>
  );
}

export default App;
