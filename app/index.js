import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Colors from '../constants/Colors';

export default function Index() {
  // This is a splash/loading screen that redirects based on authentication state
  return <Redirect href="/home" />;
}
