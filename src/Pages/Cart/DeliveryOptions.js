import React, { useContext } from 'react'
import { MainContext } from '../../Contexts/Contexts'

function DeliveryOptions() {

    const theme = useContext(MainContext);


    return (
        <div className="deliveryOptions">
            <div onChange={theme.handleDelivery}>
                <input type="radio" value="USPS First-Class" name="gender" /> USPS First-Class: $ {theme.delivery}<br />
                <input type="radio" value="USPS Priority" name="gender" /> USPS Priority: $ {theme.delivery}<br />
                <input type="radio" value="FedEx 2 Day" name="gender" /> FedEx 2 Day: $ {theme.delivery}<br />
            </div>

            <label>
                <p>{theme.isUsaLocationActive ? "United States (US)" : "Select a country /region ..."}</p>
                <div>
                    <select value={theme.addressLocation} onChange={theme.handleAddressLocation}>
                        <option value="address_other">Select a country /region ...</option>
                        <option value="address_usa">United States (US)</option>
                    </select>
                    <br />
                    {theme.addressLocation === "address_usa" ? (
                        <>
                            <select value={theme.address_state} onChange={theme.handleAddressState}>
                                {theme.states.map(state => <option value={state.abbreviation}>{state.name}</option>)}
                            </select>
                            <br />
                            <input name="townOrCity" value={theme.townOrCity} onChange={theme.handleAddressCityZip} type="text" placeholder="Town / City" />
                            <br />
                            <input name="postcodeOrZip" value={theme.postcodeOrZip} onChange={theme.handleAddressCityZip} type="text" placeholder="Postcode / ZIP" />
                            <br />
                        </>


                    ) : (
                            <>
                                <input name="stateOrCountry" value={theme.stateOrCountry} onChange={theme.handleAddressCityZip} type="text" placeholder="State / Country" />
                                <br />
                                <input name="townOrCity" value={theme.townOrCity} onChange={theme.handleAddressCityZip} type="text" placeholder="Town / City" /><br />
                                <input name="postcodeOrZip" value={theme.postcodeOrZip} onChange={theme.handleAddressCityZip} type="text" placeholder="ZIP" /><br />
                            </>
                        )}
                </div>

            </label>

        </div >
    )
}

export default DeliveryOptions
