export default function EndScreen({
  setInitialized,
  startTime,
  endTime,
  wordCount,
  fixedGameWords,
  inputWords,
}) {
  const handleTryAgainButton = () => {
    setInitialized(false);
  };

  const calculateCorrectWords = (array1, array2) => {
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        count++;
      }
    }
    return count;
  };

  const calculateWPM = (
    startingTime,
    endingTime,
    renderedArray,
    inputArray
  ) => {
    const totalTimeTaken = (endingTime - startingTime) / 1000 / 60;
    const wordCount = calculateCorrectWords(renderedArray, inputArray);
    return (wordCount / totalTimeTaken).toFixed(0);
  };

  return (
    <div>
      <p>
        WPM : {calculateWPM(startTime, endTime, fixedGameWords, inputWords)}
      </p>
      <button onClick={handleTryAgainButton}>Try Again</button>
    </div>
  );
}
