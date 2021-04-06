import all_purpose_rub_1 from './img/shop/ALL-PURPOSE-RUB-1.jpg'
import bbq_sauce_variety_pack_1 from './img/shop/BBQ-SAUCE-VARIETY-PACK-1.jpg'
import bbq_sauce_variety_pack_2 from './img/shop/BBQ-SAUCE-VARIETY-PACK-2.jpg'
import bourbon_blended_1 from './img/shop/BOURBON-BLENDED-1.jpg'
import bourbon_blended_2 from './img/shop/BOURBON-BLENDED-2.jpg'
import brisket_rub_1 from './img/shop/BRISKET-RUB-1.jpg'
import coffee_rub_1 from './img/shop/COFFEE-RUB-1.jpg'
import hot_barbecue_sauce_1 from './img/shop/HOT-BARBECUE-SAUCE-1.jpg'
import maple_bourbon_syrup_1 from './img/shop/Maple-Bourbon-Syrup-1.jpg'
import maple_bourbon_syrup_2 from './img/shop/Maple-Bourbon-Syrup-2.jpg'
import mustard_barbecue_sauce_1 from './img/shop/MUSTARD-BARBECUE-SAUCE-1.jpg'
import pitmaster_kit_1 from './img/shop/Pitmaster-Kit-1.jpg'
import pitmaster_kit_2 from './img/shop/PITMASTER-KIT-2.jpg'
import products_bg from './img/shop/products-bg.jpg'
import shop_banner from './img/shop/shop-banner.jpg'
import signature_barbecue_sauce_1 from './img/shop/SIGNATURE-BARBECUE-SAUCE-1.jpg'
import gift_card from './img/shop/4R-GIFT-CARD.jpg'
import hot_brisket_now_tee from './img/shop/4R-HOT-BRISKET-NOW-TEE.jpg'
import cap_4r from './img/shop/cap-4r.jpg'
import the_southern_cowboy_cookbook from './img/shop/THE-SOUTHERN-COWBOY-COOKBOOK.jpg'
import BBQRetailFlagShirt from './img/shop/BBQ-Retail-Flag-Shirt.jpg'

import carrollwood from "./img/catering/carrollwood.jpeg";
import coral_springs from "./img/catering/coral-springs.jpeg";
import daytona from "./img/catering/daytona.jpeg";
import gainesville from "./img/catering/gainesville.jpeg";
import jacksonville from "./img/catering/jacksonville.jpeg";
import kissimee from "./img/catering/kissimmee.jpeg";
import longwood from "./img/catering/longwood.jpeg";
import orange_park from "./img/catering/orange-park.jpeg";
import south_tampa from "./img/catering/south-tampa.jpeg";
import tallahassee from "./img/catering/tallahassee.jpeg";
import east_orlando from "./img/catering/UCF-east-orlando.jpeg";
import winter_garden from "./img/catering/winter-garden.jpeg";
import winter_park from "./img/catering/winter-park.jpeg";
import ribs_2 from './img/gift-cards/ribs-2.jpeg';
import gift_card_2 from './img/gift-cards/gift-card.jpeg';
import fried_meat from './img/gift-cards/fried-meat.jpeg';

