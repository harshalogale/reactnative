import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Modal, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ImageCard = ({ id, imageSource, title, liked, onLikeTap }) => {
    likeButtonTap = (id, liked, callback) => {
        if (callback) {
            callback(id, liked);
        }
    };

    const IconLiked = () => (
        <FontAwesome name="heart" size={24} color="red" />
    );
    const IconNotLiked = () => (
        <FontAwesome name="heart" size={24} color="lightgrey" />
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image
                        source={{ uri: imageSource }}
                        alt='Image'
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.labelTitle}>{title}</Text>
                <TouchableOpacity onPress={() => this.likeButtonTap(id, liked, onLikeTap)}>
                    <View style={styles.footerLike}>
                        <Text style={styles.labelLike}>Like</Text>
                        {
                            liked ? <IconLiked /> : <IconNotLiked />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: '#00f8',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 30,
        shadowOpacity: 0.5,
        shadowOffset: 10,
        shadowRadius: 10,
        shadowColor: 'blue'
    },
    containerImage: {
        justifyContent: 'center',
        padding: 20,
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowOffset: 5,
        shadowRadius: 10,
        shadowColor: 'black'
    },
    image: {
        height: 200,
        resizeMode: 'contain'
    },
    labelTitle: {
        flex: 2,
        fontSize: 16,
        fontWeight: '800',
        alignContent: 'flex-start',
        width: 'auto'
    },
    labelLike: {
        fontSize: 16,
        fontWeight: '600',
        paddingRight: 8,
        width: 'auto'
    },
    icon: {
        flex: 1,
        padding: 8
    },
    footer: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        height: 40,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    footerLike: {
        flexDirection: 'row',
    }
});

export default ImageCard;