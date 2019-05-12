import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import RadioGroup from 'react-native-radio-buttons-group';

export default class ModalComp extends Component {
    constructor(props) {
        super(props);
    }

    //States own or borrowed mug used for Modal
    state = {
        data: [
            {
                label: 'Egen (-2 kr)',
                ownMug: true,
            },
            {
                label: 'Låna',
                value: 'Låna_value',
                ownMug: false,
            },
        ],
    };

    //Updates state for Modal
    onPress = data => this.setState({ data });

    //On closing modal, sends order to parent component with value t/f of ownMug
    onClose = () => {
        selectedButton = this.state.data.find(e => e.selected == true);
        ownMug = selectedButton.ownMug;
        this.props.orderCoffee(ownMug);
        this.props.hideModal();
    };

    render() {
        //Which option is selected when the modal opens
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton
            ? selectedButton.value
            : this.state.data[0].label;
        return (
            //State of modal comes as props from parent component
            <Modal isVisible={this.props.isVisible}>
                <View style={styles.modalContainer}>
                    <Text style={styles.valueText}>Välj mugg</Text>
                    <RadioGroup
                        radioButtons={this.state.data}
                        onPress={this.onPress}
                    />
                    <Text
                        onPress={this.onClose}
                        style={styles.add_mug_container}
                    >
                        LÄGG TILL
                    </Text>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    modalContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    valueText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#7C6A70',
        marginBottom: 20,
    },

    add_mug_container: {
        backgroundColor: '#5AA3B7',
        color: '#FFFFFF',
        width: 140,
        height: 40,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        paddingTop: 7,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden',
    },
});
