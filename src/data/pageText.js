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
                `¿Listos para abordar?`,
                `¡Todos Abordo!`,
                `¡Mucho que hacer hoy!`,
                `¡Te hemos estado esperando!`,
                `¡No hay tiempo que perder!`
            ]
        },
        library: {
            eng: [
                'So many great options to choose from!',
                `Which do you want to read today?`
            ],
            spa: [
                `¡Tantas buenas opciones para elegir!`,
                `¿Cuál quieres leer hoy?`
            ]
        },
        summary: {
            eng: [
                `That's one of my favorites!`,
                `That's a great one!`
            ],
            spa: [
                `¡Ese es uno de mis favoritos!`,
                `¡Ese es buenísimo!`
            ]
        },
        congrats: {
            eng: [
                'I knew you could do it!',
                `Wasn't that a great one?`,
                `You're a great reader!`
            ],
            spa: [
                '¡Sabía que lo podías hacer!',
                `¿Verdad que es bueno?`,
                `¡Lees muy bien!`
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
            eng: 'En Español',
            spa: 'Click for English'
        },
        home: {
            eng: 'Home',
            spa: 'Casa'
        },
        aboutGWE: {
            eng: 'About GWE',
            spa: 'Sobre GWE'
        },
        startLearning: {
            eng: 'Jump Onboard',
            spa: 'Comienza a Aprender'
        },
        startReading: {
            eng: 'Start Reading',
            spa: 'Comienza a Leer'
        },
        readAgain: {
            eng: 'Read it again',
            spa: 'Lee de Nuevo'
        },
        backLibrary: {
            eng: 'Back to Library',
            spa: 'De Nuevo a la Biblioteca'
        },
        playNarration: {
            eng: 'Play Narration',
            spa: 'Escuchar Narración'
        }
    },
    labels: {
        byAuthor(author,language){
            return language === 'eng' ?
                `By ${author}`
                : `Por ${author}`
        },
        readBy: {
            eng: 'Read by',
            spa: 'Leído por'
        },
        narration: {
            eng: 'Narration',
            spa: 'Narración'
        },
        page: {
            eng: 'Page',
            spa: 'Página'
        },
        narrComing: {
            eng: 'Narration Coming Soon',
            spa: 'Narración Próximamente'
        },
        runTime: {
            eng: 'Run Time',
            spa: 'Duración'
        }
    },
    pageTitles: {
        library: {
            eng: 'Learning Library',
            spa: 'Biblioteca Educativa'
        }
    },
    messages: {
        congrats: {
            eng: 'Congrats, you finished this book!',
            spa: '¡Felicidades, terminaste el libro!'
        },
        readAgain: {
            eng: 'Read it again?',
            spa: '¿Leerlo de nuevo?'
        },
        spanishComing: `Próximamente Traducción en Español`
    }
}

export default pageText;