const shopProducts = [
    {
        id: 1,
        category: "food&sauces",
        header: "4 Rivers bbq sauce variety pack",
        priceInfo: " $28.95",
        price: 28.95,
        subtotal: 0,
        amount: 1,
        content: "The 4 Rivers BBQ Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!",
        image: [bbq_sauce_variety_pack_1, bbq_sauce_variety_pack_2]
    },
    {
        id: 2,
        category: "food&sauces",
        header: "All purpose rub",
        priceInfo: "$10.95",
        price: 10.95,
        subtotal: 0,
        amount: 1,
        content: "4 RIVERS SIGNATURE TASTE – Like all of our rubs, the founder, John Rivers, personally blended the 4R All Purpose Rub to bring together the favorite flavors of the South. His multi-regional recipe gives a creative blend of sweet and salty with a savory touch perfect for pork and poultry. No matter your method – roasting, slow-cooking, or grilling – 4R All Purpose Rub is engineered to bring out the best in your food.",
        image: all_purpose_rub_1
    },
    {
        id: 3,
        category: "food&sauces",
        header: "Brisket rub",
        priceInfo: "$10.95",
        price: 10.95,
        subtotal: 0,
        amount: 1,
        content: "John Rivers personally blended the 4R Brisket Rub to bring together the favorite flavors of the South. His multi-regional recipe has just the right seasoning to enhance your brisket and other beef products. No matter your method – roasting, slow-cooking, or grilling – 4R Brisket Rub is engineered to bring out the best in your food.",
        image: brisket_rub_1
    },
    {
        id: 4,
        category: "food&sauces",
        header: "Coffee rub",
        priceInfo: "$10.95",
        price: 10.95,
        subtotal: 0,
        amount: 1,
        content: "Like all of our rubs, our founder, John Rivers, personally blended the 4R Coffee Rub to bring together the favorite flavors of the South. His multi-regional recipe gives beef on the open flame a kick of flavor. No matter your method – roasting, slow-cooking, or grilling – 4R Coffee Rub is engineered to bring out the best in your food.",
        image: coffee_rub_1
    },
    {
        id: 5,
        category: "food&sauces",
        header: "Hot barbecue sauce",
        priceInfo: "$10.95",
        price: 10.95,
        subtotal: 0,
        amount: 1,
        content: "Our founder, John Rivers, personally blended the 4 Rivers Smokehouse Hot BBQ Sauce to bring together the favorite flavors of the South. Similar to the 4 Rivers Signature BBQ Sauce with an extra layer of heat, his multi-regional recipe provides an ideal combination of sweet and savory with a smoky, spicy finish that complements pork, chicken, and beef. No matter your cooking method, 4R Hot BBQ Sauce is engineered to bring out the best in your food.",
        image: hot_barbecue_sauce_1
    },
    {
        id: 6,
        category: "food&sauces",
        header: "Maple bourbon syrup",
        priceInfo: "$8.99 - $15.99",
        price: [8.99, 15.99],
        subtotal: 0,
        amount: 1,
        content: "Old fashioned syrup with a twist – A drizzle to cure all ailments, use it morning and night – Pairs well with chicken n’ waffles",
        image: [maple_bourbon_syrup_1, maple_bourbon_syrup_2]
    },
    {
        id: 7,
        category: "food&sauces",
        header: "Mustard barbecue sauce",
        priceInfo: "$10.95",
        price: 10.95,
        subtotal: 0,
        amount: 1,
        content: "John Rivers, personally blended the 4 Rivers Mustard BBQ Sauce using authentic Carolina-style techniques and ingredients to create a sauce with the perfect amount of twang that can be enjoyed on almost anything. No matter your method – roasting, slow-cooking, or grilling – 4 Rivers Mustard BBQ Sauce is engineered to bring out the best in your food.",
        image: mustard_barbecue_sauce_1
    },
    {
        id: 8,
        category: "food&sauces",
        header: "Pitmaster kit",
        priceInfo: "$59.95",
        price: 59.95,
        subtotal: 0,
        amount: 1,
        content: "Become your very own Pitmaster with 4R Signature Sauce, 4R Hot Signature Sauce, Brisket Rub, All Purpose Rub, and Coffee Rub, all in one kit.",
        image: [pitmaster_kit_1, pitmaster_kit_2]
    },
    {
        id: 9,
        category: "food&sauces",
        header: "Signature barbecue sauce",
        priceInfo: "$10.95",
        price: 10.95,
        subtotal: 0,
        amount: 1,
        content: "4 RIVERS SIGNATURE TASTE – Our founder, John Rivers, personally blended the 4 Rivers Smokehouse Signature BBQ Sauce to bring together the favorite BBQ flavors of the South. His multi-regional recipe provides an ideal combination of sweet and savory with a smoky, spicy finish that complements pork, chicken, and beef. No matter your method — roasting, slow-cooking, or grilling —4 Rivers Smokehouse Signature BBQ Sauce is engineered to bring out the best in your food.",
        image: signature_barbecue_sauce_1
    },
    {
        id: 10,
        category: "retail",
        header: "4R gift card",
        priceInfo: "$10.00 - $100.00",
        price: [10.00, 100.00],
        subtotal: 0,
        amount: 1,
        content: "To purchase a custom gift card amount, please call 1-844-4RIVERS.",
        image: gift_card
    },
    {
        id: 11,
        category: "retail",
        header: "4R hot brisket now tee",
        priceInfo: "$15.00",
        price: 15.00,
        subtotal: 0,
        amount: 1,
        content: "",
        image: hot_brisket_now_tee
    },
    {
        id: 12,
        category: "retail",
        header: "Smokehouse",
        priceInfo: "$10.00",
        price: 10.00,
        subtotal: 0,
        amount: 1,
        content: "",
        image: cap_4r
    },
    {
        id: 13,
        category: "retail",
        header: "The Southern cowboy cookbook",
        priceInfo: "$28.99",
        price: 28.99,
        subtotal: 0,
        amount: 1,
        content: "In the Southern Cowboy Cookbook, Chef John Rivers combines the region’s most beloved culinary influences to create a fresh new take on comfort food. With his bold blending of Deep-South specialties, traditional Texas BBQ, and Low Country cuisine, the founder and pitmaster of the acclaimed 4 Rivers Smokehouse shares his secrets for dishes that range from the iconic – Smoked Brisket, Pulled Pork, St. Louis Ribs, Red Velvet Cake – to more contemporary favorites like Shrimp ‘n Grits, Grilled Brisket Pizza, Coffee-Rubbed Ribeye, and Bourbon Pecan Pie. With dozens of easy and approachable recipes, 150-plus photographs, skillful techniques, and down-home charm, The Southern Cowboy Cookbook is designed to be a kitchen classic.",
        image: the_southern_cowboy_cookbook
    },
    {
        id: 14,
        category: "retail",
        header: "4R RED , WHITE, & QUE TEE",
        priceInfo: "$15.00",
        price: 15.00,
        subtotal: 0,
        amount: 1,
        content: "",
        image: BBQRetailFlagShirt
    }
];

