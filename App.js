import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView} from 'react-native';
import Counter  from './Counter';
import Toggle from './Toggle'

export default class App extends React.Component {

  state = {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   like : [1,2,3]
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
       <View style={[styles.layout, layoutStyle]}>
         <View style={styles.box} >
           <Image
            style={styles.image}
            source={{uri: 'http://resit.cl/img/team/256/surrutia.jpg'}}
          />

          <Text style={styles.textLike} onPress={() => this.setState()} >{like[0]} Like!</Text>
          </View>
         <View style={styles.box} >
           <Image
            style={styles.image}
            source={{uri: 'http://resit.cl/img/team/256/despinoza.jpg'}}
          />
            <Text style={styles.textLike} onPress={() =>this.setState( )} >{this.state.like[1]} Like!</Text>
          </View>
         <View style={styles.box} >
           <Image
            style={styles.image}
            source={{uri: 'http://resit.cl/img/team/256/smarti.jpg'}}
          />
            <Text style={styles.textLike} onPress={() =>this.setState( )} >{this.state.like[2]} Like!</Text>
         </View>
       </View>



     </View>

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
}
})
