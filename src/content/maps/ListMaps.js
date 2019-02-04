import React from 'react'
import MapView,{ PROVIDER_GOOGLE,Marker,Over }  from 'react-native-maps'
import {View,StyleSheet} from 'react-native'
import {Button,Text} from 'react-native-paper'


const styles = StyleSheet.create({
    
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map:{
        ...StyleSheet.absoluteFillObject
    },
    members: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        marginRight: 20,
      },
      button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        marginBottom: 400,
      },
      member: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 20,
        height: 30,
        marginTop: 10,
      },
      memberName: {
        marginHorizontal: 10,
      },
      avatar: {
        height: 30,
        width: 30,
        borderRadius: 15,
      }
})

export default class ListMaps extends React.Component{
    static navigationOptions = {
        title: 'Daftar Lokasi'
    }
    constructor(props){
        super(props)
        this.state={
            region: {
                latitude: -6.2293659,
                longitude: 106.8174297,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            members: [
                {
                    id:"1",
                    location: {
                        latitude: -6.2293659,longitude: 106.8174297,latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,},
                    name:'Ammar',
                    color:'red',
                    desc:'Sedang makan'
                },
                {
                    id:"2",
                    location: {
                        latitude: -6.229918,longitude: 106.820180,latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,},
                    color:'yellow',
                    name:'Umar',desc:'Sedang Sholat'
                },
                {   
                    id:"3",
                    location: {
                        latitude: -6.2295,longitude: 106.8,latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,},
                    color:'green',
                    name:'Rico',desc:'Sedang menjadi makmum'
                }
            ]
        }
    }

    createMembers(){
        const {members} = this.state;
        return members.map(member=>{
            
            return(
                <View key={member.id} style={styles.member} onTouchStart={()=>{this.setState({region:member.location})}}>
                    <View style={[styles.avatar,{backgroundColor: member.color}]}/>
                    <Text style={styles.memberName}>{member.name}</Text>
                </View>
            )
        })
    }

    createMarkers(){
        const {members} = this.state;
        const membersWithLocation = members.filter(m => !!m.location)
        return membersWithLocation.map(member=>{
            const {id, location,color,name} = member;
            return(
                <Marker.Animated
                    key={id}
                    identifier={id}
                    coordinate={location}
                    pinColor={color}
                    title={name}
                    >
                    <View>
                        <Text>
                            Hahahaha
                        </Text>
                    </View>
                </Marker.Animated>
            )
        })
    }

    fitToMarkersToMap() {
        const {members} = this.state;
        this.map.fitToSuppliedMarkers(members.map(m => m.id), true);
    }

    render(){
        return(
                <View style={styles.container}>
                    <MapView
                        region={this.state.region}
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        ref={ref=>{this.map=ref;}}
                    >
                        {
                            this.createMarkers()
                        }

                    </MapView>
                    <View style={styles.members}>
                        {
                           this.createMembers()
                        }
                    </View>
                </View>
            
        )
    }
}