import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import {Line} from 'react-chartjs-2';

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      const distances = []
      const labels = []
      this.state.performanceData.forEach(enty => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
            // return <div key={item.id}>{item.data.message}</div>
          })
          const data = {
            datasets: [{
              data: distances
            }],

            labels: labels
          }
        }
      
    


    dataIndex = (
      <>
        <Line ref='chart' data={data} />
      </>
      
    )
    
    return (
      <>
        {dataIndex}
      </>
    )
  }
} 
  
  export default DisplayPerformanceData