export default function EndScreen({
  setInitialized,
  startTime,
  endTime,
  wordCount,
}) {
  const handleTryAgainButton = () => {
    setInitialized(false);
  };

  const calculateWPM = (startTime, endTime) => {
    const totalTimeTaken = (endTime - startTime) / 1000 / 60;
    return (wordCount / totalTimeTaken).toFixed(0);
  };

  return (
    <div>
      <p>WPM : {calculateWPM(startTime, endTime)}</p>
      <button onClick={handleTryAgainButton}>Try Again</button>
    </div>
  );
}