const couponCodes = ["zima", "lato", "wiosna", "jesien"];

const states =
    [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]

const locations = [
    {
        id: 1,
        name: "Carrollwood",
        address: "14330 N Dale Mabry Hwy",
        city: "Tampa FL 33618",
        image: carrollwood,
    },
    {
        id: 2,
        name: "Coral Springs",
        address: "2660 North University Drive",
        city: "Coral Springs FL 33065",
        image: coral_springs,
    },
    {
        id: 3,
        name: "Daytona",
        address: "1866 Victory Cir",
        city: "Daytona Beach FL 32114",
        image: daytona,
    },
    {
        id: 4,
        name: "Gainesville",
        address: "3262 SW 35th Blvd",
        city: "Gainesville FL 32608",
        image: gainesville,
    },
    {
        id: 5,
        name: "Jacksonville",
        address: "9220 Baymeadows Road",
        city: "Jacksonville FL 32256",
        image: jacksonville,
    },
    {
        id: 6,
        name: "Kissimmee",
        address: "874 W Osceola Pkwy",
        city: "Kissimmee FL 34741",
        image: kissimee,
    },
    {
        id: 7,
        name: "Longwood",
        address: "1869 West State Road 434",
        city: "Longwood FL 32750",
        image: longwood,
    },
    {
        id: 8,
        name: "Orange Park",
        address: "220 Park Ave",
        city: "Orange Park FL 32073",
        image: orange_park,
    },
    {
        id: 9,
        name: "South Tampa",
        address: "623 South MacDill Avenue",
        city: "Tampa FL 33609",
        image: south_tampa,
    },
    {
        id: 10,
        name: "Tallahassee",
        address: "1817 Thomasville Road Ste.100",
        city: "Tallahassee Florida 32303",
        image: tallahassee,
    },
    {
        id: 11,
        name: "UCF-East Orlando",
        address: "11764 University Blvd",
        city: "Orlando FL 32817",
        image: east_orlando,
    },
    {
        id: 12,
        name: "Winter Garden",
        address: "1047 South Dillard Street",
        city: "Winter Garden FL 34787",
        image: winter_garden,
    },
    {
        id: 13,
        name: "Winter Park",
        address: "1600 West Fairbanks Avenue",
        city: "Winter Park FL 32789",
        image: winter_park,
    },
];

const gifts = [
    {
        id: 1,
        header: "Purchase e-gift card",
        info: "Order a gift card online and email it quickly and easily to your friend or loved one.",
        image: ribs_2,
        btnLabel: "Purchase e-gift card",

    },
    {
        id: 2,
        header: "Purchase gift card",
        info: "Mail a 4Rivers Gift Card to a family member or friend. ",
        image: gift_card_2,
        btnLabel: "Purchase gift card"
    },
    {
        id: 3,
        header: "Check your balance",
        info: "Use your card number to check the balance on your 4Rivers Gift Card. If your card is showing as  'Invalid Card Number' please, contact us via email.",
        image: fried_meat,
        btnLabel: "Check your balance"
    }
];

export { shopProducts, couponCodes, states, locations, gifts }



