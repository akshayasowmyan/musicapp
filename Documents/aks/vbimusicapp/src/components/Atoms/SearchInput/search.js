import React, { PureComponent } from 'react';
import AsyncSelect from 'react-select/async';
import './search.css';

class SearchInput extends PureComponent {

  state = {selectedSongs : []};

  onchange = selectedSongs => {
    this.setState({
      selectedSongs: selectedSongs || []
    });
  };

  loadOptions = async(inputText, callback) => {
    const repsonse = await fetch(`https://jsonplaceholder.typicode.com/photos?title_like=${inputText}`);
    const json = await repsonse.json();
    callback(json.map(i => ({ label: i.title, value: i.id })));
  };

  render () {
    return (
      <div className="searchable-box">
        <AsyncSelect
        cacheOptions
        onchange={this.onchange}
        placeholder={'Search for Songs'}
        loadOptions={this.loadOptions} />
      </div>
    )
  }
}
export default SearchInput;
