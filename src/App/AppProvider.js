import React from 'react';
import _ from 'lodash'

export const AppContext = React.createContext();

const cc = require('cryptocompare')

const MAX_FAVORITES = 10

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETM', 'XMR'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isOnFavorites: this.isOnFavorites,
            confirmFavorites: this.confirmFavorites,
            setCurrentFavorite: this.setCurrentFavorite
        }
    }

    componentDidMount = () => {
        this.fetchCoins()
        this.fetchPrices()
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data
        this.setState({ coinList })
    }

    fetchPrices = async () => {
        if(this.state.firstVisit) return;
        let prices = await this.prices();
        prices = prices.filter(price => Object.keys(price).length);
        this.setState({prices});
      }

    prices = async() => {
        let returnData = []
        for(let i = 0; i < this.state.favorites.length; i++){
            try{
                let priceData = await cc.priceFull(this.state.favorites[i], 'USD')
                returnData.push(priceData)
            } catch(e){
                console.warn('Fetch price error: ', e )
            }
        }
        return returnData
    }

    addCoin = key => {
        let favorites = [...this.state.favorites]

        if (favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({ favorites })
        }
    }

    isOnFavorites = key => _.includes(this.state.favorites, key)

    setCurrentFavorite = (sym) => {
        this.setState({
            currentFavorite: sym
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptoDash')), currentFavorite: sym
        }))
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites]
        this.setState({ favorites: _.pull(favorites, key) })
    }

    confirmFavorites = () => {
        let currentFavorite = this.state.favorites[0];
        this.setState(
            {
                firstVisit: false,
                page: 'dashboard',
                currentFavorite
            },
            () => {
                this.fetchPrices();
            }
        )
        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites,
            currentFavorite
        }))
    }

    savedSettings() {
        let cryptoDashboard = JSON.parse(localStorage.getItem('cryptoDash'))
        if (!cryptoDashboard) {
            return { page: 'settings', firstVisit: true }
        }
        let { favorites, currentFavorite } = cryptoDashboard
        return { favorites, currentFavorite }
    }

    setPage = page => this.setState({ page })

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}