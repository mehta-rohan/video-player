import React from "react";
import {Text,View,StyleSheet} from "react-native";
import Video from 'react-native-video';
export default class Videos extends React.Component {
render(){
  console.log('loaded video')
return(
<View style={{ flex: 1, justifyContent: "center"}}>
      <Video source={{uri: "https://www.youtube.com/watch?v=zWh3CShX_do"}}   // Can be a URL or a localfile.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onEnd={this.onEnd}                      // Callback when playback finishes
       onError={this.videoError}               // Callback when video cannot be loaded
       style={ {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }} />
</View>
);}}