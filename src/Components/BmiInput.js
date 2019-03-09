import React from "react";
import { Input, Dropdown, Grid } from 'semantic-ui-react'


const BmiInput = props => {
    
  return (
    <>
      <Grid columns={3} doubling stackable>
        <Grid.Column>
          <Input
            fluid
            placeholder='Height'
            id="height"
            onChange={this.handleChange.bind(this)}/>
        </Grid.Column>
        <Grid.Column>
          <Input
          fluid
          placeholder='Height'
          id="height"
          onChange={this.handleChange.bind(this)}/>
      </Grid.Column>
        <Grid.Column>
          <Dropdown
            fluid
            defaultValue='Metric'
            selection
            onChange={this.handleChange.bind(this)}
            options={[{ text: 'Metric', value: 'metric' }, { text: 'Imperial', value: 'imperial' }]} />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default BmiInput;