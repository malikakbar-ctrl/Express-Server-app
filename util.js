async function doSomeHeavyTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done after delay");
    }, 3000);
  });
}

module.exports = { doSomeHeavyTask };

