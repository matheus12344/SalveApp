import React from "react"
import { Image, TouchableOpacity, View } from "react-native"

import avatarMamae from '../../assets/Contact/mamãe.png'
import avatarPapai from '../../assets/Contact/papai.png'
import avatarMiguel from '../../assets/Contact/miguel.png'
import mayara from '../../assets/Contact/Mayara.png'
import avatarIsaque from '../../assets/Contact/isaque.png'
import imagineDragons from '../../assets/Users/imagineDragons.png'
import kemuel from '../../assets/Users/kemuel.png'
import nirvana from '../../assets/Users/nirvana.png'
import eminem from '../../assets/Users/eminem.png'
import harryStyles from '../../assets/Users/harryStyles.png'
import billieEillish from '../../assets/Users/billieEillish.png'

import {styles} from './styles'
import { ScrollView } from "react-native"


export default function Status(){
  return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity style={{height: 100}}>
          <Image source={avatarMiguel} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={{height: 100}}>
          <Image source={avatarMamae} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={{height: 100}}>
          <Image source={avatarPapai} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={mayara} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={avatarIsaque} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={imagineDragons} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={kemuel} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={nirvana} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={eminem} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={harryStyles} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

        <TouchableOpacity style={{height: 100}}>
          <Image source={billieEillish} style={styles.avatarImage}/>
          <View style={styles.StatusOn}/>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
 

