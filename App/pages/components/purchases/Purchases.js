import React from 'react';
import NoQRPage from './NoQRPage';

import QRPage from './QRPage';

/**
 * Här ser jag att vi 'kör igång' vår page och hämtar in objektet från backend för att sedan styra komponenterna.
 * I props tar vi in userID genom mapStateToProps och skickar sedan vidare uniqueID för att få en QR kod och
 * rätt attribut som ska visas som information om köpet för användaren.
 */

export default class Purchases extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // If there is an orderID, render QR code.
        const { params } = this.props.navigation.state;

        return params ? <QRPage receiptId={params.orderID} /> : <NoQRPage />;
    }
}
