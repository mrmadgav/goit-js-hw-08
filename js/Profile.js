//созадть профиль юзера
const arr = [
  {
    name: 'John',
    last: 'Week1',
    height: 200,
    weight: 100,
    photo:
      'https://cdn.onebauer.media/one/empire-images/reviews_films/5898af57ccd4a51d075e10e6/john-wick-2.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
  },
  {
    name: 'John',
    last: 'Week2',
    height: 200,
    weight: 100,
    photo:
      'https://cdn.onebauer.media/one/empire-images/reviews_films/5898af57ccd4a51d075e10e6/john-wick-2.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
  },
  {
    name: 'John',
    last: 'Week3',
    height: 200,
    weight: 100,
    photo:
      'https://cdn.onebauer.media/one/empire-images/reviews_films/5898af57ccd4a51d075e10e6/john-wick-2.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
  },
];
const heroes = (arr, str) => {
  const ul = document.querySelector(str);
  arr.forEach(({ name, last, height, weight, photo }) => {
    const template = `<li class='user-item'> <img src=${photo}> <h2>${name}</h2> <h3>${last}</h3> <p>height: ${height}</p> <p>weight: ${weight}</p></li>`;
    ul.insertAdjacentHTML('beforeend', template);
  });
  console.log(ul);
};
heroes(arr, '.user-list');