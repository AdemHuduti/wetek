import React from 'react';
import Faker from 'faker';
import UserList from './components/UserList';

class App extends React.Component {  
  state = {
    users: []
  }
 
  componentWillMount() {
    for (let i = 0; i < 20; i++) {
      const user = {
        name: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        avatar: Faker.internet.avatar(),
      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }));
    }
  }
 
  showUsers = () => {
    const { users } = this.state;
    return users.map((user, i) => 
      <UserList 
        key={i}
        user={user}
      />
    )
  }
 
  render() {
    return (
      <div className="container">
        <div className="row ">
          {this.showUsers()}
        </div>
      </div>
    )
  }

}

export default App;
