import React from "react";

class SearchBar extends React.Component {
  // controlled vs uncontrolled components
  // we use state and pass a value
  // the source of truth is now in the react component
  // the uncontrolled the input tag stored the value
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* onChnage is a callback property */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;