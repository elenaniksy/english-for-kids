import { Category } from './Category';
import defaultCards from '../common/defaultCards';
const mongoose = require('mongoose');

let databaseModel;
const url =
  'mongodb+srv://heroku-user:Dbn5AhaPhQI9lNlO@cluster0.61trq.mongodb.net/efk-database?retryWrites=true&w=majority';
let categories: Category[] = [
  {
    id: 1,
    category: 'action',
    items: [
      {
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],
  },
  {
    id: 2,
    category: 'animals',
    items: [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/cat.jpg',
        audioSrc: 'audio/cat.mp3',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'img/chick.jpg',
        audioSrc: 'audio/chick.mp3',
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'img/chicken.jpg',
        audioSrc: 'audio/chicken.mp3',
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
    ],
  },
  {
    id: 3,
    category: 'colors',
    items: [
      {
        word: 'red',
        translation: 'красный',
        image: 'img/red.jpg',
        audioSrc: 'audio/red.mp3',
      },
      {
        word: 'green',
        translation: 'зелёный',
        image: 'img/green.jpg',
        audioSrc: 'audio/green.mp3',
      },
      {
        word: 'blue',
        translation: 'синий',
        image: 'img/blue.jpg',
        audioSrc: 'audio/blue.mp3',
      },
      {
        word: 'yellow',
        translation: 'жёлтый',
        image: 'img/yellow.jpg',
        audioSrc: 'audio/yellow.mp3',
      },
      {
        word: 'white',
        translation: 'белый',
        image: 'img/white.jpg',
        audioSrc: 'audio/white.mp3',
      },
      {
        word: 'black',
        translation: 'чёрный',
        image: 'img/black.jpg',
        audioSrc: 'audio/black.mp3',
      },
      {
        word: 'purple',
        translation: 'фиолетовый',
        image: 'img/purple.jpg',
        audioSrc: 'audio/purple.mp3',
      },
      {
        word: 'pink',
        translation: 'розовый',
        image: 'img/pink.jpg',
        audioSrc: 'audio/pink.mp3',
      },
    ],
  },
  {
    id: 4,
    category: 'clothiers',
    items: [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
    ],
  },
  {
    id: 5,
    category: 'emotions',
    items: [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],
  },
  {
    id: 6,
    category: 'fruits',
    items: [
      {
        word: 'banana',
        translation: 'банан',
        image: 'img/banana.jpg',
        audioSrc: 'audio/banana.mp3',
      },
      {
        word: 'orange',
        translation: 'апельсин',
        image: 'img/orange.jpg',
        audioSrc: 'audio/orange.mp3',
      },
      {
        word: 'apple',
        translation: 'яблоко',
        image: 'img/apple.jpg',
        audioSrc: 'audio/apple.mp3',
      },
      {
        word: 'apricot',
        translation: 'абрикос',
        image: 'img/apricot.jpg',
        audioSrc: 'audio/apricot.mp3',
      },
      {
        word: 'pineapple',
        translation: 'ананас',
        image: 'img/pineapple.jpg',
        audioSrc: 'audio/pineapple.mp3',
      },
      {
        word: 'peach',
        translation: 'персик',
        image: 'img/peach.jpg',
        audioSrc: 'audio/peach.mp3',
      },
      {
        word: 'pear',
        translation: 'груша',
        image: 'img/pear.jpg',
        audioSrc: 'audio/pear.mp3',
      },
      {
        word: 'lemon',
        translation: 'лимон',
        image: 'img/lemon.jpg',
        audioSrc: 'audio/lemon.mp3',
      },
    ],
  },
  {
    id: 7,
    category: 'transport',
    items: [
      {
        word: 'train',
        translation: 'поезд',
        image: 'img/train.jpg',
        audioSrc: 'audio/train.mp3',
      },
      {
        word: 'ship',
        translation: 'корабль',
        image: 'img/ship.jpg',
        audioSrc: 'audio/ship.mp3',
      },
      {
        word: 'airplane',
        translation: 'самолёт',
        image: 'img/airplane.jpg',
        audioSrc: 'audio/airplane.mp3',
      },
      {
        word: 'car',
        translation: 'машина',
        image: 'img/car.jpg',
        audioSrc: 'audio/car.mp3',
      },
      {
        word: 'bus',
        translation: 'автобус',
        image: 'img/bus.jpg',
        audioSrc: 'audio/bus.mp3',
      },
      {
        word: 'subway',
        translation: 'метро',
        image: 'img/subway.jpg',
        audioSrc: 'audio/subway.mp3',
      },
      {
        word: 'bicycle',
        translation: 'велосипед',
        image: 'img/bicycle.jpg',
        audioSrc: 'audio/bicycle.mp3',
      },
      {
        word: 'taxi',
        translation: 'такси',
        image: 'img/taxi.jpg',
        audioSrc: 'audio/taxi.mp3',
      },
    ],
  },
  {
    id: 8,
    category: 'vegetables',
    items: [
      {
        word: 'cucumber',
        translation: 'огурец',
        image: 'img/cucumber.jpg',
        audioSrc: 'audio/cucumber.mp3',
      },
      {
        word: 'tomato',
        translation: 'помидор',
        image: 'img/tomato.jpg',
        audioSrc: 'audio/tomato.mp3',
      },
      {
        word: 'potato',
        translation: 'картофель',
        image: 'img/potato.jpg',
        audioSrc: 'audio/potato.mp3',
      },
      {
        word: 'pumpkin',
        translation: 'тыква',
        image: 'img/pumpkin.jpg',
        audioSrc: 'audio/pumpkin.mp3',
      },
      {
        word: 'onion',
        translation: 'лук',
        image: 'img/onion.jpg',
        audioSrc: 'audio/onion.mp3',
      },
      {
        word: 'pepper',
        translation: 'перец',
        image: 'img/pepper.jpg',
        audioSrc: 'audio/pepper.mp3',
      },
      {
        word: 'cabbage',
        translation: 'капуста',
        image: 'img/cabbage.jpg',
        audioSrc: 'audio/cabbage.mp3',
      },
      {
        word: 'eggplant',
        translation: 'баклажан',
        image: 'img/eggplant.jpg',
        audioSrc: 'audio/eggplant.mp3',
      },
    ],
  },
];

export async function getCategories(): Promise<Category[]> {
  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    databaseModel = require('../models/categoryModel');
    const doc = await databaseModel.find({}).exec();
    categories = doc;
  } catch (e) {
    console.log(e);
  }
  return Promise.resolve<Category[]>(categories);
}

