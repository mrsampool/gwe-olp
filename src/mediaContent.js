import React from 'react';
import LibraryItem from './components/libraryItem/libraryItem';

const Media = {
        commonGround: {
            title: 'Common Ground',
            author: 'Molly Bang',
            label: 'commonGround',
            reader: 'Molly Bang',
            pages: 18,
            description: `How do our individual actions affect the world? Through the example of a shared village green and the growing needs of the townspeople who share it, Molly Bang presents the challenge of handling our planet's natural resources.`,
            narration: true
        },
        globalWarmingExpress: {
            title: 'The Global Warming Express',
            author: 'Marina Weber',
            label: 'globalWarmingExpress',
            description: 'The Earth is in peril — through pollution, global warming, oil spills, and tragic neglect of the environment. Join Marina, Joanna, and their animal friends on their incredible trip.',
            pages: 127,
            narration: false
        },
        myLight: {
            title: 'My Light',
            author: 'Molly Bang',
            label: 'myLight',
            reader: 'Suki Wampler',
            description: `Often taken for granted, the sun gives us more than its light. Here, Molly Bang presents a celebration of the sun, and the ways in which the sun gives us energy and power from its light. `,
            pages: 15,
            narration: true
        },
        livingSunlight: {
            title: 'Living Sunlight',
            author: 'Molly Bang & Penny Chisholm',
            label: 'livingSunlight',
            reader: 'Suki Wampler',
            description: `Here is an exploration of the universal energy force within us all. Molly Bang presents the amazing story of how light from the sun is transformed into energy on Earth--and becomes YOU!`,
            pages: 15,
            narration: true
        },
        buriedSunlight: {
            title: 'Buried Sunlight',
            author: 'Molly Brown & Penny Chisholm',
            label: 'buriedSunlight',
            reader: 'Magnificent "Mags" Farrell',
            description: `What are fossil fuels, and how did they come to exist? This book explains how coal, oil, and gas are really "buried sunlight," trapped beneath the surface of our planet for millions and millions of years. `,
            pages: 18,
            narration: true
        },
        riversOfSunlight: {
            title: 'Rivers of Sunlight',
            author: 'Molly Brown & Penny Chisholm',
            label: 'riversOfSunlight',
            reader: 'Lori Gleria',
            description: `How does the sun keep ocean currents moving and lift fresh water from the seas? What can we do to conserve one of our planet's most precious resources? In this book, readers learn about the constant movement of water as it flows around the Earth.`,
            pages: 18,
            narration: true
        },
    }

const headshots = {
    'Lori Gleria': '/images/headshots/LoriGleria.jpg',
    'Magnificent "Mags" Farrell': '/images/headshots/MagsFarrell.jpg',
    'Suki Wampler': '/images/headshots/SukiWampler.jpg'
}

const MediaList = [
    Media.commonGround,
    Media.globalWarmingExpress,
    Media.myLight,
    Media.livingSunlight,
    Media.buriedSunlight,
    Media.riversOfSunlight
]
/*
    getLibraryList(){
        return this.list.map( content =>{
            return(
                <LibraryItem
                    title={content.title}
                    author={content.author}
                    changeBook={this.changeBook}
                />
            )
        })
        return this.list[0].title;
    },
    getPage(book, page){
        return `/books/${book}/pages/${page}.jpg`
    }
}
*/

export { Media, MediaList, headshots };