import {SafeAreaView} from 'react-native';
import { useThemeUpdate } from '../../theme/theme-manager';
import SwitchButton from '../Components/SwitchButton';

const SettingsScreen = ({navigation}) => {
  const toggleTheme = useThemeUpdate();
  return (
    <SafeAreaView style={{flex: 1}}>
      <SwitchButton changeHandle={toggleTheme}/>
    </SafeAreaView>
  );
};

export default SettingsScreen;