import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  componentWillMount() {
    console.log("hey")
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit})).then(console.log("done fetch"));
    this.fetchFilters()
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket currentFilter={this.state.currentFilter}
                  updateFilterCallback={this.handleFilterChange}
                  filters={this.state.filters}
                  fruit={this.state.fruit}
      />
    );
  }
}

export default App;
