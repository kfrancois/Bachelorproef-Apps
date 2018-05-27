const faker = require('faker');

const items = (amount) => {
    const arr = [];
    for(let i = 0; i < amount; i++) {
      arr.push({ key: i.toString(), name: faker.name.findName(), gender: faker.random.boolean() },);
    }
    return arr
  };

  console.log(items(1));

