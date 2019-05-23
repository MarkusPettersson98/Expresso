import React from 'react';
import NoQRPage from './NoQRPage';
import QRPage from './QRPage';

import { View } from 'react-native';

/**
 * Här ser jag att vi 'kör igång' vår page och hämtar in objektet från backend för att sedan styra komponenterna.
 * I props tar vi in userID genom mapStateToProps och skickar sedan vidare uniqueID för att få en QR kod och
 * rätt attribut som ska visas som information om köpet för användaren.
 */

const Purchases = props => {
    const { params } = props.navigation.state;
    // If there is an orderID, render QR code.
    return (
        <View style={{
            flex: 1
        }}>
            {params ? (<QRPage receiptId={params.orderID} />) : (<NoQRPage />)}
        </View>
    );
};

export default Purchases;
