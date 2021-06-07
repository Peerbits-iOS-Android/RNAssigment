import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Container, Image, Thumbnail, Content, Button, Item, Input, Footer, FooterTab, Text, View } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker'
import styles from '../styles/AddPost.styles'
import { MainContainer } from '../../common';
import { Colors, Images, Strings } from '../../../constants';
import { goBack } from '../../../navigation/RootNavigation';

const AddPost: React.FC = () => {

    const [selectedeImage, setImage] = useState('')
    const [caption, setCaption] = useState('')

    return (
        <MainContainer
            header={{
                light: true,
                title: Strings.AddPost,
                titleColor: Colors.white,
                androidStatusBarColor: Colors.introBg,
                backgroundColor: Colors.introBg,
                left: {
                    image: Images.ic_BackWhiteIcon, onPress: () => {
                        goBack()
                    }
                },
                right: [{
                    text: Strings.Post, color: Colors.white, onPress: () => {
                        if (selectedeImage == '' || caption == '') {
                            alert(Strings.incompletePost)
                        } else {
                            alert(Strings.Posted) //call POST method here
                            setImage('')
                            setCaption('')
                        }
                    }
                }]
            }} >

            <Content>
                <Item style={{ alignSelf: 'center' }}>
                    {
                        selectedeImage == ''
                            ?
                            <View style={styles.imageContainer}>
                                <Thumbnail
                                    square
                                    source={Images.image}
                                    style={styles.image}
                                />
                            </View>
                            :
                            <Thumbnail
                                square
                                source={{ uri: selectedeImage }}
                                style={styles.selectedImage}
                            />
                    }
                </Item>
                <Item style={{ padding: 16 }}>
                    <Input
                        value={caption}
                        multiline={true}
                        placeholder={Strings.captionPlaceHolder}
                        onChangeText={val => setCaption(val)}>
                    </Input>
                </Item>
            </Content>
            <Footer>
                <FooterTab>
                    <Button onPress={() => {
                        ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true,
                        }).then((response) => {
                            console.log(response)
                            setImage(response.path)
                        }).catch(error => {
                            console.log(error)
                        })
                    }} >
                        <Text>{Strings.Library}</Text>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button onPress={() => {
                        ImagePicker.openCamera({
                            width: 300,
                            height: 400,
                            cropping: true,
                        }).then((response) => {
                            console.log(response)
                            setImage(response.path)
                        }).catch(error => console.log(error))
                    }}>
                        <Text>{Strings.Photo}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </MainContainer>
    )
}

export default AddPost