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
        }
        this.getPage = this.getPage.bind(this);
        this.getAudio = this.getAudio.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.clickNext = this.clickNext.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.playNarration = this.playNarration.bind(this);
        this.pauseNarration = this.pauseNarration.bind(this);
        this.restartPage = this.restartPage.bind(this);
        this.slidePage = this.slidePage.bind(this);
        this.inputPage = this.inputPage.bind(this);
        this.readAgain = this.readAgain.bind(this);
    }

    // SOURCE PAGE IMG & AUDIO FILES
    getPage(){
        return `${process.env.PUBLIC_URL}/assets/books/${this.state.book.label}/pages/${this.state.page}.jpg`;
    }
    getAudio(){
        return `${process.env.PUBLIC_URL}/assets/books/${this.state.book.label}/audio/${this.state.page}.mp3`;
    }

    // PAGE INCREMENTORS
    nextPage(){
        //Check For Completed Book
        if (this.state.page >= this.state.book.pages){
            console.log('congrats');
            const congrats = document.getElementById('complete');
            congrats.style.display = 'inline-flex';
        }
        else {
            //Set State & Progress Bar
            this.setState( {page: (this.state.page + 1) } );
            this.setProgress();
            //Start Load Screen
            const loadScreen = document.getElementById('loading');
            loadScreen.style.display = 'block';

            //Load new audio
            const audio = document.getElementById('narrator');
            audio.src = this.getAudio();
            //Handle Narration
            /*
            if (this.state.status === 'playing'){
                const audio = document.getElementById('narrator');
                audio.src = this.getAudio();
                this.playNarration();
            }
            */
            //Enable PrevPage Button;
            const prevPage = document.getElementById('prevPage');
            prevPage.classList.remove('disabled');
        }
        //Clear Page Input
        const pageInput = document.getElementById('pageInput');
        pageInput.value = '';
    }
    clickNext(){
        console.log('click next');

        const audio = document.getElementById('narrator')
        audio.pause();
        this.setState( { status: 'stop' } );
        setTimeout(this.nextPage(), 1);
    }
    prevPage(){
        if ( this.state.page > 1 ){
            this.setState( {page: (this.state.page - 1) } );
            this.setProgress();
            //Start Load Screen
            const loadScreen = document.getElementById('loading');
            loadScreen.style.display = 'block';
            //Check For Disbabled PrevPage Button
            if (this.state.page === 1){
                const prevPage = document.getElementById('prevPage');
                prevPage.classList.add('disabled');
            }
        }
        //Clear Page Input
        const pageInput = document.getElementById('pageInput');
        pageInput.value = '';
        this.setState( { status: 'stop' } );
    }

    // NAVIGATION ELEMENTS
    inputPage(){
        const pageInput = document.getElementById('pageInput');
        if (pageInput.value > 0 && pageInput.value <= this.state.book.pages){

            //Start Load Screen
            const loadScreen = document.getElementById('loading');
            loadScreen.style.display = 'block';

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
        const progress = document.getElementById('progressSlider');
        this.setState({page: Number(progress.value), status: 'stop' });
        //Start Load Screen
        const loadScreen = document.getElementById('loading');
        loadScreen.style.display = 'block';
        //Handle Narration
        const audio = document.getElementById('narrator');
        audio.src = this.getAudio();
        //Check For First Page
        const prevPage = document.getElementById('prevPage');
        if (this.state.page === 1){
            prevPage.classList.add('disabled');
        } else {
            prevPage.classList.remove('disabled');
        }
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
        //Set Status State
        this.setState( { status: 'playing' } );
    }
    pauseNarration(){
        let audio = document.getElementById('narrator');
        audio.pause();
        this.setState( {status: 'pause'});

    }
    restartPage(){
        this.pauseNarration();
        let audio = document.getElementById('narrator');
        audio.src = this.getAudio();
        this.setState({ status: 'stop'})
    }

    // RESTART BOOK
    readAgain(){
        this.setState({page: 1});
        const congrats = document.getElementById('complete');
        congrats.style.display = 'none';
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
                    />

                    <ReaderContent
                        // Page & Book Info
                        page = {this.state.page}
                        book = {this.state.book.label}
                        getPage = {this.getPage}
                        language = {this.props.language}
                        // Page Navigation
                        nextPage = {this.clickNext}
                        prevPage = {this.prevPage}
                        //Narration
                        narration = {this.state.book.narration}
                        playNarration = {this.playNarration}
                        status = {this.state.status}
                    />

            </div>
            
        )
    }
}

export default Read;
