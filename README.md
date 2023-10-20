# Challenges programming

## Challenge 1 - Easy

The elves bought a gift-wrapping machine this year. But it's not programmed! We need to create an algorithm that helps it in the task.

The machine receives an array of gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:

```javascript
# Example

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
[
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
]
```

As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

Note: The \n represents a line break.

Watch out! Make sure you put the right number of * symbols to wrap completely the string. But not too many! Just enough to cover the string.

Ah, and do not mutate the original array!

## Challenge 2 - Easy

A millionaire bought a social network, and he doesn't bring good news. He has announced that each time an employee misses a working day due to a holiday, they will have to compensate it with two extra hours another working day of the same year.

Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.

Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, return the number of extra hours that would be done during that year:

```javascript

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year
```

Things to keep in mind:

- The year may be a leap year. Make the checks you need for it, if necessary.
- Although the holiday is December 31, the extra hours will be done the same year.
- Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.

## Challenge 3

You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a weight limit.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. You can't split gifts packs

```javascript
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2
```

Things to keep in mind:

- The gifts pack can't be splitted.
- Gifts and reindeers' names length will always be greater than 0

## Challenge 4

Santa Claus needs to review his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width, and height.

Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes in one so that each box contains another (which in turn contains another, and so on).

Each box represents its measures with an object. For example:

```javascript
{l: 2, w: 3, h: 2}
```

This means that the box has a length of 2, a width of 3 and a height of 2.

A box fits into another box if all the sides of the first are smaller than the sides of the second. The elves have told us that the boxes cannot be rotated, so you cannot put a box of 2x3x2 in a box of 3x2x2. Let's see some examples

```javascript
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
```

In the previous example, the smallest box fits into the largest box. Therefore, it is possible to pack all the boxes in one. Now let's see a case that does not

```javascript
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false
```

In the previous example, the smallest box fits into the middle box, but the middle box does not fit into the largest box. Therefore, it is not possible to pack all the boxes in one.

Note that the boxes may not come in order:

```javascript
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes) // true
```

In the previous example, the first box fits into the third, and the third into the second. Therefore, it is possible to pack all the boxes in one.

Things to keep in mind:

- The boxes cannot be rotated because the elves have told us that the machine is not ready.
- The boxes may come in any order.
- The boxes are not always squares, they could be rectangles.
