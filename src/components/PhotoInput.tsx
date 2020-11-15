import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export function PhotoInput() {
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.pictureStyle} onPress={pickImage}>
        <Icon name="control-point" style={styles.pictureText} />
        <Text style={styles.pictureText}>adicionar foto</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 14,
    color: '#434343',
    //fontFamily: 'roboto regular', // Testar pra ver se a fonte muda
  },
  pictureStyle: {
    // Consertar detalhes
    width: 128,
    height: 128,
    marginTop: 32,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e7e7',
    borderRadius: 2,
  },
  pictureText: {
    color: '#757575',
  },
});
