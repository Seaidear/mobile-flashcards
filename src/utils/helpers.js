import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATIONS_ASYNCSTORAGE_KEY = 'flashcards_notification';

export const generateUUID = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

export const colors = {
  homeBackgroundColor: '#7e57c2',
  homeCardBackgroundColor: '#fff9e6',
  allScreensBackgroundColor: '#fff9e6',
  headerColor: '#5e35b1',
  darkButtonColor: '#673ab7',
  darkTextColor: '#9575cd',
  quizCardColor: '#b39ddb',
};

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATIONS_ASYNCSTORAGE_KEY).then(() =>
    Notifications.cancelScheduledNotificationAsync(),
  );
};

const createNotification = () => ({
  title: 'Time to learn!',
  body: "It's time for your daily dose of quiz fun.",
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
  AsyncStorage.getItem(NOTIFICATIONS_ASYNCSTORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(11);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            });
            AsyncStorage.setItem(
              NOTIFICATIONS_ASYNCSTORAGE_KEY,
              JSON.stringify(true),
            );
          }
        });
      }
    });
};
