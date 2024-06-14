export default function EndScreen({ setIsGameOver, setInitialized }) {
  const handleTryAgainButton = () => {
    setIsGameOver(false);
    setInitialized(false);
  };

  return (
    <div>
      <p>WPM : placeholder WPM</p>
      <button onClick={handleTryAgainButton}>Try Again</button>
    </div>
  );
}
