import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './header.js';
import ImageCard from './imageCard.js';

const LikeIt = () => {
    const [likeCount, setLikeCount] = React.useState(0);
    const [headerTitle] = React.useState('Like It');

    const inputCards = [
        {
            id: 'cub',
            image: "https://thumbnails.production.thenounproject.com/gBGw-EMv7-dYEnUpBG38FRRs6X8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/21926DE2-0313-42B3-A34B-62B4384124F3.jpg",
            title: 'Cub',
            liked: false
        },
        {
            id: 'waterfall',
            image: "https://thumbnails.production.thenounproject.com/Lg6eGgZg8db0y1U3jAIC46yXBHs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/waterfalls_in_iceland-scopio-0a64a13e-2d15-4fbc-8f26-d84860504e16.jpg",
            title: 'Waterfall',
            liked: false
        },
        {
            id: 'milkyway',
            image: "https://thumbnails.production.thenounproject.com/Xu7RiKRDy65HORPVkCmwiXX25ok=/fit-in/1000x1000/photos.production.thenounproject.com/photos/daa19d83-00e0-4b61-a7a3-0094aefea34b.jpg",
            title: 'Milky Way',
            liked: false
        },
        {
            id: 'seafloor',
            image: "https://thumbnails.production.thenounproject.com/TX5oyQDoN7vNZXgRree_HZXilZk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/20c58789-a6e1-45e8-82ea-eb4b27040bbf.jpg",
            title: 'Sea Floor',
            liked: false
        }
    ];
    const [cards, setCards] = React.useState([
        {
            id: 'cub',
            image: "https://thumbnails.production.thenounproject.com/gBGw-EMv7-dYEnUpBG38FRRs6X8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/21926DE2-0313-42B3-A34B-62B4384124F3.jpg",
            title: 'Cub',
            liked: false
        },
        {
            id: 'waterfall',
            image: "https://thumbnails.production.thenounproject.com/Lg6eGgZg8db0y1U3jAIC46yXBHs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/waterfalls_in_iceland-scopio-0a64a13e-2d15-4fbc-8f26-d84860504e16.jpg",
            title: 'Waterfall',
            liked: false
        },
        {
            id: 'milkyway',
            image: "https://thumbnails.production.thenounproject.com/Xu7RiKRDy65HORPVkCmwiXX25ok=/fit-in/1000x1000/photos.production.thenounproject.com/photos/daa19d83-00e0-4b61-a7a3-0094aefea34b.jpg",
            title: 'Milky Way',
            liked: false
        },
        {
            id: 'seafloor',
            image: "https://thumbnails.production.thenounproject.com/TX5oyQDoN7vNZXgRree_HZXilZk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/20c58789-a6e1-45e8-82ea-eb4b27040bbf.jpg",
            title: 'Sea Floor',
            liked: false
        },
        {
            id: 'cub1',
            image: "https://thumbnails.production.thenounproject.com/gBGw-EMv7-dYEnUpBG38FRRs6X8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/21926DE2-0313-42B3-A34B-62B4384124F3.jpg",
            title: 'Cub1',
            liked: false
        },
        {
            id: 'waterfall1',
            image: "https://thumbnails.production.thenounproject.com/Lg6eGgZg8db0y1U3jAIC46yXBHs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/waterfalls_in_iceland-scopio-0a64a13e-2d15-4fbc-8f26-d84860504e16.jpg",
            title: 'Waterfall1',
            liked: false
        },
        {
            id: 'milkyway1',
            image: "https://thumbnails.production.thenounproject.com/Xu7RiKRDy65HORPVkCmwiXX25ok=/fit-in/1000x1000/photos.production.thenounproject.com/photos/daa19d83-00e0-4b61-a7a3-0094aefea34b.jpg",
            title: 'Milky Way1',
            liked: false
        },
        {
            id: 'seafloor1',
            image: "https://thumbnails.production.thenounproject.com/TX5oyQDoN7vNZXgRree_HZXilZk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/20c58789-a6e1-45e8-82ea-eb4b27040bbf.jpg",
            title: 'Sea Floor1',
            liked: false
        },
        {
            id: 'cub2',
            image: "https://thumbnails.production.thenounproject.com/gBGw-EMv7-dYEnUpBG38FRRs6X8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/21926DE2-0313-42B3-A34B-62B4384124F3.jpg",
            title: 'Cub2',
            liked: false
        },
        {
            id: 'waterfall2',
            image: "https://thumbnails.production.thenounproject.com/Lg6eGgZg8db0y1U3jAIC46yXBHs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/waterfalls_in_iceland-scopio-0a64a13e-2d15-4fbc-8f26-d84860504e16.jpg",
            title: 'Waterfall2',
            liked: false
        },
        {
            id: 'milkyway2',
            image: "https://thumbnails.production.thenounproject.com/Xu7RiKRDy65HORPVkCmwiXX25ok=/fit-in/1000x1000/photos.production.thenounproject.com/photos/daa19d83-00e0-4b61-a7a3-0094aefea34b.jpg",
            title: 'Milky Way2',
            liked: false
        },
        {
            id: 'seafloor2',
            image: "https://thumbnails.production.thenounproject.com/TX5oyQDoN7vNZXgRree_HZXilZk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/20c58789-a6e1-45e8-82ea-eb4b27040bbf.jpg",
            title: 'Sea Floor2',
            liked: false
        }
    ]);

    const updateLike = (e) => {
        { console.log('current target dataset =', e, e.currentTarget, e.currentTarget.dataset) }
        setLikeCount(123);
    };

    const onLikeToggle = (cardId) => { 
        console.log(cardId)
        setCards(
            cards.map((card) => {
                if (card.id == cardId) {
                    card.liked = !card.liked
                    setLikeCount(likeCount + (card.liked ? 1 : -1))
                }
                return card
            })
        )
    }

return (
    <SafeAreaView style={styles.container}>
        <Header
            headerTitle={"Like It"}
            likedCount={likeCount}
        />
        <ScrollView style={styles.scrollView}>
            {
                cards.map(card => {
                    return (
                        <ImageCard
                            id={card.id}
                            key={card.id}
                            imageSource={card.image}
                            title={card.title}
                            liked={card.liked}
                            onLikeTap={onLikeToggle}
                        />
                    )
                })
            }
        </ScrollView>
        <StatusBar backgroundColor='gray' />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        flex: 10,
        marginHorizontal: 20,
        width: '100%',
        paddingHorizontal: 16
    }
});

export default LikeIt;