import React from 'react';
import Gridrow from './Gridrow';
import './grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      playing: this.props.playing
    });
  }

  renderRows() {
    let samples = ["Kick", "Snare", "Hihat (c)", "HiHat (o)", "Cymbal"];
    return samples.map(i => {
      return (
        <Gridrow
          playing={this.props.playing}
          addActiveSample={this.props.addActiveSample}
          removeActiveSample={this.props.removeActiveSample}
          sample={i}
          currentBeat={this.props.currentBeat}
          activeSamples={this.props.activeSamples}
        />
      )

    });
  }

  renderRowBottomMarkers() {
    let array = [];
    for (let i = 1; i < 17; i++) {
      array.push(i);
    }
    return array.map(number => {
      return <h5 className={this.props.currentBeat === number ? "selected-beat" : ""}>{number}</h5>
    })
  }

  render() {
    return (
      <div className="grid">
        {this.renderRows()}
        <div className="row-bottom-markers">
          {this.renderRowBottomMarkers()}
        </div>
      </div>
    )
  }


}





export default Grid;