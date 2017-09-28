import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView} from 'react-native';
import Counter  from './Counter';
import Toggle from './Toggle'

export default class App extends React.Component {

  state = {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   like : [0,0,0]
 }

 changeState(index){

   var more = this.state.like[index] ;
   var more = more + 1;

   console.log(more);

   this.setState({

     like : this.state.like.map((lik , i)=>
     index === i ? more : lik
    )
   });


 }

 onChangeLike = (index) => {

   console.log(index);
 }



  render() {
    const {flexDirection, alignItems, justifyContent , like} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
        <ScrollView style={styles.container}>
      <View style={styles.container}>
       <Toggle
         label={'Primary axis (flexDirection)'}
         value={flexDirection}
         options={['row', 'column']}
         onChange={(option) => this.setState({flexDirection: option})}
       />
       <Toggle
         label={primaryAxis + ' distribution (justifyContent)'}
         value={justifyContent}
         options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
         onChange={(option) => this.setState({justifyContent: option})}
       />
       <Toggle
         label={secondaryAxis + ' alignment (alignItems)'}
         value={alignItems}
         options={['flex-start', 'center', 'flex-end', 'stretch']}
         onChange={(option) => this.setState({alignItems: option})}
       />

      <ScrollView horizontal>
       <View style={[styles.layout, layoutStyle]}>

         <Text style={styles.textLike}>Like al mas pulento</Text>

         <View style={styles.box} >
           <Image
            style={styles.image}
            source={{uri: 'http://resit.cl/img/team/256/surrutia.jpg'}}
          />

          <Text style={styles.textLike} onPress={() => this.changeState(0)} > {this.state.like[0]} Like!</Text>
          </View>
         <View style={styles.box} >
           <Image
            style={styles.image}
            source={{uri: 'http://resit.cl/img/team/256/despinoza.jpg'}}
          />
            <Text style={styles.textLike} onPress={() => this.changeState(1)}> {this.state.like[1]} Like!</Text>
          </View>
         <View style={styles.box} >
           <Image
            style={styles.image}
            source={{uri: 'http://resit.cl/img/team/256/smarti.jpg'}}
          />
            <Text style={styles.textLike} onPress={() => this.changeState(2)}> {this.state.like[2]} Like!</Text>
         </View>


       </View>

     </ScrollView>

     </View>




     <View style={styles.boxLarge} />
      <ScrollView horizontal>
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
      </ScrollView>
      <View style={styles.boxLarge} />
      <View style={styles.boxSmall} />
      <View style={styles.boxLarge} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
  image: {
  width: 200,
  height: 200,
},

textLike : {
  flexDirection : 'row',
  justifyContent : 'center',
  fontWeight: 'bold',
    fontSize: 30,
},
boxSmall: {
   width: 200,
   height: 200,
   marginBottom: 10,
   marginRight: 10,
   backgroundColor: 'skyblue',
 },
 boxLarge: {
   width: 300,
   height: 300,
   marginBottom: 10,
   marginRight: 10,
   backgroundColor: 'steelblue',
 },
})
