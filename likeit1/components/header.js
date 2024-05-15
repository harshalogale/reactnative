import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

const Header = ({ headerTitle, likedCount }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text style={styles.labelTitle}>{headerTitle}</Text>
            </View>
            <View style={styles.containerRight}>
                <FontAwesomeIcon icon={faHeart} size={32} style={styles.iconLike} />
                <Text style={styles.labelLikeCount}>{likedCount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#00f3',
        width: '100%'
    },
    containerLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 8
    },
    containerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        width: 80
    },
    labelTitle: {
        fontSize: 24,
        fontWeight: '600',
        padding: 8,
        alignContent: 'flex-start',
        color: 'black',
        height: 50
    },
    labelLikeCount: {
        fontSize: 24,
        fontWeight: '600',
        padding: 8,
        color: 'black',
        justifyContent: 'center'
    },
    iconLike: {
        color: 'red'
    }
});

export default Header;