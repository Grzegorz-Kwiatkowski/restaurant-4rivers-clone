import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    AccordionSectionContainer,
    AccordionSectionWrapper,
    AccordionSectionWhiteBackground,
    AccordionSectionLabel,
    AccordionSectionIconWrapper,
    AccordionSectionIcon,
    AccordionSectionContent
} from './AccordionSection.elements'



class AccordionSection extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        this.props.onClick(this.props.label);
    };


    render() {
        const {
            onClick,
            props: { isOpen, label, background },
        } = this;

        const IconStyle = {
            fontSize: 50,
            fontWeight: "none",
            color: "lightgray"
        }

        return (
            <AccordionSectionContainer>

                <AccordionSectionWrapper background={background} isOpen={isOpen} onClick={onClick}>

                    <AccordionSectionWhiteBackground isOpen={isOpen} />

                    <AccordionSectionLabel isOpen={isOpen}>
                        {label}
                    </AccordionSectionLabel>

                    <AccordionSectionIconWrapper >
                        <AccordionSectionIcon isOpen={isOpen} style={IconStyle} />
                    </AccordionSectionIconWrapper>

                </AccordionSectionWrapper>

                <AccordionSectionContent isOpen={isOpen}>
                    {this.props.children}
                </AccordionSectionContent>


            </AccordionSectionContainer>
        );
    }
}

export default AccordionSection;