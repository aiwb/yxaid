import React from 'react';
import { Link } from 'react-router';
import MainNav from '../MainNav';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      notifications: [],
      tasks: []
    };
  }

  componentDidMount() {
    const messages = [{
      displayName: 'Support Team',
      displayPicture: 'dist/img/user2-160x160.jpg',
      messageSubject: 'Why not buy a new awesome theme?',
      messageTime: '5 mins'
    }];
    const notifications = [{
      subject: '5 new members joined today',
      className: 'fa fa-users text-aqua'
    }];
    const tasks = [{
      subject: 'Design some buttons',
      percentage: 20
    }];

    this.setState({
      messages: messages,
      notifications: notifications,
      tasks: tasks
    });
  }

  render() {
    return (
        <header className="main-header">
          <Link to="/" className="logo">
            <span className="logo-mini"><b>YX</b>A</span>
            <span className="logo-lg"><b>YX</b>Aid</span>
          </Link>
          <MainNav />
        </header>
    );
  }
};
