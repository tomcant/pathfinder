import { FormEvent } from "react";
import methods from "../search/methods";

type ControlsProps = {
  isRunning: boolean;
  onStartClick: () => void;
  onStopClick: () => void;
  onClearClick: () => void;
  onGenerateClick: () => void;
  onSearchMethodSelect: (e: FormEvent<HTMLSelectElement>) => void;
  selectedSearchMethod: string;
};

const Controls = (props: ControlsProps): JSX.Element => (
  <div className="Controls">
    <button onClick={props.isRunning ? props.onStopClick : props.onStartClick}>
      {props.isRunning ? "Stop" : "Start"}
    </button>
    <button onClick={props.onClearClick} disabled={props.isRunning}>
      Clear
    </button>
    <button onClick={props.onGenerateClick} disabled={props.isRunning}>
      Generate
    </button>
    <select onChange={props.onSearchMethodSelect} value={props.selectedSearchMethod}>
      {Object.entries(methods).map(([key, method]) => (
        <option key={key} value={key}>
          {method.name}
        </option>
      ))}
    </select>
  </div>
);

export default Controls;
