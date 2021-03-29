import React, { useState } from 'react'
import Accordion from './Accordion'

import './MyAccordion.css'

import { Header, Info, Button, Container } from '../../Styled Components/styled-components'

import bbq_classics_bg from '../../img/menu/accordion/bbq-classics-bg.jpg'
import fresh_eats_bg from '../../img/menu/accordion/fresh-eats-bg.jpg'
import john_rivers_originals_bg from '../../img/menu/accordion/john-rivers-original-bg.jpg'
import kids_meals_bg from '../../img/menu/accordion/kids-meals-bg.jpg'
import desserts_bg from '../../img/menu/accordion/desserts-bg.jpg'
import homestyle_sides_bg from "../../img/menu/accordion/homestyle-sides-bg.jpg"

function MyAccordion() {

    const [meals, setMeal] = useState([
        {
            id: 1,
            header: "BBQ Classics",
            title: "BBQ Classics",
            info: "Menu options include: sandwich, sandwich plus two sides, meat plus three sides and your choice of bread, and meat by the 1/2 lb. *Pricing and Menu item availability vary by location.",
            meals: [
                {
                    id: 1,
                    name: "NEW—Cheerwine Chicken Burnt Ends",
                    content: "Coke-a-Cola brined chicken with sweet hints of cherry, double smoked, with a Cheerwine BBQ Sauce.",
                },
                {
                    id: 2,
                    name: "Pulled Pork",
                    content: "Bone-in pork shoulder rubbed with our 4R All Purpose Rub and smoked for 12 hours until fork-tender. Hand-pulled to order.",
                },
                {
                    id: 3,
                    name: "Burnt Ends",
                    content: "Chopped brisket & pulled pork, smoked in 4R Signature Sauce.",
                },
                {
                    id: 4,
                    name: "Smoked Turkey",
                    content: "Turkey breast brined for 48 hours and seasoned in our 4R Turkey Rub then smoked. "
                },
                {
                    id: 5,
                    name: "St. Louis Style Ribs",
                    content: "Pork ribs, seasoned with 4R All Purpose Rub, smoked and finished on the grill with a Honey BBQ sauce. "
                },
                {
                    id: 6,
                    name: "Smokehouse 2x2",
                    content: "Your choice of 2 meats (Brisket, Pulled Pork, Burnt Ends, Pulled Chicken) and 2 Sides"
                },
                {
                    id: 7,
                    name: "Chicken Nugget Platter",
                    content: "50pc "
                },
                {
                    id: 8,
                    name: "4R Party Package | Available for 6 or 12 people",
                    content: "Includes: 4R Signature Beef Brisket, Pulled Pork, Texas Smoked Sausage, BBQ Baked Beans, Mac and Cheese, Southern Coleslaw, Slider Buns, 4R Signature Sauce "
                },
                {
                    id: 9,
                    name: "Signature Angus Brisket",
                    content: "30-day wet-aged beef brisket rubbed with our 4R Brisket Rub and smoked for 18 hours. Hand sliced to order. "
                },
                {
                    id: 10,
                    name: "Pulled Chicken",
                    content: "Seasoned with 4R All Purpose Rub, smoked, chopped & tossed in 4R Signature Sauce."
                },
                {
                    id: 11,
                    name: "Beyond Burnt Ends",
                    content: "100% plant-based meat alternative double smoked with vegan BBQ sauce and slow-roasted until caramelized"
                },
                {
                    id: 12,
                    name: "Texas Sausage",
                    content: "Housemade from a family-owned company in Texas. Beef & pork sausage smoked and packed full of flavor."
                },
                {
                    id: 13,
                    name: "Smoked Chicken",
                    content: "Chicken on the bone, seasoned with 4R All Purpose Rub, smoked and finished on the grill with 4R Signature Sauce."
                },
                {
                    id: 14,
                    name: "Happy Herd",
                    content: "Sampler of 4 different meats, 2 sides, and 4 pieces of bread (your choice)—Feeds a family of 4 "
                },
                {
                    id: 15,
                    name: "Chicken & Rib Combo",
                    content: "A quarter Smoked Chicken, quarter rack of St. Louis Style Ribs, and your choice of two sides "
                }
            ],
            image: bbq_classics_bg
        },
        {
            id: 2,
            header: "Fresh Eats",
            title: "Fresh Eats",
            info: "DRESSINGS INCLUDE: Ranch, Blue Cheese, Balsamic Vinaigrette, Smoked Tomato Vinaigrette. *Pricing and Menu item availability vary by location.",
            meals: [
                {
                    id: 1,
                    name: "FARMHOUSE SALAD",
                    content: "Tender kale spring mix and crisp romaine topped with protein-rich roasted chickpeas, chopped cucumber, tomatoes, onion, cheddar cheese and signature 4R cornbread croutons"
                }
            ],
            image: fresh_eats_bg
        },
        {
            id: 3,
            header: "John Rivers Originals",
            title: "John Rivers Originals",
            info: "John Rivers Originals. *Pricing and menu item availability vary by location.",
            meals: [
                {
                    id: 1,
                    name: "NEW—Burnt Ends Melt",
                    content: "Smokehouse Burnt ends with provolone & cheddar cheese topped with caramelized onions on sliced sourdough bread."
                },
                {
                    id: 2,
                    name: "Messy Pig",
                    content: "Heaping pile of pulled pork between 2 layers of coleslaw, topped with pickles and jalapeños, served on a brioche bun and smothered in 4R Signature Sauce."
                },
                {
                    id: 3,
                    name: "The Longhorn",
                    content: "Chopped brisket, Texas sausage served on a toasted roll over smokehouse relish, topped with onion rings and melted provolone."
                },
                {
                    id: 4,
                    name: "BBQ Quesadilla",
                    content: "Your choice of meat, cheddar cheese and 4R Signature Sauce on a tortilla and grilled to perfection."
                },
                {
                    id: 5,
                    name: "NEW—Brisket Hot Dog",
                    content: "Quarter pounder Signature Angus Brisket dog served on a New England style bun topped with signature burger sauce, sliced onion and Smokehouse relish."
                },
                {
                    id: 6,
                    name: "Texas Destroyer",
                    content: "Signature Angus brisket, topped with onion rings, jalapeños, melted provolone, served on a brioche bun and smothered in 4R Signature Sauce."
                },
                {
                    id: 7,
                    name: "BBQ Street Tacos",
                    content: "Three grilled tortillas loaded with your choice of meat, pico de gallo, queso fresco, guasacaca, and crème fraîche topped with fresh chopped cilantro. "
                },
                {
                    id: 8,
                    name: "Smokehouse Sliders (3)",
                    content: "Choice of three meats drizzled with 4R Signature Sauce."
                }
            ],
            image: john_rivers_originals_bg
        },
        {
            id: 4,
            header: "Homestyle Sides",
            title: "Homestyle Sides",
            info: "side options include: single serving, pint or quart. *pricing and menu item availability vary by location.",
            meals: [
                {
                    id: 1,
                    name: "BBQ Baked Beans",
                    content: "4R baked beans with brisket and pork "
                },
                {
                    id: 2,
                    name: "Smokehouse Corn*",
                    content: "Locally sourced corn fresh off the cob and then sauteed with smoked tomatoes, spices, garlic, and then topped with cilantro. *Premium side, additional charge."
                },
                {
                    id: 3,
                    name: "Smoked Jalapeños (2)*",
                    content: "Fresh jalapeños deseeded, filled with cream cheese, wrapped in bacon, and then hickory smoked. Two per serving. *Premium side, additional charge."
                },
                {
                    id: 4,
                    name: "Collard Greens",
                    content: "Collard greens with ham"
                },
                {
                    id: 5,
                    name: "Southern Green Beans",
                    content: "Classic green beans with bacon"
                },
                {
                    id: 6,
                    name: "Fried Okra",
                    content: "Seasoned okra, breaded, and crispy fried. *Vegan-friendly "
                },
                {
                    id: 7,
                    name: "Dinner Roll",
                    content: "Classic sweetened potato roll"
                },
                {
                    id: 8,
                    name: "Side Sampler",
                    content: "3 sides + your choice of bread"
                },
                {
                    id: 9,
                    name: "Mac & Cheese",
                    content: "Classic, creamy mac & cheese "
                },
                {
                    id: 10,
                    name: "Sweet Potato Casserole*",
                    content: "Mashed sweet potatoes with butter, brown sugar, and spices. *Premium side, additional charge."
                },
                {
                    id: 11,
                    name: "Texas Cornbread",
                    content: "Traditional cornbread with cheddar cheese and jalapeños"
                },
                {
                    id: 12,
                    name: "Southern Coleslaw",
                    content: "Fresh cabbage and carrots with a sweet dressing "
                },
                {
                    id: 13,
                    name: "Crispy Cream Bread Pudding",
                    content: "Bread pudding made from scratch with doughnuts, raisins & more, topped with a house-made doughnut glaze."
                },
                {
                    id: 14,
                    name: "French Fries",
                    content: "Seasoned crinkle-cut fries. *Vegan-friendly "
                },
                {
                    id: 15,
                    name: "Side Salad",
                    content: "Crisp romaine topped with chopped cucumber, tomatoes, and your choice of dressing"
                }
            ],
            image: homestyle_sides_bg
        },
        {
            id: 5,
            header: "Kids Meals",
            title: "Kids Meals",
            info: "Kids Meals Include: one side, a cookie, and a fountain drink. *Pricing and menu item availability vary by location.",
            meals: [
                {
                    id: 1,
                    name: "Brisket Slider",
                    content: "Signature smoked Angus brisket between a slider bun"
                },
                {
                    id: 2,
                    name: "Pulled Pork Slider",
                    content: "Southern pulled pork between a slider bun"
                },
                {
                    id: 3,
                    name: "1/4 Smoked Chicken",
                    content: "Chicken on the bone, seasoned with 4R All Purpose Rub, hickory smoked and finished on the grill with 4R Signature Sauce."
                },
                {
                    id: 4,
                    name: "Chicken Nuggets",
                    content: "Crispy fried chicken nuggets"
                },
                {
                    id: 5,
                    name: "Pulled Chicken Slider",
                    content: "Tender pulled chicken between a slider bun"
                },
                {
                    id: 6,
                    name: "Hot Dog",
                    content: "Hotdog split down the center and grilled"
                },
                {
                    id: 7,
                    name: "Cheese Quesadilla",
                    content: "Grilled cheese quesadilla "
                }
            ],
            image: kids_meals_bg
        },
        {
            id: 6,
            header: "Desserts",
            title: ["Whole Cakes & Wedge O’ Cake", "Cupcakes & Bars", "Cookies", "Sweet Treats"],
            info: [
                "Signature Sweet Shop cakes! *Pricing and menu item availability vary by location.",
                "Individually sized gourmet delights! Please check with your local sweet shop for seasonal offerings. *Pricing and menu item availability vary by location.",
                "*Pricing and Menu item availability vary by location. Check with your local sweet shop for seasonal offerings",
                "Smokehouse Desserts. *Pricing and menu item availability vary by location."
            ],
            meals: [
                [
                    {
                        id: 1,
                        name: "Quintessential Chocolate",
                        content: "Double chocolate cake with chocolate chips, chocolate frosting, chocolate ganache & rimmed in Oreo crumbs."
                    },
                    {
                        id: 2,
                        name: "Coconut",
                        content: "Butter cake full of coconut, filled and frosted in fluffy house frosting and covered in shredded coconut."
                    }
                ],
                [
                    {
                        id: 1,
                        name: "Birthday Cupcake",
                        content: "Butter cake with house frosting, covered in rainbow sprinkles & topped with a cherry."
                    },
                    {
                        id: 2,
                        name: "Bayou Bar",
                        content: "Pecan shortbread crust with a sweet cream cheese filling."
                    },
                    {
                        id: 3,
                        name: "Classic Brownie",
                        content: "Rich, fudgy classic chocolate brownie."
                    },
                    {
                        id: 4,
                        name: "Double Chocolate Cupcake",
                        content: "Decadent Chocolate Cupcake with Chocolate Frosting "
                    },
                    {
                        id: 5,
                        name: "Hello Dolly Bar",
                        content: "A decadent bar made with coconut, chocolate chips, butterscotch and pecans on a graham cracker crust"
                    }
                ],
                [
                    {
                        id: 1,
                        name: "John's Chocolate Chip Cookie",
                        content: "Nut-free buttery chocolate chip, chocolate chunk, dark and chocolate chip cookie. "
                    },
                    {
                        id: 2,
                        name: "Reese's Cookie",
                        content: "Peanut butter cookie studded with halves of Reese's cups"
                    }
                ],
                [
                    {
                        id: 1,
                        name: "Crispy Cream Bread Pudding",
                        content: "Bread pudding made from scratch with doughnuts, raisins & more, topped with a house-made doughnut glaze."
                    },
                    {
                        id: 2,
                        name: "Assorted Pudding Cups",
                        content: "Rotates Daily. Offerings include: S'mores Pudding Cup, Reese's Pudding Cup, Banana Dream Pudding Cup. "
                    }
                ]
            ],
            image: desserts_bg
        }
    ]);

    const desserts = meals[meals.length - 1].meals.map((first, index) => {

        const allDesserts = meals[meals.length - 1];
        return (
            <>
                <Header color="#000" letterSpacing="10px" fontSize="3.8em" marginTop="25px">{allDesserts.title[index]}</Header>
                <Info color="#000" fontSize=".7em" letterSpacing="3px"><span>{allDesserts.info[index]}</span></Info>
                <div className="my-accordion__mealsContainer">
                    {first.map((second, index) => {
                        return (
                            <div className="my-accordion__meal">
                                <h1>{second.name}</h1>
                                <p>{second.content}</p>
                            </div>
                        )
                    })}
                </div>
            </>

        )
    })





    return (
        <div>
            <Accordion allowMultipleOpen >

                {meals.map(meal => (
                    <Container label={meal.header} background={meal.image}>
                        {
                            !Array.isArray(meal.title) ? (
                                <div className="my-accordion__container">
                                    <Header color="#000" letterSpacing="10px" fontSize="3.8em">{meal.title}</Header>
                                    <Info color="#000" fontSize=".7em" letterSpacing="3px"><span>{meal.info}</span></Info>
                                    <div className="my-accordion__mealsContainer">
                                        {meal.meals.map(meal => (
                                            <div className="my-accordion__meal">
                                                <h1>{meal.name}</h1>
                                                <p>{meal.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                    <div className="my-accordion__container">
                                        {desserts}
                                        <a href="https://www.4rspecialtycakes.com/" target="_blank">
                                            <Button colorBeige>Specialty cakes</Button>
                                        </a>
                                    </div>
                                )
                        }


                    </Container>
                ))}

            </Accordion>



        </div>
    )
}

export default MyAccordion
