import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

// import { withNavigation } from 'react-navigation';

import CoffeeDisplay from './CoffeeDisplay';
import { getReceipt } from '../../../API/expressoAPI';


export default ReceiptView = async ({ receiptId }) => {
    /*Kvittot som hämtas sparas bak i customer för att minska kodduplicering
        
        Är just nu hårdkodat både här, man hämtar endast kvitto #7, även kunden 
        hämtas hårdkodat genom funktionen getReceiptUser i Purchases.js detta borde
        göras dynamiskt istället.
        */
    console.log("ReceiptView receiptIDIDIDIDID", receiptId);
    const receipt = await getReceipt(receiptId);
    console.log("ReceiptView receipt", receipt);

    return (
        <View style={styles.container}>
            <Text style={styles.textRubrik}>Tack för din beställning!</Text>

            <View style={styles.infoBox}>
                <Text style={styles.textUnderrubrik1}>Varor</Text>

                <View style={styles.varorTable}>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            width: 40,
                        }}
                    >
                        Antal
                    </Text>
                    <Text style={styles.boldtext}>Kaffesort</Text>
                    <Text style={styles.boldtext}>Muggtyp</Text>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            width: 35,
                        }}
                    >
                        Pris
                    </Text>
                </View>
                <ScrollView>
                    {/* <CoffeeDisplay coffees={receipt.coffees} /> */}
                </ScrollView>
                <View style={{ flex: 7 }}>
                    <Text style={styles.textUnderrubrik2}>
                        Upphämtningsställe
                    </Text>
                    <Text style={styles.text}>
                        {/* {receipt.shop.name} {'\n'} */}
                    </Text>

                    {/* Klickar nu endast vidare till kartan, borde visa vilket affär
                            med någon typ av markering */}
                    <Text style={styles.text}>
                        {/* Totalpris: {receipt.totalPrice} {'\n'} */}
                    </Text>
                    <Text style={styles.text}>
                        {/* Datum: {receipt.date} {'\n'} */}
                    </Text>
                    {/* <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Karta')}
                    >
                        <Text style={styles.knapp}>Gå till karta</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        width: '100%',
        backgroundColor: '#57454B',
        paddingLeft: 10,
        paddingRight: 10,
    },
    textRubrik: {
        top: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    },
    infoBox: {
        flex: 1,
        top: 20,
    },
    varorTable: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textUnderrubrik1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
    },
    textUnderrubrik2: {
        top: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
    },
    text: {
        top: 10,
        color: 'white',
    },
    boldtext: {
        color: 'white',
        fontWeight: 'bold',
        width: 140,
    },
    table: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    map: {
        width: '47%',
        height: '50%',
        alignSelf: 'flex-end',
    },
    knapp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'flex-end',
        marginRight: '10%',
    },
});

// export default withNavigation(ReceiptView);
