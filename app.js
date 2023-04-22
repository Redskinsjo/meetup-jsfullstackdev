const getOrderedList = (number) => {
  const list = [];
  for (let i = 0; i < number; i++) {
    list.push(i);
  }
  return list;
};

const getClassicList = (number) => {
  const list = [];
  for (let i = 0; i < number; i++) {
    if (i % 2 === 0) list.push(i + 10);
    else list.push(i + 1);
  }
  return list;
};

// 10 elements
const orderedWith10 = getOrderedList(10);
const classicWith10 = getClassicList(10);
// 10 000 elements
const orderedWithTenThousand = getOrderedList(10000);
const classicWithTenThousand = getClassicList(10000);
// 1 000 000 elements
const orderedWithMillion = getOrderedList(1000000);
const classicWithMillion = getClassicList(1000000);

const getNow = () => new Date().getMilliseconds();
const getDiffInS = (end, start) => ((end - start) / 1000).toFixed(6);

// Reading ~ 1 step
const read = async () => {
  const start = getNow();

  const promise = new Promise((resolve) => {
    //// reading from 10 elements array
    // const element = classicWith10[6];
    //// reading from 10 000 elements array
    // const element = classicWithTenThousand[6742];
    //// reading from 10 elements array
    const element = classicWithMillion[339300];
    resolve(element);
  });

  const result = await Promise.all([promise]);
  const end = getNow();

  const diff = getDiffInS(end, start);
  console.log(`${diff}s`, result);
};

// Inserting ~ N+1 steps
const insert = async () => {
  const start = getNow();

  const promise = new Promise((resolve) => {
    //// inserting from 10 elements array
    // const element = insertFnc(classicWith10, 2.5, 2);
    //// inserting from 10 000 elements array
    // const element = insertFnc(classicWithTenThousand, 909.5, 2);
    //// inserting from 10 elements array
    // const element = insertFnc(classicWithMillion, 202899.5, 2);
    resolve(element);
  });

  const result = await Promise.all([promise]);
  const end = getNow();

  const diff = getDiffInS(end, start);
  console.log(`${diff}s`, result);
};

const insertFnc = (array, value, index) => {
  Array.prototype.move = function (from, to, on = 1) {
    return this.splice(to, 0, ...this.splice(from, on)), this;
  };

  array.length = array.length + 1;

  for (let i = array.length - 2; i >= index; i--) {
    array.move(i, i + 1);
    if (i === index) array.splice(index, 1, value);
  }
  return array;
};

// Removing ~ N steps
const remove = async () => {
  const start = getNow();

  const promise = new Promise((resolve) => {
    //// inserting from 10 elements array
    // const element = removeFnc(classicWith10, 0);
    //// inserting from 10 000 elements array
    // const element = removeFnc(classicWithTenThousand, 909);
    //// inserting from 10 elements array
    const element = removeFnc(classicWithMillion, 101019);
    resolve(element);
  });

  const result = await Promise.all([promise]);

  const end = getNow();

  const diff = getDiffInS(end, start);
  console.log(`${diff}s`, result);
};

const removeFnc = (array, index) => {
  Array.prototype.move = function (from, to, on = 1) {
    return this.splice(to, 0, ...this.splice(from, on)), this;
  };

  array.splice(index, 1, undefined);

  for (let i = index + 1; i < array.length; i++) {
    array.move(i, i - 1);
    if (i === array.length - 1) array.splice(i, 1);
  }
  return array;
};

// Linear Searching ~ N steps
const search = async () => {
  const start = getNow();

  const promise = new Promise((resolve) => {
    //// inserting from 10 elements array
    // const element = linearSearchFnc(classicWith10, 18);
    //// inserting from 10 000 elements array
    // const element = linearSearchFnc(orderedWithTenThousand, 9999);
    //// inserting from 10 elements array
    const element = linearSearchFnc(orderedWithMillion, 1000000);
    resolve(element);
  });

  const result = await Promise.all([promise]);

  const end = getNow();

  const diff = getDiffInS(end, start);
  console.log(`${diff}s`, result);
};

const linearSearchFnc = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (array[i] === value) return i;
  }
  return null;
};

// Binary searching ~ few steps
const binarySearch = async () => {
  const start = getNow();

  const promise = new Promise((resolve) => {
    //// inserting from 10 elements array
    // const element = binarySearchFnc(orderedWith10, 7);
    //// inserting from 10 000 elements array
    // const element = binarySearchFnc(orderedWithTenThousand, 909);
    //// inserting from 10 elements array
    const element = binarySearchFnc(orderedWithMillion, 500000);
    resolve(element);
  });

  const result = await Promise.all([promise]);

  const end = getNow();

  const diff = getDiffInS(end, start);
  console.log(`${diff}s`, result);
};

const binarySearchFnc = (array, value) => {
  let max = array.length - 1;
  let min = 0;
  while (min <= max) {
    let midpointIndex = Math.floor((max - min) / 2);
    let midpointValue = array[midpointIndex];
    if (midpointValue === value) return midpointIndex;
    if (midpointValue < value) max = midpointIndex - 1;
    if (midpointValue > value) min = midpointIndex + 1;
  }
  return null;
};

// read();
// insert();
// remove();
search();
// binarySearch();
