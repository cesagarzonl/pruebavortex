module.exports = {
  Query: {
    displayName: () => users,
    profitableUserss: () => {var uu = users
      uu.profitable(function (a, b){

         return a.localeCompare(b);
         console.log(b)
      })



    },
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
    id: 777,
    name: 'pedro',
    lastname: 'The Best Query Language',
    initial: "p.T",
    profitable: 777
  },
  {
    id: 7,
    name: 'juam',
    lastname: 'Awesome GraphQL Client',
    initial:"j.A",
    profitable: 7
  },
  {
    id: 77,
    name: 'jorge',
    lastname: 'anderson',
    initial:"j.A",
    profitable: 77
  },
];
