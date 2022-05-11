import React from "react";
export class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.type, this.state.type);
      }
    );
  };

  render() {
    const { search } = this.state;
    return (
      <div className="col s12">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="search"
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Serach
          </button>
        </div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    );
  }
}
