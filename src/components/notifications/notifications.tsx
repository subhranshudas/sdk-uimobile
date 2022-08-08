import React from 'react';
import { View, Text } from 'react-native';
import { EPNSActivity } from '../loaders';

export type NotificationsProps = {
  title: string;
};

export const Notifications = (props: NotificationsProps) => {
  return (
    <View>
        <Text>Notification component {props.title}</Text>
        <EPNSActivity size="small" />
    </View>
  );
};