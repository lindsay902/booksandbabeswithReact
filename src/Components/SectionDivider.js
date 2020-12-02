import React from 'react';

export class SectionDivider extends React.Component {
    render() {
        return (
            <div className="sectionDivider">
                <div className="line-break-section">
                    <b />
                </div>
                <div
                    className="dividerTitle">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="lineBreakSection">
                    <b />
                </div>
            </div>
        )
    }
}
