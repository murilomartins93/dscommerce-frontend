import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function;
};

function SearchBar({ onSearch }: Props) {

  const [text, setText] = useState("");

  function handleInputChange(event: any) {
    setText(event.target.value);
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }
  
  function handleResetClick() {
    setText("");
    if (onSearch) {
      onSearch(text);
    }
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleFormSubmit}>
      <button type="submit">🔎︎</button>
      <input
        type="text"
        placeholder="Nome do produto"
        value={text}
        onChange={handleInputChange}
      />
      <button className="dsc-search-bar-reset-btn" onClick={handleResetClick}>🗙</button>
    </form>
  );
}

export default SearchBar;
