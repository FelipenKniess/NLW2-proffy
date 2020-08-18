import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';



const GiveClasses = () => {

    const { goBack } = useNavigation();

    function handleNavigationToLanding() {
        goBack();
    }

    return(
        <View style={styles.container}>
            <ImageBackground 
             source={giveClassesBgImage}
             resizeMode="contain"
             style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa platafroma web.
                </Text>
            </ImageBackground>
            <RectButton onPress={handleNavigationToLanding}style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;