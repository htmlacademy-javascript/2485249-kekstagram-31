import {createRandomIdFromRangeGenerator, getRandomArrayElement, getRandomInteger} from './util.js';
import {NAMES, COMMENTS, DESCRIPTIONS} from './util.js';
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MAX_COMMENTS_COUNT = 30;
const PHOTOS_COUNT = 25;
const SIMILAR_PHOTOS = 25;
const generateCommentId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT * MAX_COMMENTS_COUNT);
// Создаем Комментарий
const createComment = () => {
  const CommentId = generateCommentId();
  const randomNameIndex = createRandomIdFromRangeGenerator (1, NAMES.length - 1);
  const randomCommentIndex = getRandomInteger (1, COMMENTS.length - 1);
  return {
    id: CommentId,
    avatar: `img/avatar-${getRandomArrayElement(AVATAR_MIN, AVATAR_MAX)}.svg`,
    name: NAMES[randomNameIndex],
    comment: COMMENTS [randomCommentIndex],
  };
};

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
// Создаем Фото
const createPhoto = () => {
  const randomDescriptionIndex = getRandomInteger(1, DESCRIPTIONS.length - 1);
  const photoId = generatePhotoId();
  return {
    id: photoId,
    comments: Array.from({length: getRandomInteger(0, MAX_COMMENTS_COUNT)}, createComment),
    url: `photos/${getRandomArrayElement(1, PHOTOS_COUNT)}.jpg`,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  };
};

// Генерация 25 случайных объекта
const photos = () => Array.from({length: SIMILAR_PHOTOS}, createPhoto);
export {photos};
