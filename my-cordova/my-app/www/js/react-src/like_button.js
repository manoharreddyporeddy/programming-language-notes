'use strict';

// const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {   // when true
      return 'You liked comment number ' + this.props.commentID; // this button changes to text
    }

    // when false, renders as html button
    // return React.createElement(
    //   'button', // html element
    //   { onClick: () => this.setState({ liked: true }) },  // events
    //   'Like'  // html element text/caption
    // );

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID1 = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      React.createElement(LikeButton, { commentID: commentID1 }),   // render Like custom button
      domContainer                                                  //  under div with class "like_button_container"
    );
  });

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(React.createElement(LikeButton), domContainer);
