//Задание
// id - число,не повторяется. Число от 1 до 25
// url - строка, адрес картинки, не повторяется. Число от 1 до 25
// description - строка, описание фото
// likes - число, случайное число от 15 до 200
// comments - массив объектов, кол-во комментариев от 0 до 30, случайные
// avatar - строка, img/avatar-{{случайное число от 1 до 6}}.svg

// Набор имен
const NAMES = [
  'Алена',
  'Света',
  'Иван',
  'Максим',
  'Олег',
  'Катя',
  'Руслан',
  'Оля',
  'Юля',
  'Рома',
  'Дима',
  'Саша',
  'Таня',
];
// Набор сообщений
const COMMENTS = [
  'Все отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
//Описание
const DESCRIPTIONS = [
  'Тайланд',
  'На море',
  'На работе',
  'Прекрасный день',
  'Активные выходные',
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MAX_COMMENTS_COUNT = 30;
const PHOTOS_COUNT = 25;
const SIMILAR_PHOTOS = 25;

// Найдем случайный индекс из массива
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// Найдем уникальный индификатор
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      currentValue = getRandomInteger(min, max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
const getRandomArrayElemrnt = (min, max) => getRandomInteger(min, max);
// Создаем Комментарий
const createComment = () => {
  const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
  const photoId = generatePhotoId();
  const randomNameIndex = createRandomIdFromRangeGenerator (1, NAMES.length - 1);
  const randomCommentIndex = getRandomInteger (1, COMMENTS.length - 1);
  return {
    id: photoId,
    avatar: `img/avatar-${getRandomArrayElemrnt(AVATAR_MIN, AVATAR_MAX)}.svg`,
    name: NAMES[randomNameIndex],
    comment: COMMENTS [randomCommentIndex],
  };
};
// Создаем Фото
function createPhoto() {
  const randomDescriptionIndex = getRandomInteger(1, DESCRIPTIONS.length - 1);
  return {
    // eslint-disable-next-line no-undef
    id: photoId,
    comment: Array.from({length: getRandomInteger(0, MAX_COMMENTS_COUNT)}, createComment),
    url: `photos/${getRandomArrayElemrnt(1, PHOTOS_COUNT)}.jpg`,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  };
}

// Генерация 25 случайных объекта
const photos = Array.from({length: SIMILAR_PHOTOS}, createPhoto);
// eslint-disable-next-line no-console
console.log(photos);
