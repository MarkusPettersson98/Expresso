import React from 'react';
import { getReceipt } from '../../../API/expressoAPI';
import NoQRPage from './NoQRPage';

import QRPage from './QRPage';

/**
 * Här ser jag att vi 'kör igång' vår page och hämtar in objektet från backend för att sedan styra komponenterna.
 * I props tar vi in userID genom mapStateToProps och skickar sedan vidare uniqueID för att få en QR kod och
 * rätt attribut som ska visas som information om köpet för användaren.
 */

export default class Purchases extends React.Component {
    constructor(props) {
        console.log('Purchases: ', props.navigation.state);
        super(props);
        this.state = {
            receipt: {},
            receiptId: props.navigation.state.params
                ? props.navigation.state.params.orderID
                : '',
        };
    }

    async componentDidMount() {
        const receiptId = this.state.receiptId;

        // Check if receipt id exists. If so, resolve receipt
        const receipt = await getReceipt(receiptId);
        this.setState({
            receipt: receipt,
        });
    }

    render() {
        return this.state.receipt ? (
            <QRPage receipt={this.state.receipt} />
        ) : (
            <NoQRPage />
        );
    }
}
