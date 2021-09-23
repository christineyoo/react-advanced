import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

export default class MovieList extends Component {
  static contextType = UserContext; //we're setting a static property on this class

  componentDidMount() {
    console.log('context', this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List{' '}
            {userContext.currentUser ? userContext.currentUser.name : ''}{' '}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext; //this is setting it explicitly
