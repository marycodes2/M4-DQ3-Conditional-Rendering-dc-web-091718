import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    pageDisplayed: null
  }

  respondToMenuSelection = (event) => {
    console.log(event.target.id)
    switch (event.target.id) {
      case 'profile': this.setState({pageDisplayed: <Profile />})
        break
      case 'photo': this.setState({pageDisplayed: <Photos />})
        break
      case 'cocktail': this.setState({pageDisplayed: <Cocktails />})
        break
      case 'pokemon': this.setState({pageDisplayed: <Pokemon />})
        break
    }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar onClickIcon={(event) => this.respondToMenuSelection(event)}/>
        {this.state.pageDisplayed}
      </div>
    )
  }

}

export default MainBox
