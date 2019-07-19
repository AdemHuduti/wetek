import _ from 'lodash';
import React from 'react';
import Faker from 'faker';
import UserList from './UserList';
import SearchUser from './SearchUser';
import '../index.css';

class Users extends React.Component {
  state = {
    users: [],
    totalUsers: 20,
    filterUsers: '',
    loading: true
  }

  componentDidMount() {
    this.fetchFakeUsers();
    this.fetchNewUsers();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  fetchFakeUsers() {
    for (let i = 0; i < this.state.totalUsers; i++) {
      const user = {
        name: Faker.name.firstName(),
        avatar: Faker.internet.avatar(),
      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }));
    }
  }

  showUsers = () => {
    const { users, filterUsers } = this.state;
    return users
      .filter(user => user.name.toLowerCase().includes(filterUsers.toLowerCase()))
      .map((user, i) =>
        <UserList
          key={i}
          user={user}
        />
      )
  }

  fetchNewUsers() {
    window.onscroll = _.debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.loadMore();
      }
    }, 200);
  }

  loadMore = () => {
    this.setState({ loading: true })
    for (var i = 0; i < 20; i++) {
      const newUser = {
        name: Faker.name.firstName(),
        avatar: Faker.internet.avatar(),
      }
      this.setState(prevState => ({
        users: [...prevState.users, newUser],
      }));
    }
  }

  render() {
    const searchWithDebounce = _.debounce(text => this.setState({ filterUsers: text }), 500)
    const { filterUsers, loading } = this.state;
    return (
      <div className="container">
        <SearchUser onSearchUser={searchWithDebounce} />
        <div className="row">
          {this.showUsers()}
        </div>

        {
          !filterUsers && loading ?
            <div className="text-center mt-5 mb-5">
              <div className="spinner-border text-primary loader" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            :
            null
        }
      </div>
    )
  }

}

export default Users;
