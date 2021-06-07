import { Button, Icon, Input, Item, Text, Thumbnail } from 'native-base'
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import styles from '../styles/Home.style';
import { Colors, Images, Strings, Utils } from '../../../constants'
import { MainContainer, ProgressDialog } from '../../common'
import PostListItem from '../ListItem/PostListItem'
import { apiCall, apiConstant, METHOD } from '../../../core';
import { filter } from 'lodash';


const Home: React.FC = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false)
    const [postList, setPostList] = useState()
    const [fullPostList, setFullPostList] = useState()
    const [search, setSearch] = useState(false)


    useEffect(() => {
        apiGetHomeList()
    }, [])

    const apiGetHomeList = () => {
        let params = {
            UserID: 1,
        }
        apiCall(apiConstant.POST_LIST, params, (res: any) => {
            ProgressDialog.hide()
            setRefreshing(false)
            if (res.success) {
                setPostList(res.data.HomeData);
                setFullPostList(res.data.HomeData);
            } else {
                Utils.showErrorToast(res.error[0])
            }
        }, (error) => {
            ProgressDialog.hide()
            setRefreshing(false)
            Utils.showErrorToast(error)
        }, METHOD.GET)
    }

    const handleRefreshing = () => {
        setRefreshing(true)
        apiGetHomeList()
    }

    const handleSearch = text => {
        const formattedQuery = text.toLowerCase()
        const data = filter(fullPostList, user => {
            return contains(user, formattedQuery)
        })
        setPostList(data)
    }

    const contains = (user, query) => {
        if (user.caption.toLowerCase().includes(query) || user.username.toLowerCase().includes(query)) {
            return true
        }
        return false
    }

    return (
        <MainContainer
            header={{
                light: true,
                title: Strings.PostIt,
                titleColor: Colors.white,
                androidStatusBarColor: Colors.introBg,
                backgroundColor: Colors.introBg,
                right: [{
                    icon: "ios-search", color: Colors.white, onPress: () => {
                        setSearch(!search)
                    }
                }]
            }} >
            {search ? <View style={styles.SearchContainerView}>
                <Item style={styles.SearchView}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" onChangeText={(value) => {
                        handleSearch(value)
                    }} />
                </Item>
            </View> : null}
            {/* <Button transparent>
                    <Text>Search</Text>
                </Button> */}
            <FlatList
                scrollEnabled={true}
                data={postList}
                refreshing={refreshing}
                onRefresh={() => handleRefreshing()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <PostListItem item={item} index={index} selectedIndex={-1} onPress={() => {

                }} />}
                keyExtractor={(item, index) => "key" + index}
            />

            <Button style={{ width: 50, height: 50, justifyContent: 'center', position: 'absolute', bottom: 0, right: 0, margin: 20 }} rounded>
                <Thumbnail style={{ width: 50, height: 50, alignSelf: 'center' }} source={Images.ic_Post} />
            </Button>
        </MainContainer >
    )
}

export default Home
