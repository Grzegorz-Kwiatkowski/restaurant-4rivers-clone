import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Container } from '../../Styled Components/styled-components'
import circle_icon from '../../icons/times-circle-regular.svg'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './AccordionSection.css'

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

        return (
            <div>
                <div style={{ backgroundImage: `url(${background})` }} onClick={onClick}
                    className={isOpen ? "accordion-section freezeHeader" : "accordion-section"}>

                    <div className={isOpen ? "accordion-section__whiteBackground disableWhiteBg" : "accordion-section__whiteBackground"}></div>
                    <h1 className="accordion-section__label">{label}</h1>
                    <div className="accordion-section__icon " >
                        <AddCircleOutlineIcon style={{ fontSize: 50, fontWeight: "none" }} className={isOpen ? "circle__icon rotateRight" : "circle__icon rotateLeft"} />
                    </div>


                </div >

                <div className={isOpen ? "accordion-section__content opened" : "accordion-section__content closed"}>
                    {this.props.children}

                </div>


            </div>
        );
    }
}

export default AccordionSection;