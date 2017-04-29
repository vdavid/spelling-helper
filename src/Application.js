import React from "react";
import "./Application.css";

/**
 * This is a script that finds common English spellings for words
 *
 * @author Veszelovszki Dávid <veszelovszki@gmail.com>
 * @since 2014-06-18
 */

/* The UI */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'test'};
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="Application">
                <label>Term to spell:
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/></label>
                <SpellingList text={this.state.text}/>
            </div>
        );
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }
}

class SpellingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = SpellingList.convertLettersToWords(this.props.text).map((one, index) =>
            <li key={index}>{one}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    /**
     * Finds spellings if a text was given
     *
     * @param {string} string
     */
    static convertLettersToWords(string) {
        const letterToWordMap = {A: 'Adam', B: 'Boston', C: 'Charles', D: 'David', E: 'Edward', F: 'Frank', G: 'George', H: 'Henry', I: 'Ida', J: 'James', K: 'Kate', L: 'Lewis', M: 'Mary', N: 'Nellie', O: 'Oliver', P: 'Peter', Q: 'Queen', R: 'Richard', S: 'Samuel', T: 'Thomas', U: 'Uncle', V: 'Victor', W: 'William', X: 'X-ray', Y: 'Young', Z: 'Zebra'};

        const words = [];
        string = string.toUpperCase();
        for (let i = 0; i < string.length; i++) {
            let letter = string[i];
            words.push(Object.keys(letterToWordMap).indexOf(letter) > -1 ? (letter + ' as in ' + letterToWordMap[letter]) : letter);
        }

        return words;
    }
}

export default Application;
