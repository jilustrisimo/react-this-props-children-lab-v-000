import React from 'react'

export default class ThemedDecorations extends React.Component {
  render() {
    const currentTheme = this.props.theme
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: currentTheme
      })
    })

    return (
      <div class="theme">
        { children }
      </div>
    )
  }
}