import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Animated } from 'react-native';

// استخدام الصورة اللي انت مديها
const icedCoffeeImg = require('../assets/images/iced-coffee.png');

const NotFoundScreen = () => {
  const bounceValue = new Animated.Value(1);

  // أنيميشن للزرار
  const handlePressIn = () => {
    Animated.spring(bounceValue, {
      toValue: 0.9,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(bounceValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Error404</Text>
          <Text style={styles.subtitle}>Oops! Page Not Found</Text>
          <Text style={styles.message}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Text>

          <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
            <TouchableOpacity
              style={styles.button}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Link href="/">
                <Text style={styles.buttonText}>Return to Home</Text>
              </Link>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // خلفية شفافة
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 25,
  },
  button: {
    backgroundColor: '#FF4500',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
