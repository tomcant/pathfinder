import { FormEvent } from "react";
import methods from "./search/methods";

type ControlsProps = {
  onStartClick: () => void;
  onClearClick: () => void;
  onMethodSelect: (e: FormEvent<HTMLSelectElement>) => void;
};

const Controls = (props: ControlsProps): JSX.Element => (
  <div className="Controls">
    <button onClick={props.onStartClick}>Start</button>
    <button onClick={props.onClearClick}>Clear</button>
    <select onChange={props.onMethodSelect}>
      {Object.entries(methods).map(([key, method]) => (
        <option key={key} value={key}>{method.name}</option>
      ))}
    </select>
  </div>
);

export default Controls;
