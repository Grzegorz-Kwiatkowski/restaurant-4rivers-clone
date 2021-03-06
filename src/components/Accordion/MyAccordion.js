import React, { useState } from 'react'
import Accordion from './Accordion'

import {
    Button,
    Container
} from '../../Styled Components/styled-components'

import {
    MyAccordionContainer,
    MyAccordionMealsContainer,
    MyAccordionSingleMeal,
    MyAccordionHeader,
    MyAccordionInfo,
    MyAccordionTitle,
    MyAccordionContent,
    BorderWrapper
} from './MyAccordion.elements'

import { food } from '../../data';


function MyAccordion() {

    const [meals, setMeal] = useState(food);

    const desserts = meals[meals.length - 1].meals.map((first, index) => {

        const allDesserts = meals[meals.length - 1];

        return (
            <React.Fragment key={index}>

                <MyAccordionHeader>
                    {allDesserts.title[index]}
                </MyAccordionHeader>

                <MyAccordionInfo>
                    <BorderWrapper>
                        {allDesserts.info[index]}
                    </BorderWrapper>
                </MyAccordionInfo>

                <MyAccordionMealsContainer key={first.id}>
                    {first.map((second, index) => {
                        return (
                            <MyAccordionSingleMeal key={second.id}>

                                <MyAccordionTitle>
                                    {second.name}
                                </MyAccordionTitle>

                                <MyAccordionContent>
                                    {second.content}
                                </MyAccordionContent>

                            </MyAccordionSingleMeal>
                        )
                    })}
                </MyAccordionMealsContainer>
            </React.Fragment>

        )
    })

    return (
        <>
            <Accordion allowMultipleOpen >

                {meals.map(meal => (
                    <Container key={meal.id} id={meal.id} label={meal.header} background={meal.image}>
                        {
                            !Array.isArray(meal.title) ? (
                                <MyAccordionContainer>

                                    <MyAccordionHeader>
                                        {meal.title}
                                    </MyAccordionHeader>

                                    <MyAccordionInfo>

                                        <BorderWrapper>
                                            {meal.info}
                                        </BorderWrapper>

                                    </MyAccordionInfo>


                                    <MyAccordionMealsContainer>
                                        {meal.meals.map(meal => (
                                            <MyAccordionSingleMeal key={meal.id}>

                                                <MyAccordionTitle>
                                                    {meal.name}
                                                </MyAccordionTitle>

                                                <MyAccordionContent>
                                                    {meal.content}
                                                </MyAccordionContent>

                                            </MyAccordionSingleMeal>
                                        ))}

                                    </MyAccordionMealsContainer>

                                </MyAccordionContainer>

                            ) : (
                                <MyAccordionContainer key={meal.id}>
                                    {desserts}

                                    <a href="https://www.4rspecialtycakes.com/" target="_blank">
                                        <Button colorBeige>Specialty cakes</Button>
                                    </a>

                                </MyAccordionContainer>
                            )
                        }
                    </Container>
                ))}
            </Accordion>
        </>
    )
}

export default MyAccordion
