import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 0.0.1
          </div>
          <strong>Copyright &copy; 2015-2016 </strong> All rights reserved.
        </footer>
    );
  }
}
