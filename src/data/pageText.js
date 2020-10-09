const pageText = {
    splash: {
        greeting: {
            eng: `Hey there, Thanks for coming to visit! I have so much exciting stuff for you today!`,
            spa: `Spanish`
        }
    },
    writeText(strings){
        let text = '';
        for (let i = 0; i<strings.length; i++){
            text += strings[i];

        }
    }
}



export default pageText;