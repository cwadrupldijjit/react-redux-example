import React, { Component } from 'react';

// The "connect" function is the way that react-redux's magic
// works.  Jump to the bottom of the file for the explanation
// of what it does.
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {/*
              Here, we're using the "count" we got from state
              in our "mapStateToProps" function.
            */}
            { this.props.count }
          </p>
          <div>
            <button
              // When we click the button, we want something
              // to happen to our state.  This is why the
              // "Connect" component wraps our function and
              // gives us the "dispatch" prop.  "dispatch"
              // is a function that works exactly like the
              // "dispatch" method in the other example:
              // you pass in an object (or "action") to tell
              // redux that you want to do something to the
              // state in the store.
              
              // This adds one to the current count.
              onClick={() => this.props.dispatch({ type: '+' })}
            >
              +
            </button>
            &nbsp; &nbsp;
            <button
              // This one is just like the other one, but it
              // subtracts one from the current count.
              onClick={() => this.props.dispatch({ type: '-' })}
            >
              -
            </button>
          </div>
        </header>
      </div>
    );
  }
}

// "connect" is a function.  It is used to wrap your component
// so that you can access (some of) the data in your store.
// To use it, you call it and pass in a function.  This
// function is like the state subscription function in the 
// other example except it actually gives you the current state
// as a parameter.  With this function, you return an object
// whose properties are going to be passed into your component
// as props (e.g., if there were more things in state but I
// only wanted the "count" property, I would return an object
// that looks like this: `({ count: state.count })`).  An
// example of using the count prop is above, and we'll get to
// it.  That function is called the "mapStateToProps" function.
// 
// But as you can see, we don't just export the result of
// calling "connect".  This is because when we called it the
// first time, you told it how it should behave.
// The function that it returns accepts only one parameter:
// your component.
// It wraps your component with another component that inside
// of its render method puts the data you asked for from the
// "mapStateToProps" function into its props.  For example,
// this might be what that wrapping component looks like:
/*
  render() {
    const props = {
      ...mapStateToProps(currentState),
      dispatch: dispatch, // We'll talk about this soon enough
    };
    return <Component {...props} />;
  }
*/
// And in the resulting DOM, it would show up like this:
/*
  <Connect>
    <App count={props.count} dispatch={dispatch} />
  </Connect>
*/
// Using those pieces of state is seen above in App's "render"
// method.
export default connect(state => state)(App);
