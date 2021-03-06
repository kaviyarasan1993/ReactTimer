var React = require('react');

var Controls = React.createClass({

  /*
  the currying pattern(function generating/returning another function)
  */
  onStatusChange: function(newStatus) {

    return () => {
      this.props.onStatusChange(newStatus);
    };
  },

  propTypes: {

    countDownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  render: function() {

    var {countDownStatus} = this.props;
    var renderStartStopButton = () => {

      if(countDownStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else if(countDownStatus === 'paused' || countDownStatus === 'stopped'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
