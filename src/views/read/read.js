import React from 'react';

// Media Data
import { Media } from '../../data/mediaContent';

// Style Sheet
import './read.css';

// Sub-Components
import Congrats from '../../components/congrats/congrats';
import ReaderControlBar from '../../components/readerControlBar/readerControlBar';
import ReaderContent from '../../components/readerContent/readerContent';


class Read extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            book: Media[ this.props.match.params.bookLabel ] ? 
                    Media[ this.props.match.params.bookLabel ]
                    : '',
            status: 'stop',
            page: 1,
            loaded: {
                initialPage: 0,
                initialAudio: 0,
                readerPhoto: 0
            }
        }
        // Source Page Img & Audio Files
        this.getPage = this.getPage.bind(this);
        this.getAudio = this.getAudio.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
        // Page Incrementors
        this.nextPage = this.nextPage.bind(this);
        this.clickNext = this.clickNext.bind(this);
        this.prevPage = this.prevPage.bind(this);
        // Navigation Elements
        this.inputPage = this.inputPage.bind(this);
        this.slidePage = this.slidePage.bind(this);
        // Audio Narration
        this.playNarration = this.playNarration.bind(this);
        this.pauseNarration = this.pauseNarration.bind(this);
        this.restartPage = this.restartPage.bind(this);
        // Restart Page
        this.readAgain = this.readAgain.bind(this);
        // Load Status
        this.updateLoadStatus = this.updateLoadStatus.bind(this);
    }

    // SOURCE PAGE IMG & AUDIO FILES
    getPage(){
        return `${process.env.PUBLIC_URL}/assets/books/${this.state.book.label}/pages/${this.state.page}.jpg`;
    }
    getAudio(){
        return `${process.env.PUBLIC_URL}/assets/books/${this.state.book.label}/audio/${this.props.language}/${this.state.page}.mp3`;
    }
    getNextPage(num){
        return `${process.env.PUBLIC_URL}/assets/books/${this.state.book.label}/pages/${this.state.page + num}.jpg`;
    }

    // PAGE INCREMENTORS
    nextPage(){
        //Check For Completed Book
        if (this.state.page >= this.state.book.pages){
            const congrats = document.getElementById('complete');
            congrats.style.display = 'inline-flex';
        }
        else {
            //Set State & Progress Bar
            const loadedState = this.state.loaded;
            loadedState.initialPage = 0;
            loadedState.initialAudio = 0;
            this.setState( {
                page: (this.state.page + 1), 
                loaded: loadedState
            } );
            this.setProgress();

            //Load new audio
            const audio = document.getElementById('narrator');
            audio.src = this.getAudio();
        }
        //Clear Page Input
        const pageInput = document.getElementById('pageInput');
        pageInput.value = '';
    }
    clickNext(){
        // Stop Narration
        const audio = document.getElementById('narrator')
        audio.pause();
        this.setState( { status: 'stop' } );

        // Next Page
        setTimeout(this.nextPage(), 1);
    }
    prevPage(){
        if ( this.state.page > 1 ){
            //Set State & Progress Bar
            this.setState( {page: (this.state.page - 1) } );
            this.setProgress();
        }
        //Clear Page Input
        const pageInput = document.getElementById('pageInput');
        pageInput.value = '';

        // Set Status
        this.setState( { status: 'stop' } );
    }

    // NAVIGATION ELEMENTS
    inputPage(){
        const pageInput = document.getElementById('pageInput');
        if (pageInput.value > 0 && pageInput.value <= this.state.book.pages){

            pageInput.style.backgroundColor = "aliceBlue"
            this.setState( {page: Number(pageInput.value), status: 'stop' } );
            //Handle Narration
            const audio = document.getElementById('narrator');
            audio.src = this.getAudio();
        } else {
            pageInput.style.backgroundColor = "hsl(0,70%,70%)"
        }
    }
    slidePage(){
        //Set State
        const progress = document.getElementById('progressSlider');
        this.setState({page: Number(progress.value), status: 'stop' });

        //Handle Narration
        const audio = document.getElementById('narrator');
        audio.src = this.getAudio();

        //Clear Page Input
        const pageInput = document.getElementById('pageInput');
        pageInput.value = '';
    }
    setProgress(){
        const progressBar = document.getElementById('progressSlider');
        progressBar.value = this.state.page;
    }

    // AUDIO NARRATION
    playNarration(){
        //Play Audio
        const audio = document.getElementById('narrator');
        audio.play();
        //Set Status
        this.setState( { status: 'playing' } );
    }
    pauseNarration(){
        // Pause Audio
        let audio = document.getElementById('narrator');
        audio.pause();
        //Set Status
        this.setState( {status: 'pause'});
    }
    restartPage(){
        //Pause Narration
        this.pauseNarration();
        //Restart Narration
        let audio = document.getElementById('narrator');
        audio.src = this.getAudio();
        //Set Status
        this.setState({ status: 'stop'})
    }

    // RESTART BOOK
    readAgain(){
        //Set State
        this.setState({page: 1});
        //Remove Congrats Window
        const congrats = document.getElementById('complete');
        congrats.style.display = 'none';
    }
    // LOAD STATUS
    updateLoadStatus( loadedElement, loadedValue ){
        const loadState = this.state.loaded;
        loadState[loadedElement] = loadedValue;
        this.setState( { loaded: loadState } );
        console.log( `Loaded: ${loadedElement}` );
    }

    // COMPONENT MOUNTING
    componentDidMount(){
        this.setProgress();
        if (this.state.status === 'playing'){
            this.playNarration();
        }
    }
    render(){
        document.title = `GWE: "${this.state.book.title[this.props.language]}"`;
        
        return(

            <div className="Read">

                    <Congrats 
                        readAgain={this.readAgain}
                        language={ this.props.language } />

                    <ReaderControlBar
                        // Translate
                        language = { this.props.language }
                        changeLanguage = {this.props.changeLanguage}
                        // Audio Player
                        getAudio = {this.getAudio}
                        nextPage = {this.nextPage}
                        // Narration Controller
                        narration = {this.state.book.narration}
                        playPage = {this.playNarration}
                        pausePage = {this.pauseNarration}
                        restartPage = {this.restartPage}
                        status = {this.state.status}
                        pageHasPlayed = {this.state.pageHasPlayed}
                        // Progress Bar
                        page = {this.state.page}
                        totalPages = {this.state.book.pages}
                        inputPage = {this.inputPage}
                        slidePage = {this.slidePage}
                        // Load Monitor
                        updateLoadStatus = {this.updateLoadStatus}
                    />

                    <ReaderContent
                        // Page & Book Info
                        page = {this.state.page}
                        book = {this.state.book.label}
                        getPage = {this.getPage}
                        language = {this.props.language}
                        getNextPage = {this.getNextPage}
                        // Page Navigation
                        nextPage = {this.clickNext}
                        prevPage = {this.prevPage}
                        // Narration
                        narration = {this.state.book.narration}
                        playNarration = {this.playNarration}
                        status = {this.state.status}
                        // Load Monitors
                        loadedInitialPage = {this.state.loaded.initialPage}
                        loadedReaderPhoto = {this.state.loaded.readerPhoto}
                        loadedInitialAudio = {this.state.loaded.initialAudio}
                        updateLoadStatus = {this.updateLoadStatus}
                    />

            </div>
            
        )
    }
}

export default Read;
