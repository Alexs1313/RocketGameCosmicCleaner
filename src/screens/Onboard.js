import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppBackground from '../components/AppBackground';
import { useState } from 'react';
import LargeButton from '../components/LargeButton';
import { onboard } from '../data/onboard';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const Onboard = () => {
  const [step, setStep] = useState(0);
  const navigation = useNavigation();

  const handleNextStep = () => {
    step === 4 ? navigation.replace('Home') : setStep(step + 1);
  };

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={onboard[step].image}
            style={[
              step === 0 && { marginTop: height * 0.11 },
              step === 1 && { marginTop: height * 0.16, marginBottom: 80 },
              step === 2 && { marginTop: height * 0.05, marginBottom: 12 },
              step === 3 && { marginTop: height * 0.053, marginBottom: 33 },
              step === 4 && { marginTop: height * 0.11 },
            ]}
          />

          <View style={styles.welcomeContainer}>
            <Text style={styles.title}>{onboard[step].title}</Text>
            <Text style={styles.subtitle}>{onboard[step].subtitle}</Text>
            <LargeButton
              title={onboard[step].buttonText}
              onPress={handleNextStep}
            />
          </View>
        </View>
      </ScrollView>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
  },
  welcomeContainer: {
    width: '100%',
    paddingTop: 27,
    paddingBottom: 41,
    paddingHorizontal: 36,
    borderRadius: 52,
    backgroundColor: '#161B24',
    borderWidth: 2,
    borderColor: '#35435C',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 22,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 36,
  },
});

export default Onboard;
