import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';

export const StorageKeys = {
  Decks: 'Decks',
  Notifications: 'Notifications',
};

export const createNotification = () => ({
  title: 'What a great time to take a quiz',
  body: "It's time to test your knowledge! Are you prepared?",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(StorageKeys.Notifications)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            });

            AsyncStorage.setItem(
              StorageKeys.Notifications,
              JSON.stringify(true),
            );
          }
        });
      }
    });
};

export const clearLocalNotification = () =>
  AsyncStorage.removeItem(StorageKeys.Notifications).then(
    Notifications.cancelAllScheduledNotificationsAsync,
  );
