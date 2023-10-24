// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('J06g2KAUwjYA8DGBnxQs1bLd2YvXdz23kqlA6zfc','q6svu6cBR2D1NqHRWKKFnQ4FyayljKMLywnvDJFS');
Parse.serverURL = 'https://parseapi.back4app.com/';