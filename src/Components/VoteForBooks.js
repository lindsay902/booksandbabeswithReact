import React from 'react';
import { SectionDivider } from './SectionDivider';

class VoteForBooks extends React.Component {
    render () {
        return (
        <div>
            <SectionDivider title="Vote For Books" />
            {/* <ul className="vote-section">
                <li>
                    <input type="radio" id="book-1" value="book-title">
                    <label for="book-1">Book 1 by: Author Name</label>
                </li>

                <li><input type="radio" id="book-2" value="book-title">
                    <label for="book-2">Book 2 by: Author Name</label>
                </li>

                <li><input type="radio" id="book-3" value="book-title">
                    <label for="book-3">Book 3 by:Author Name</label>
                </li>
                <li><input type="submit" id="submit-button"></li>
            </ul> */}
        </div>
        )
    }
};

export default VoteForBooks;