import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import logoLanding from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
const Landing = () => {

    const {navigate} = useNavigation();

    function handleNavigationToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigationToStudyPages(){
        navigate('study');
    }
    return (
        <View style={styles.container}>
            <Image source={logoLanding} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo, { '\n' }
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton 
                onPress={handleNavigationToStudyPages} 
                style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton 
                onPress={handleNavigationToGiveClassesPage} 
                style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de 267 conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
}

export default Landing;