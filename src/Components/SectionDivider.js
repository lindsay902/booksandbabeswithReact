import React from 'react';

export class SectionDivider extends React.Component {
    render() {
        return (
            <div className="section-divider">
                <div className="line-break-section"></div>
                    <b />
                <div
                    className="divider-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="line-break-section">
                    <b />
                </div>
            </div>
        )
    }
}
