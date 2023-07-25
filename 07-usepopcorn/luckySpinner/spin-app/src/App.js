import "./style.css";
import WheelComponent from "react-wheel-of-prizes";

export default function App() {
  const segments = [
    "better luck next time",
    "won 70",
    "won 1000",
    "won uber pass",
    "lottery"
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F","#F0CF50"];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1>Lucky Winner</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={300}
          upDuration={200}
          downDuration={800}
          fontFamily="Arial"
        />
         {/* <button className="btn btn Secondary p-10 text-white" onFinished={(winner) => onFinished(winner)}>Click</button> */}
      </div>
     
      <h2>Start clicking to see some magic happen!</h2>
    </div>
  );
}
