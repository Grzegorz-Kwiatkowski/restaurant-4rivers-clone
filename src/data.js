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
        header: "Bourbon blended vanilla extract",
        priceInfo: "$19.99",
        price: 19.99,
        subtotal: 0,
        amount: 1,
        content: "Slip into cakes, cookies, or anything that needs a daring hint of barrel aged bourbon and vanilla!",
        image: [bourbon_blended_1, bourbon_blended_2]
    },
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
        category: "retail",
        header: "The Southern cowboy cookbook",
        priceInfo: "$28.99",
        price: 28.99,
        subtotal: 0,
        amount: 1,
        content: "In the Southern Cowboy Cookbook, Chef John Rivers combines the region’s most beloved culinary influences to create a fresh new take on comfort food. With his bold blending of Deep-South specialties, traditional Texas BBQ, and Low Country cuisine, the founder and pitmaster of the acclaimed 4 Rivers Smokehouse shares his secrets for dishes that range from the iconic – Smoked Brisket, Pulled Pork, St. Louis Ribs, Red Velvet Cake – to more contemporary favorites like Shrimp ‘n Grits, Grilled Brisket Pizza, Coffee-Rubbed Ribeye, and Bourbon Pecan Pie. With dozens of easy and approachable recipes, 150-plus photographs, skillful techniques, and down-home charm, The Southern Cowboy Cookbook is designed to be a kitchen classic.",
        image: the_southern_cowboy_cookbook
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

export { shopProducts, couponCodes, states }



