import React, { Component } from 'react';
import '../css/home.css';
import NavButton from './nav-button';
import Bio from './bio';
import {Route} from 'react-router-dom'; 

class Home extends React.Component {

    state = {
        selectedPage: 0,
        mainPage: [
            {
                label: 'Home',
                slug: '',
                subPages: [{
                    label: 'Bio',
                    slug: 'bio'
                }]
            },
            {
                label: 'Games',
                slug: 'games',
                subPages: []
            },
            {
                label: 'Experiments',
                slug: 'experiments',
                subPages: []
            },
        ]
    }

    render() {
        return <div className="homePage">
            <header>
                <div className="logoTitleContainer">
                    <img className="logoTitle" src="img/logoTitle.svg"/>
                </div>
                <div className="primNavigation">
                    {this.state.mainPage.map(pageInfo => {
                        return <NavButton changePage={this.changePage} history={this.props.history} name={pageInfo.label} slug={pageInfo.slug}/>
                    })}
                </div>
                <div className="secNavigation">
                    {this.state.mainPage[this.state.selectedPage].subPages.map(pageInfo => {
                        return <NavButton changePage={this.changePage} history={this.props.history} name={pageInfo.label} slug={pageInfo.slug}/>
                    })}
                </div>
            </header>
            <Route path="/home/bio" component={Bio}/>
        </div>
    }

    changePage = name => {
        const pageIndex = this.state.mainPage.findIndex(ele => {
            return ele.label === name;
        })
        console.log(pageIndex)
        if (pageIndex >= 0) {
            this.props.history.push(`/home/${this.state.mainPage[pageIndex].slug}`)
            this.setState({selectedPage: pageIndex})
        } else {
            const subPageIndex = this.state.mainPage[this.state.selectedPage].subPages.findIndex(ele => {
                return ele.label === name;
            })
            this.props.history.push(`/home/${this.state.mainPage[this.state.selectedPage].subPages[subPageIndex].slug}`)
        }
    }

}

export default Home;