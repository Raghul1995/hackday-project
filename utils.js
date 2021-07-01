var fs = require('fs');


function getDishes() {
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

async function getOneDish(id) {
  const oneDish = await getDishes();
  return oneDish.menu.find(dish => dish.id == id)

}

async function getRandomDish() {
  const dishes = await getDishes();
  const randNum = Math.floor(Math.random() * dishes.menu.length);
  return dishes.menu[randNum];
}


module.exports = {
  getDishes,
  getRandomDish,
  getOneDish
}