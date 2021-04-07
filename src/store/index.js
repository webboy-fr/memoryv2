import Vue from 'vue'
import Vuex from 'vuex'
import {
    get,
    post,
    put
} from "@/mixins/fetchers.js"


Vue.use(Vuex)


export let store = new Vuex.Store({


    state: {
        server: process.env.VUE_APP_SERVER,
        gameId: 0,
        game: [],
        selectedCards: [],
        levelList: ['facile', 'moyen', 'difficile'],
        selectedLevel: 0,
        timer: 0,
        timerInterval: {},
        player: '',
        returningCard: false,
        scores: []
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
        cleanTimerInterval(state) {
            clearInterval(state.timerInterval)
        },
        setPlayer(state, status) {
            state.player = status
        },
        setReturningCard(state, status) {
            state.returningCard = status
        },
        setScores(state, status) {
            state.scores = status
        }

    },




    getters: {

        victory: state => {
            if (state.game.length > 0) {
                return state.game.every((card) => card.visible === true)
            }
        },

        routeNewGame: state => {
            return `${state.server}game/create/${state.selectedLevel}`
        },
        routeCheckEven: state => {
            return `${state.server}game/checkCardEven`
        },
        routeSave: state => {
            return `${state.server}game/${state.gameId}`
        },
        routeScores: state => {
            return `${state.server}game/scores`
        }


        

    },




    actions: {

        newGame(context) {
            context.commit('setGame', [])
            context.commit('cleanTimerInterval')
            context.commit('setTimer', 0)
            context.commit('setPlayer', '')
            get(context.getters.routeNewGame)
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
            post(context.getters.routeCheckEven, {
                gameId: context.state.gameId,
                selectedCards: context.state.selectedCards
            }).then((data) => {
                context.commit('cleanSelectedCards')
                context.commit('setGame', data)
                context.commit('setReturningCard', false);
            })
        },

        saveScore(context) {
            put(context.getters.routeSave, {                
                player: context.state.player,
                time: context.state.timer
            }).then((data) => {                
                if(data.status == 200){
                    console.log('ok update');                    
                } else {
                    console.error('PROBLEME UPDATE')
                }
            })
        },

        getScores(context) {            
            get(context.getters.routeScores)
                .then((json) => {
                    context.commit('setScores', json)
                });
        },



    },
    //modules: {} //TODO : tester les modules ?
})