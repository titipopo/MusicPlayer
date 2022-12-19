import ThemeProvider from './src/theme/theme-manager';
import StartScreen from './src/Screen/Navigation/StartScreen';

const App = () => {
  return (
    <ThemeProvider>
      <StartScreen />
    </ThemeProvider>
  );
};

export default App;