export async function initDataBase(): Promise<void> {
  try {
    const databaseModel = require('../models/categoryModel');
    databaseModel.deleteMany({}, function (err: Error) {
      if (err) return console.log(err);
    });
    const id = categories.length + 1;
    defaultCards.forEach((card: Category) => {
      const model = new databaseModel({ ...card, id, items: card.items });
      model.save();
      return Promise.resolve(model);
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getCategoryById(
  categoryId: number
): Promise<Category | undefined> {
  return Promise.resolve(categories.find((cat) => cat.id === categoryId));
}

export async function createCategory(category: Category): Promise<void> {
  try {
    databaseModel = require('../models/categoryModel');
    const doc = await databaseModel.find({}).exec();
    doc.forEach((element: Category) => {
      const isExist =
        (element.category.toLowerCase() === category.category.toLowerCase()) !==
        undefined;
      if (isExist) {
        return Promise.reject(
          new Error(`Category with name ${category.category} is already exists`)
        );
      }
    });
    const id = categories.length + 1;
    const model = new databaseModel({ ...category, id, items: [] });
    await model.save();
    return Promise.resolve(model);
  } catch (e) {
    console.log(e);
  }
}

export async function deleteCategory(categoryId: string): Promise<void> {
  databaseModel = require('../models/categoryModel');
  databaseModel.deleteOne({ category: categoryId }, function (err: Error) {
    if (err) return console.log(err);
  });
  return Promise.resolve();
}

export function updateCategory(
  category: string,
  newValue: string
): Promise<void> {
  databaseModel = require('../models/categoryModel');
  databaseModel.updateOne(
    { category: category },
    { category: newValue },
    (err: Error) => {
      if (err) return console.log(err);
    }
  );
  return Promise.resolve();
}