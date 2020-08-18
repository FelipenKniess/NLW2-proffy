import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon   from '../../assets/images/icons/unfavorite.png';
import whatsappIcon     from '../../assets/images/icons/whatsapp.png';
import { RectButton } from 'react-native-gesture-handler';

interface TeacherItem {
    title?: string;
}

const TeacherItem: React.FC<TeacherItem> = ({}) => {

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri: 'https://avatars0.githubusercontent.com/u/49380433?v=4'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Felipe Niehues Kniess</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Professor de matemática loucasso.
                {'\n'}{'\n'}
                Apaixonado por cálculo dale no dale.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora{'   '}
                    <Text style={styles.priceValue}>R$20</Text>
                </Text>
            
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unFavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;