import Vue from 'vue'
import Vuex from 'vuex'
import {
    get,
    post,
    put, 
    remove
} from "@/mixins/fetchers.js" //Récupère mixins pour les fetch


Vue.use(Vuex)


export let store = new Vuex.Store({


    state: { //Les données partagées entre tous mes composants
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




    mutations: { //Les mutations sont les seules autorisées à modifiées les state (de façon synchrone)
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




    getters: { //Les getters sont un peu comme les computed data du store. Ce sont des donénes calculées sur la base des state

        victory: state => {
            if (state.game.length > 0) {
                return state.game.every((card) => card.visible === true)
            }
        },

        //Les routes, basé sur le state server (qui lui même est basé sur .env)
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
        },
        routeDelete: state => {
            return `${state.server}game/${state.gameId}`
        }


        

    },



    /* 
    Les actions sont des méthodes qui peuvent être asynchrone.
    Elles servent généralement à récupérer des donénes sur le serveur, puis à les dispatcher aux state via les mutations
    Cela permet de gros gain de perf, et de l'appli n'est pas bloqué en attendant la répnse du serveur
    */
    actions: { 

        newGame(context) {
            context.commit('setGame', []) //Commit = engage une mutation
            context.commit('cleanTimerInterval')
            context.commit('setTimer', 0)
            context.commit('setPlayer', '')
            get(context.getters.routeNewGame) //Créer une nouvelle partie (attend de recevoir info serveur)
                .then((json) => {
                    //C'est parti !
                    context.commit('setGameId', json.id)
                    context.commit('setGame', json.grid)
                    //Timer go
                    let timerInterval = setInterval(() => {
                        let timer = context.state.timer + 1
                        context.commit('setTimer', timer)
                    }, 1000)
                    context.commit('setTimerInterval', timerInterval) //On stocke le setInterval, pour pouvoir le stopper plus tard
                });
        },

        selectCard(context, card) {
            context.dispatch('checkEven') 
            context.commit('cleanSelectedCards', card)
        },

        checkEven(context) { //Cette action permet de lancer la vérification des paires (coté serveur)
            post(context.getters.routeCheckEven, {
                gameId: context.state.gameId, //On envoit l'id de la partie pour récupérer la seed coté serveur
                selectedCards: context.state.selectedCards //On post les cartes choisies par l'user vers la route correspondante
            }).then((data) => {
                context.commit('cleanSelectedCards') //On remet les carte sélectionnées à zéro
                context.commit('setGame', data) //On re-rend la grille avec la nouvelle chaine retournée par le serveur
                context.commit('setReturningCard', false); //On a a nouveau le droit de cliquer partout
            })
        },

        saveScore(context) {
            put(context.getters.routeSave, { //Enregistre la partie (nom joueur + temps écoulé)          
                player: context.state.player,
                time: context.state.timer
            }).then((data) => {                
                if(data.status == 200){
                    console.log('ok update'); //pas eu le temps de fignoler, mais une petite modal aurait fait l'affaire
                } else {
                    console.error('PROBLEME UPDATE')
                }
            })
        },

        getScores(context) {   //Action pour mettre à jour les scores dans le store          
            get(context.getters.routeScores)
                .then((json) => {
                    context.commit('setScores', json)
                });
        },

        deleteGame(context) { //Action pour supprimer une partie si le joueur ne veut pas enregistrer
            remove(context.getters.routeDelete) //Utilisation du mot clé "delete" interdit par JS
            .then((data) => {                
                if(data.status == 200){
                    console.log('ok delete');                    
                } else {
                    console.error('PROBLEME DELETE')
                }
            })
        },



    },
    //modules: {} //TODO : tester les modules ?
})