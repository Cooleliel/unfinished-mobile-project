import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { Avatar } from 'react-native-paper';

interface PhotoPickerProps {
    onPhotoSelected: (uri: string) => void;
}

const PhotoPickerComponent: React.FC<PhotoPickerProps> = ({ onPhotoSelected }) => {
    
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const handleSelectPhoto = () => {
        Alert.alert(
            "Changer la photo de profil",
            "Choisissez une option",
            [
                {
                    text: "Prendre une photo",
                    onPress: () => takePhoto()
                },
                {
                    text: "Choisir depuis la galerie",
                    onPress: () => chooseFromLibrary()
                },
                {
                    text: "Annuler",
                    style: "cancel"
                }
            ]
        );
    };

    const takePhoto = () => {
    };

    const chooseFromLibrary = () => {
    };

    const handleImagePickerResponse = () => {
        
    };

    return (
        <TouchableOpacity onPress={handleSelectPhoto}>
            {photoUri ? (
                <View
                    style={{
                        borderWidth: 2,
                        borderColor: '#2E8B57',
                        borderRadius: 999
                    }}
                >
                    <Avatar.Image
                        source={require('../../assets/images/avatar.webp')}
                        size={70}
                    />
                </View>
            ) : (
            <View style={styles.placeholderPhoto} />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderPhoto: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#e1e1e1',
    },
});

export default PhotoPickerComponent;