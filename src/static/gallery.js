const emptyArray = [];
const numberOfObjects = 30;

for (let i = 0; i < numberOfObjects; i++) {
  const obj = {
    src: `gallery/personal-${i + 1}.jpg`,
  };
  emptyArray.push(obj);
}

export default emptyArray;
