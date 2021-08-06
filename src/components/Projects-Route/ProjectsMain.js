import React from "react";
import Select from 'react-select';

const options = [
    { value: 'hr', label: 'HR' },
    { value: 'technical', label: 'Technical' },
    { value: 'timepass', label: 'Timepass' },
  ];

class App extends React.Component {
    state = {
        selectedOption: null,
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        alert(selectedOption["value"]);

        
      };
      render() {
        const { selectedOption } = this.state;
    
        return (
            <div>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
                <p id="bruh"></p> 
            </div>
          
        );
      }
}

export default App;