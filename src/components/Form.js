import React, { Component } from 'react';
import PropTypes            from 'prop-types';

export default class Form extends Component {
    state = {
        category: "general"
    }

    handleChange = e => {
        this.setState({
            category: e.target.value
        }, () => {
            this.props.apiCallNews(this.state.category);
        });
    }

    render() {
        return (
            <div className="searcher row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Select news by category</h2>
                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.handleChange}>
                                <option value="general">General</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Form.propTypes = {
    apiCallNews: PropTypes.func.isRequired
}
