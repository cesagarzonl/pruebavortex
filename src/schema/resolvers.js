module.exports = {
  Query: {
    displayName: () => users,
  },
  Mutation: {
    createUser: (_, data) => {
      cut = data.name.charAt(0);
      cut2 = data.lastname.charAt(0);
      cut3 = cut+"."+cut2
      const newUser = Object.assign({id: users.length + 1},{initial:cut3}, data);
      users.push(newUser);
      return newUser;
    }
  },
};

const users = [
  {
    id: 1,
    name: 'pedro',
    lastname: 'The Best Query Language',
    initial: "p.T"
  },
  {
    id: 2,
    name: 'juam',
    lastname: 'Awesome GraphQL Client',
    initial:"j.A"
  },

];
  Mutation: {
    createUser: (_, data) => {
      cut = data.name.charAt(0);
      cut2 = data.lastname.charAt(0);
      cut3 = cut+"."+cut2
      const newUser = Object.assign({id: users.length + 1},{initial:cut3}, data);
      users.push(newUser);
      return newUser;
    }
  }