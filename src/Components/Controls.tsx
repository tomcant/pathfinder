import { FormEvent } from "react";
import mazeGenerators from "../maze/generators";
import searchMethods from "../search/methods";

type ControlsProps = {
  isSearching: boolean;
  onStartClick: () => void;
  onStopClick: () => void;
  onClearClick: () => void;
  onGenerateClick: () => void;
  selectedMazeGenerator: string;
  selectedSearchMethod: string;
  onMazeGeneratorSelect: (e: FormEvent<HTMLSelectElement>) => void;
  onSearchMethodSelect: (e: FormEvent<HTMLSelectElement>) => void;
};

const Controls = (props: ControlsProps): JSX.Element => (
  <div className="Controls">
    <fieldset>
      <legend>Maze generator</legend>
      <select onChange={props.onMazeGeneratorSelect} value={props.selectedMazeGenerator}>
        {Object.entries(mazeGenerators).map(([key, generator]) => (
          <option key={key} value={key}>
            {generator.name}
          </option>
        ))}
      </select>
      <button onClick={props.onGenerateClick} disabled={props.isSearching}>
        Generate
      </button>
      <button onClick={props.onClearClick} disabled={props.isSearching}>
        Clear
      </button>
    </fieldset>
    <fieldset>
      <legend>Search method</legend>
      <select onChange={props.onSearchMethodSelect} value={props.selectedSearchMethod}>
        {Object.entries(searchMethods).map(([key, method]) => (
          <option key={key} value={key}>
            {method.name}
          </option>
        ))}
      </select>
      <button onClick={props.isSearching ? props.onStopClick : props.onStartClick}>
        {props.isSearching ? "Stop" : "Start"}
      </button>
    </fieldset>
  </div>
);

export default Controls;
