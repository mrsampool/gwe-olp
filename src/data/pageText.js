const pageText = {
    speechBubbles: {
        splash: {
            eng: [
                `Ready to hop aboard?`,
                'All aboard!',
                'So good to see you!',
                'Lots to do today!',
                `We've been waiting for you!`,
                'No time to waste!'
            ],
            spa: [
                `Spa: Ready to hop aboard?`,
            ]
        },
        library: {
            eng: [
                'So many great options to choose from!'
            ],
            spa: [
                'Spa: So many great options to choose from!'
            ]
        },
        congrats: {
            eng: [
                'I knew you could do it!'
            ],
            spa: [
                'Spa: I knew you could do it!'
            ]
        },
        getSpeech(type,language){
            const options = this[type][language];
            const random = Math.floor( Math.random() * ( options.length - 1 ) );
            return options[random];
        }
    },
    buttons: {
        translate: {
            eng: 'Spa: Click For Spanish',
            spa: 'Click for English'
        },
        startLearning: {
            eng: 'Start Learning',
            spa: 'Spa: Start Learning'
        },
        aboutGWE: {
            eng: 'About GWE',
            spa: 'Spa: About GWE'
        },
        startReading: {
            eng: 'Start Reading',
            spa: 'Spa: Start Reading'
        },
        readAgain: {
            eng: 'Read it again',
            spa: 'Spa: Read it again'
        },
        backLibrary: {
            eng: 'Back to Library',
            spa: 'Spa: Back to Library'
        },
        playNarration: {
            eng: 'Play Narration',
            spa: 'Spa: Play Narration'
        }
    },
    labels: {
        byAuthor(author,language){
            return language === 'eng' ?
                `by ${author}`
                : `spa: By ${author}`
        },
        readBy: {
            eng: 'Read by',
            spa: 'Spa: Read by'
        },
        narration: {
            eng: 'Narration',
            spa: 'Spa: Narration'
        },
        page: {
            eng: 'Page',
            spa: 'Spa: Page'
        },
        narrComing: {
            eng: 'Narration Coming Soon',
            spa: 'Spa: Narration Coming Soon'
        }
    },
    pageTitles: {
        library: {
            eng: 'Learning Library',
            spa: 'Spa: Learning Library'
        }
    },
    messages: {
        congrats: {
            eng: 'Congrats, you finished this book!',
            spa: 'Spa: Congrats, you finished this book!'
        },
        readAgain: {
            eng: 'Read it again?',
            spa: 'Spa: Read it again?'
        }
    }
}

export default pageText;