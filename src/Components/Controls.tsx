import { FormEvent } from "react";
import methods from "../search/methods";

type ControlsProps = {
  onStartClick: () => void;
  onClearClick: () => void;
  onGenerateClick: () => void;
  onMethodSelect: (e: FormEvent<HTMLSelectElement>) => void;
  selectedMethod: string;
};

const Controls = (props: ControlsProps): JSX.Element => (
  <div className="Controls">
    <button onClick={props.onStartClick}>Start</button>
    <button onClick={props.onClearClick}>Clear</button>
    <button onClick={props.onGenerateClick}>Generate</button>
    <select onChange={props.onMethodSelect} value={props.selectedMethod}>
      {Object.entries(methods).map(([key, method]) => (
        <option key={key} value={key}>
          {method.name}
        </option>
      ))}
    </select>
  </div>
);

export default Controls;
