const stripe = require('stripe')('sk_test_51Im0IzE4ZbnvUDlsZJouI1hjvt2rZWsh49e5T2WBVYw1c0Eomki7sehrMDpspvo32VTotMd07QNlukfr6VZ0Udpp000Ndb88d4')

async function postCharge(req, res) {
    try {
        const { amount, source, receipt_email } = req.body

        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source,
            receipt_email
        })

        if (!charge) throw new Error('charge unsuccessful')

        res.status(200).json({
            message: 'charge posted successfully',
            charge
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = postCharge