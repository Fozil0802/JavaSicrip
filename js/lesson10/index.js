//  1-masala

const users = [
  { name: "Fozil", id: 1 },
  { name: "Utkirbek", id: 2 },
  { name: "Jaloliddin", id: 3 },
  { name: "Okhunjon", id: 4 },
];

const onSearch = (text) => {
  let newArr = [];
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].name.includes(text.toUpperCase()) ||
      users[i].name.includes(text.toLowerCase())
    ) {
      newArr.push(users[i]);
    }
  }
  console.log(newArr);
};
onSearch('k');
