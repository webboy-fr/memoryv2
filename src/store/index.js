import Vue from 'vue'
import Vuex from 'vuex'
import {
    get,
    post
} from "@/mixins/fetchers.js"


Vue.use(Vuex)


export let store = new Vuex.Store({


    state: {
        server: process.env.VUE_APP_SERVER,
        //server: 'http://localhost:8080/',
        gameId: 0,
        game: [],
        selectedCards: [],
        levelList: ['facile', 'moyen', 'difficile'],
        selectedLevel: 0,
        timer: 0,
        timerInterval: {},
        player: '',
        returningCard:false,
        scoreEasy: [],
        scoreMedium: [],
        scoreHard: []
    },




    mutations: {
        setGameId(state, status) {
            state.gameId = status
        },
        setGame(state, status) {
            state.game = status
        },
        setSelectedCards(state, status) {
            state.selectedCards.push(status)
        },

        cleanSelectedCards(state) {
            state.selectedCards = [];
        },
        setSelectedLevel(state, status) {
            state.selectedLevel = status
        },
        setTimer(state, status) {
            state.timer = status
        },
        setTimerInterval(state, status) {
            state.timerInterval = status
        },
        cleanTimerInterval(state){
            clearInterval(state.timerInterval)
        },
        setPlayer(state, status) {
            state.player = status
        },
        setReturningCard(state, status) {
            state.returningCard = status
        },
        setScoreEasy(state, status) {
            state.scoreEasy = status
        },
        setScoreMedium(state, status) {
            state.scoreMedium = status
        },
        setScoreHard(state, status) {
            state.scoreHard = status
        }

    },




    getters: {

        victory: state => {
            if (state.game.length > 0) {
                return state.game.every((card) => card.visible === true)
            }
        }

        // //Construction url + params de base //TODO Modules
        // basePath: state => {
        //   return state.server + state.version + '/'
        // },
        // apiKeyParam: state => {
        //   return `api_key=${state.appId}`
        // },
        // sessionIdParam: state => {
        //   return `session_id=${state.sessionId}`
        // },

        // //Routes TODO MODULES
        // tokenURL: (state, getters) => {
        //   return `${getters.basePath}authentication/token/new?${getters.apiKeyParam}`
        // },


    },




    actions: {

        newGame(context) {
            console.log(context.state.server)
            context.commit('setGame', [])
            context.commit('cleanTimerInterval')
            context.commit('setTimer', 0)
            get(`${context.state.server}home/newGame/${context.state.selectedLevel}`)
                .then((json) => {
                    context.commit('setGameId', json.id)
                    context.commit('setGame', json.grid)
                    let timerInterval = setInterval(() => {                        
                        let timer = context.state.timer + 1
                        context.commit('setTimer', timer)
                    }, 1000)
                    context.commit('setTimerInterval', timerInterval)
                });
        },

        selectCard(context, card) {            
            context.dispatch('checkEven')
            context.commit('cleanSelectedCards', card)            
        },

        checkEven(context) {
            post(`${context.state.server}home/checkEven`, {
                gameId: context.state.gameId,
                selectedCards: context.state.selectedCards
            }).then((data) => {
                context.commit('cleanSelectedCards')
                context.commit('setGame', data)
                context.commit('setReturningCard', false);
            })
        },

        saveScore(context) {            
            post(`${context.state.server}/home/save`, {
                gameId: context.state.gameId,
                player: context.state.player,
                time: context.state.timer
            })
        },

        getScores(context, level) {            
            get(`${context.state.server}home/scores/${level}`)
                .then((json) => {  
                    //Pas jojo, revoir mapping gestion des niveaux de difficulté (db ?)
                    if(level == 0){                        
                        context.commit('setScoreEasy', json)
                    } else if(level == 1){                        
                        context.commit('setScoreMedium', json)
                    } else if(level == 2){                        
                        context.commit('setScoreHard', json)
                    }
                    
                });
        },



    },
    //modules: {} //TODO : tester les modules ?
})