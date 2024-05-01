const emptyArray = [];
const numberOfObjects = 30;

for (let i = 0; i < numberOfObjects; i++) {
  const obj = {
    src: `gallery/img-${i}.jpg`,
  };
  emptyArray.push(obj);
}

export default emptyArray;
