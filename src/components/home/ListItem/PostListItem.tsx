import React from 'react'
import styles from '../styles/PostListItem.style';
import { BaseItemPropsNew } from '../../../constants/Constants';
import moment from 'moment';
import { Text, Thumbnail, View } from 'native-base';
import Image from 'react-native-scalable-image';
import { Dimensions } from 'react-native';

const PostListItem: React.FC<BaseItemPropsNew<any, any, any>> = ({ item, selectedIndex, index, onPress }) => {

    return (
        <View style={styles.ListItem}>

            <View style={styles.ImageView}>
                <View style={styles.ProfileImageContainerView}>
                    <Thumbnail style={styles.ProfileImageView} source={{ uri: item.profileImage }} />
                    <Text style={styles.UserNameView}>{item.username}</Text>
                </View>
                <Image width={Dimensions.get('window').width} style={styles.PostView} resizeMode={'contain'} source={{ uri: item.image }}></Image>
                <Text style={styles.CaptionContainerView}>
                    <Text style={styles.CaptionUserNameView}>{item.username + " "}</Text>
                    {item.caption}
                </Text>
                <Text style={styles.DateView}>{moment(item.date * 1000).startOf('seconds').fromNow()}</Text>
            </View>
        </View>
    )
}

export default PostListItem
