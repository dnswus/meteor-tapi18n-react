TAP = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var options;
    if (this.props.children) {
      options = this.props.children.reduce(function(map, child) {
        if(child.type == 'option') {
          map[child.key] = child.props.children;
        }
        return map;
      }, {});
    }
    if (!options || Object.keys(options).length == 0) {
      options = this.props.options;
    }
    return {
      text: TAPi18n.__(this.props.label, options)
    }
  },
  render() {
    return <span>{this.data.text}</span>
  }
});
