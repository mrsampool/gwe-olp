const Media = {
        commonGround: {
            title: {
                eng: 'Common Ground',
                spa: 'Spanish'
            },
            author: 'Molly Bang',
            label: 'commonGround',
            reader: 'Molly Bang',
            pages: 18,
            description: {
                eng: `How do our individual actions affect the world? Through the example of a shared village green and the growing needs of the townspeople who share it, Molly Bang presents the challenge of handling our planet's natural resources.`,
                spa: 'Spanish'
            },
            narration: true
        },
        globalWarmingExpress: {
            title: {
                eng: 'The Global Warming Express',
                spa: 'Spanish'
            },
            author: 'Marina Weber',
            label: 'globalWarmingExpress',
            description: {
                eng: 'The Earth is in peril — through pollution, global warming, oil spills, and tragic neglect of the environment. Join Marina, Joanna, and their animal friends on their incredible trip.',
                spa: 'Spanish'
            },
            pages: 127,
            narration: false
        },
        myLight: {
            title: {
                eng: 'My Light',
                spa: 'Spanish'
            },
            author: 'Molly Bang',
            label: 'myLight',
            reader: 'Suki Wampler',
            description: {
                eng: `Often taken for granted, the sun gives us more than its light. Here, Molly Bang presents a celebration of the sun, and the ways in which the sun gives us energy and power from its light. `,
                spa: 'Spanish'
            },
            pages: 15,
            narration: true
        },
        livingSunlight: {
            title: {
                eng: 'Living Sunlight',
                spa: 'Spanish'
            },
            author: 'Molly Bang & Penny Chisholm',
            label: 'livingSunlight',
            reader: 'Suki Wampler',
            description: {
                eng: `Here is an exploration of the universal energy force within us all. Molly Bang presents the amazing story of how light from the sun is transformed into energy on Earth--and becomes YOU!`,
                spa: 'Spanish'
            },
            pages: 15,
            narration: true
        },
        buriedSunlight: {
            title: {
                eng: 'Buried Sunlight',
                spa: 'Spanish'
            },
            author: 'Molly Brown & Penny Chisholm',
            label: 'buriedSunlight',
            reader: 'Magnificent "Mags" Farrell',
            description: {
                eng: `What are fossil fuels, and how did they come to exist? This book explains how coal, oil, and gas are really "buried sunlight," trapped beneath the surface of our planet for millions and millions of years. `,
                spa: 'Spanish'
            },
            pages: 18,
            narration: true,
            translations: {
                1: `Most of it comes from coal and oil and gas, called fossil fuels.
                What makes them "FOSSILS"?
                Like Dinosaurs, they are ancient life that was buried deep underground. But fossil fuels are ancient PLANTS. They captured light I shined on Earth millions of years ago.
                All this time, those fossil plants have kept my sunlight-energy locked inside themselves.
                When you burn fossil fuels, you free the energy locked inside those ancient plants and turn it into heat and light.
                But how did those plants catch my sunlight-energy and lock it into themselves?`
            }
        },
        riversOfSunlight: {
            title: {
                eng: 'Rivers of Sunlight',
                spa: 'Spanish'
            },
            author: 'Molly Brown & Penny Chisholm',
            label: 'riversOfSunlight',
            reader: 'Lori Gleria',
            description: {
                eng: `How does the sun keep ocean currents moving and lift fresh water from the seas? What can we do to conserve one of our planet's most precious resources? In this book, readers learn about the constant movement of water as it flows around the Earth.`,
                spa: 'Spanish'
            },
            pages: 18,
            narration: true
        },
    }

const headshots = {
    'Lori Gleria': `${process.env.PUBLIC_URL}/assets/images/headshots/LoriGleria.png`,
    'Magnificent "Mags" Farrell': `${process.env.PUBLIC_URL}/assets/images/headshots/MagsFarrell.png`,
    'Suki Wampler': `${process.env.PUBLIC_URL}/assets/images/headshots/SukiWampler.png`
}

const MediaList = [
    Media.commonGround,
    Media.globalWarmingExpress,
    Media.myLight,
    Media.livingSunlight,
    Media.buriedSunlight,
    Media.riversOfSunlight
]

export { Media, MediaList, headshots };