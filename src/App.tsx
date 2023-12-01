import "./App.css";

function App() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          throw new Error("Production sentry error");
        }}
      >
        Break the world
      </button>
    </>
  );
}

export default App;
