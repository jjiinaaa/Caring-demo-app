/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import './src/styles/global.css';
import tw from 'tailwind-react-native-classnames';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={tw`text-3xl font-black text-red-600`}>{title}</Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [screenEvent, setScreenEvent] = useState('No Event');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const { ScreenReceiver } = NativeModules;
    const eventEmitter = new NativeEventEmitter(ScreenReceiver);
    const subscription = eventEmitter.addListener('ScreenEvent', (event) => {
      console.log(`Screen Event Received: ${event}`);
      setScreenEvent(event); // Update state based on screen event
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View style={tw`flex-1 items-center justify-center`}>
          {/* Dynamic UI based on screen state */}
          {screenEvent === 'SCREEN_OFF' ? (
            <Text style={tw`text-2xl font-bold text-red-500 mt-4`}>Screen is OFF</Text>
          ) : screenEvent === 'SCREEN_ON' ? (
            <Text style={tw`text-2xl font-bold text-green-500 mt-4`}>Screen is ON</Text>
          ) : (
            <Text style={tw`text-lg text-gray-600 mt-4`}>Waiting for Screen Event...</Text>
          )}
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit{' '}
            <Text
              style={tw`
              font-bold
              text-blue-600
            `}>
              App.tsx, Ap
            </Text>{' '}
            to change this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">Read the docs to discover what to do next:</Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
