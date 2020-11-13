import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

async function checkNotificationGranted(): Promise<Permissions.PermissionStatus> {
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
        }
        return finalStatus;
    } else {
        alert('Must use physical device for Push Notifications');
    }
    return Permissions.PermissionStatus.UNDETERMINED;
}

export async function registerForPushNotifications() {
    const status = await checkNotificationGranted()
    console.log(status)
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
};

export async function getPushNotificationToken(setToken: Function) {
    const granted = await checkNotificationGranted()
    if (granted == Permissions.PermissionStatus.GRANTED) {
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        setToken(token)
        console.log(token)
    }
};