import React from 'react';

export const AppContext = React.createContext();

const cc = require('cryptocompare')

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins()
    }

    fetchCoins = async() => {
        let coinList = (await cc.coinList()).Data
        this.setState({coinList})
        console.log(coinList)
    }

    confirmFavorites = () => {
        this.setState(
            {
                firstVisit: false,
                page: 'dashboard'
            }
        )
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hellow'
        }))
    }

    savedSettings() {
        let cryptoDashboard = JSON.parse(localStorage.getItem('cryptoDash'))
        if (!cryptoDashboard) {
            return { page: 'settings', firstVisit: true }
        }
        return {}
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