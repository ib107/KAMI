/*import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import Plotly from 'react-native-plotly';
import { pullVHist } from "../firebase";
//import { ScrollView, Image } from "react-native";

export default function UserGuide({ navigation }) {

  const [plotlyVals, setplotlyVals] = useState([{
    x: [],
    y: [],
    type: 'scatter'
  }])

  async function handleVState() {
    let Vdata = await pullVHist()

    var temp = {
      //__id: 'up',
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter'
    }

    for (let i = 0; i < Vdata.length; i++) {
      temp.x.push(Vdata[i].time)
      temp.y.push(Vdata[i].val)
    }

    setplotlyVals([temp])
  }


  useEffect(() => {
    handleVState();
  }, []);

  //async function Graph() {
  var layout = {
    height: Dimensions.get('window').height / 1.5, width: Dimensions.get('window').width,

    title: 'Vibration Usage',
    yaxis: {
      title: {
        text: 'Value',
        font: {
          size: 14,
          color: '#7f7f7f'
        }
      },
    },

    xaxis: {
      title: {
        text: 'Date and Time',
        font: {
          size: 14,
          color: '#7f7f7f',
          autotick: true,

        }
      },
    },
  };


  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
      </View>
      <View style={styles.chartRow}>
        <Plotly
          data={plotlyVals}
          layout={layout}
          onLoad={() => console.log('loaded')}
          //debug
          enableFullPlotly
        />
      </View>
    </View>

  )
}


//}


const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row'
  },
  chartRow: {
    flex: 1,
    width: '100%',
    //height: '20%',
  },
  container: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
*/