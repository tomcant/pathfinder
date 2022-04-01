import { FormEvent } from "react";
import mazeGenerators from "../maze/generators";
import searchMethods from "../search/methods";

type ControlsProps = {
  isGenerating: boolean;
  isSearching: boolean;
  isWeighted: boolean;
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
    <fieldset id="maze-generator">
      <legend>Maze generator</legend>
      <select onChange={props.onMazeGeneratorSelect} value={props.selectedMazeGenerator}>
        {Object.entries(mazeGenerators).map(([key, generator]) => (
          <option key={key} value={key}>
            {generator.name}
          </option>
        ))}
      </select>
      <button onClick={props.onGenerateClick} disabled={props.isSearching || props.isGenerating}>
        Generate
      </button>
      <button onClick={props.onClearClick} disabled={props.isSearching || props.isGenerating}>
        Clear
      </button>
    </fieldset>
    <fieldset id="search-method">
      <legend>Search method</legend>
      <select onChange={props.onSearchMethodSelect} value={props.selectedSearchMethod}>
        {Object.entries(searchMethods).map(([key, method]) => (
          <option key={key} value={key}>
            {method.name}
          </option>
        ))}
      </select>
      {props.isWeighted && (
        <em>
          <small>Double click to add weights!</small>
        </em>
      )}
      <button onClick={props.isSearching ? props.onStopClick : props.onStartClick} disabled={props.isGenerating}>
        {props.isSearching ? "Stop" : "Search"}
      </button>
    </fieldset>
  </div>
);

export default Controls;
