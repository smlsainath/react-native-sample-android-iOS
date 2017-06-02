// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class RNHighScores extends React.Component {
//   render() {
//     var contents = this.props["scores"].map(
//       score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
//     );
//     return (
//       <View style={styles.container}>
//         <Text style={styles.highScoresTitle}>
//           2048 High Scores!
//         </Text>
//         <Text style={styles.scores}>
//           {contents}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   highScoresTitle: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   scores: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// // Module name
// AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
//
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
//
// class LotsOfStyles extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//     fontSize: 60,
//   },
// });
//
// AppRegistry.registerComponent('RNHighScores', () => LotsOfStyles);
//
// class FlexDimensionsBasics extends React.Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1,
//         flexDirection: 'column',
//       justifyContent: 'flex-end',
//     alignItems: 'center',}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
// AppRegistry.registerComponent('RNHighScores', () => FlexDimensionsBasics);

// import { AppRegistry, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
//
// class TextInANest extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titleText: "Bird's Nest",
//       bodyText: 'This is not really a bird nest.'
//     };
//   }
//
//   render() {
//     return (
//
//       <Text style={styles.baseText}>
//
//         <Text style={styles.titleText} onPress={this.onPressTitle}>
//           {'\n'}{'\n'}{this.state.titleText}{'\n'}{'\n'}
//         </Text>
//         <Text numberOfLines={5}>
//           {this.state.bodyText}{'\n'}
//         </Text>
//
//         <Text style={{fontWeight: 'bold'}}>
//                 I am bold {'\n'}
//                 <Text style={{color: 'red'}}>
//                   and red
//                 </Text>
//         </Text>
//
//
//
//       </Text>
//
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: 'Cochin',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: '900',
//   },
// });
//
// // App registration and rendering
// AppRegistry.registerComponent('RNHighScores', () => TextInANest);

// import { AppRegistry, Text, View, Image } from 'react-native';
//
// class BlueIsCool extends React.Component {
//   render() {
//     return (
//       <Text>
//         There is a blue square
//         <Text style = {{width:50, height:50}} > sai </Text>
//         in between my text.
//       </Text>
//     );
//   }
// }
//
// AppRegistry.registerComponent('RNHighScores', () => BlueIsCool);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
// 'use strict';
//
// var React = require('react');
// var ReactNative = require('react-native');
// var {
//   AppRegistry,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   LayoutAnimation,
// } = ReactNative;
//
// class Entity extends React.Component {
//   render() {
//     return (
//       <Text style={{fontWeight: '500', color: '#527fe4'}}>
//         {this.props.children}
//       </Text>
//     );
//   }
// }
//
// class AttributeToggler extends React.Component {
//   state = {fontWeight: 'bold', fontSize: 15};
//
//   toggleWeight = () => {
//     this.setState({
//       fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
//     });
//   };
//
//   increaseSize = () => {
//     this.setState({
//       fontSize: this.state.fontSize + 1
//     });
//   };
//
//   decreaseSize = () => {
//     this.setState({
//       fontSize: this.state.fontSize - 1
//     });
//   };
//
//   render() {
//     var curStyle = {fontWeight: this.state.fontWeight, fontSize: this.state.fontSize};
//     return (
//       <View>
//         <Text style={curStyle}>
//           {'\n'}{'\n'}Tap the controls below to change attributes.
//         </Text>
//         <Text>
//           <Text>See how it will even work on <Text style={curStyle}>this nested text</Text></Text>
//         </Text>
//         <Text
//           style={{backgroundColor: '#ffaaaa', marginTop: 5}}
//           onPress={this.toggleWeight}>
//           Toggle Weight
//         </Text>
//         <Text
//           style={{backgroundColor: '#aaaaff', marginTop: 5}}
//           onPress={this.increaseSize}>
//           Increase Size
//         </Text>
//         <Text
//           style={{backgroundColor: '#aaffaa', marginTop: 5}}
//           onPress={this.decreaseSize}>
//           Decrease Size
//         </Text>
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('RNHighScores', () => AttributeToggler);
//
//
// var AdjustingFontSize = React.createClass({
//   getInitialState: function() {
//     return {dynamicText:'', shouldRender: true,};
//   },
//   reset: function() {
//     LayoutAnimation.easeInEaseOut();
//     this.setState({
//       shouldRender: false,
//     });
//     setTimeout(()=>{
//       LayoutAnimation.easeInEaseOut();
//       this.setState({
//         dynamicText: '',
//         shouldRender: true,
//       });
//     }, 300);
//   },
//   addText: function() {
//     this.setState({
//       dynamicText: this.state.dynamicText + (Math.floor((Math.random() * 10) % 2) ? ' foo' : ' bar'),
//     });
//   },
//   removeText: function() {
//     this.setState({
//       dynamicText: this.state.dynamicText.slice(0, this.state.dynamicText.length - 4),
//     });
//   },
//   render: function() {
//
//     if (!this.state.shouldRender) {
//       return (<View/>);
//     }
//     return (
//       <View>
//         <Text lineBreakMode="tail" numberOfLines={1} style={{fontSize: 36, marginVertical:6}}>
//           Truncated text is baaaaad.
//         </Text>
//         <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 40, marginVertical:6}}>
//           Shrinking to fit available space is much better!
//         </Text>
//
//         <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{fontSize:30, marginVertical:6}}>
//         {'Add text to me to watch me shrink!' + ' ' + this.state.dynamicText}
//         </Text>
//
//         <Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
//         {'Multiline text component shrinking is supported, watch as this reeeeaaaally loooooong teeeeeeext grooooows and then shriiiinks as you add text to me! ioahsdia soady auydoa aoisyd aosdy ' + ' ' + this.state.dynamicText}
//         </Text>
//
//         <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{marginVertical:6}}>
//           <Text style={{fontSize:14}}>
//             {'Differently sized nested elements will shrink together. '}
//           </Text>
//           <Text style={{fontSize:20}}>
//             {'LARGE TEXT! ' + this.state.dynamicText}
//           </Text>
//         </Text>
//
//         <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: 5, marginVertical:6}}>
//           <Text
//             style={{backgroundColor: '#ffaaaa'}}
//             onPress={this.reset}>
//             Reset
//           </Text>
//           <Text
//             style={{backgroundColor: '#aaaaff'}}
//             onPress={this.removeText}>
//             Remove Text
//           </Text>
//           <Text
//             style={{backgroundColor: '#aaffaa'}}
//             onPress={this.addText}>
//             Add Text
//           </Text>
//         </View>
//       </View>
//     );
//   }
// });
//
// exports.title = '<Text>';
// exports.description = 'Base component for rendering styled text.';
// exports.displayName = 'TextExample';
// exports.examples = [
// {
//   title: 'Wrap',
//   render: function() {
//     return (
//       <Text>
//         The text should wrap if it goes on multiple lines. See, this is going to
//         the next line.
//       </Text>
//     );
//   },
// }, {
//   title: 'Padding',
//   render: function() {
//     return (
//       <Text style={{padding: 10}}>
//         This text is indented by 10px padding on all sides.
//       </Text>
//     );
//   },
// }, {
//   title: 'Font Family',
//   render: function() {
//     return (
//       <View>
//         <Text style={{fontFamily: 'Cochin'}}>
//           Cochin
//         </Text>
//         <Text style={{fontFamily: 'Cochin', fontWeight: 'bold'}}>
//           Cochin bold
//         </Text>
//         <Text style={{fontFamily: 'Helvetica'}}>
//           Helvetica
//         </Text>
//         <Text style={{fontFamily: 'Helvetica', fontWeight: 'bold'}}>
//           Helvetica bold
//         </Text>
//         <Text style={{fontFamily: 'Verdana'}}>
//           Verdana
//         </Text>
//         <Text style={{fontFamily: 'Verdana', fontWeight: 'bold'}}>
//           Verdana bold
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Font Size',
//   render: function() {
//     return (
//       <View>
//         <Text style={{fontSize: 23}}>
//           Size 23
//         </Text>
//         <Text style={{fontSize: 8}}>
//           Size 8
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Color',
//   render: function() {
//     return (
//       <View>
//         <Text style={{color: 'red'}}>
//           Red color
//         </Text>
//         <Text style={{color: 'blue'}}>
//           Blue color
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Font Weight',
//   render: function() {
//     return (
//       <View>
//         <Text style={{fontSize: 20, fontWeight: '100'}}>
//           Move fast and be ultralight
//         </Text>
//         <Text style={{fontSize: 20, fontWeight: '200'}}>
//           Move fast and be light
//         </Text>
//         <Text style={{fontSize: 20, fontWeight: 'normal'}}>
//           Move fast and be normal
//         </Text>
//         <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//           Move fast and be bold
//         </Text>
//         <Text style={{fontSize: 20, fontWeight: '900'}}>
//           Move fast and be ultrabold
//         </Text>
//       </View>
//     );
//   },
// },  {
//   title: 'Font Style',
//   render: function() {
//     return (
//       <View>
//         <Text style={{fontStyle: 'normal'}}>
//           Normal text
//         </Text>
//         <Text style={{fontStyle: 'italic'}}>
//           Italic text
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Selectable',
//   render: function() {
//     return (
//       <View>
//         <Text selectable={true}>
//           This text is <Text style={{fontWeight: 'bold'}}>selectable</Text> if you click-and-hold.
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Text Decoration',
//   render: function() {
//     return (
//       <View>
//         <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'solid'}}>
//           Solid underline
//         </Text>
//         <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'double', textDecorationColor: '#ff0000'}}>
//           Double underline with custom color
//         </Text>
//         <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40'}}>
//           Dashed underline with custom color
//         </Text>
//         <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'dotted', textDecorationColor: 'blue'}}>
//           Dotted underline with custom color
//         </Text>
//         <Text style={{textDecorationLine: 'none'}}>
//           None textDecoration
//         </Text>
//         <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
//           Solid line-through
//         </Text>
//         <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#ff0000'}}>
//           Double line-through with custom color
//         </Text>
//         <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40'}}>
//           Dashed line-through with custom color
//         </Text>
//         <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'dotted', textDecorationColor: 'blue'}}>
//           Dotted line-through with custom color
//         </Text>
//         <Text style={{textDecorationLine: 'underline line-through'}}>
//           Both underline and line-through
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Nested',
//   description: 'Nested text components will inherit the styles of their ' +
//     'parents (only backgroundColor is inherited from non-Text parents).  ' +
//     '<Text> only supports other <Text> and raw text (strings) as children.',
//   render: function() {
//     return (
//       <View>
//         <Text>
//           (Normal text,
//           <Text style={{fontWeight: 'bold'}}>
//             (and bold
//             <Text style={{fontSize: 11, color: '#527fe4'}}>
//               (and tiny inherited bold blue)
//             </Text>
//             )
//           </Text>
//           )
//         </Text>
//         <Text style={{opacity:0.7}}>
//           (opacity
//             <Text>
//               (is inherited
//                 <Text style={{opacity:0.7}}>
//                   (and accumulated
//                     <Text style={{backgroundColor:'#ffaaaa'}}>
//                       (and also applies to the background)
//                     </Text>
//                   )
//                 </Text>
//               )
//             </Text>
//           )
//         </Text>
//         <Text style={{fontSize: 12}}>
//           <Entity>Entity Name</Entity>
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Text Align',
//   render: function() {
//     return (
//       <View>
//         <Text>
//           auto (default) - english LTR
//         </Text>
//         <Text>
//           أحب اللغة العربية auto (default) - arabic RTL
//         </Text>
//         <Text style={{textAlign: 'left'}}>
//           left left left left left left left left left left left left left left left
//         </Text>
//         <Text style={{textAlign: 'center'}}>
//           center center center center center center center center center center center
//         </Text>
//         <Text style={{textAlign: 'right'}}>
//           right right right right right right right right right right right right right
//         </Text>
//         <Text style={{textAlign: 'justify'}}>
//           justify: this text component{"'"}s contents are laid out with "textAlign: justify"
//           and as you can see all of the lines except the last one span the
//           available width of the parent container.
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Letter Spacing',
//   render: function() {
//     return (
//       <View>
//         <Text style={{letterSpacing: 0}}>
//           letterSpacing = 0
//         </Text>
//         <Text style={{letterSpacing: 2, marginTop: 5}}>
//           letterSpacing = 2
//         </Text>
//         <Text style={{letterSpacing: 9, marginTop: 5}}>
//           letterSpacing = 9
//         </Text>
//         <Text style={{letterSpacing: -1, marginTop: 5}}>
//           letterSpacing = -1
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Spaces',
//   render: function() {
//     return (
//       <Text>
//         A {'generated'} {' '} {'string'} and    some &nbsp;&nbsp;&nbsp; spaces
//       </Text>
//     );
//   },
// }, {
//   title: 'Line Height',
//   render: function() {
//     return (
//       <Text>
//         <Text style={{lineHeight: 35}}>
//           A lot of space between the lines of this long passage that should
//           wrap once.
//         </Text>
//       </Text>
//     );
//   },
// }, {
//   title: 'Empty Text',
//   description: 'It\'s ok to have Text with zero or null children.',
//   render: function() {
//     return (
//       <Text />
//     );
//   },
// }, {
//   title: 'Toggling Attributes',
//   render: function(): React.Element<any> {
//     return <AttributeToggler />;
//   },
// }, {
//   title: 'backgroundColor attribute',
//   description: 'backgroundColor is inherited from all types of views.',
//   render: function() {
//     return (
//       <Text style={{backgroundColor: 'yellow'}}>
//         Yellow container background,
//         <Text style={{backgroundColor: '#ffaaaa'}}>
//           {' '}red background,
//           <Text style={{backgroundColor: '#aaaaff'}}>
//             {' '}blue background,
//             <Text>
//               {' '}inherited blue background,
//               <Text style={{backgroundColor: '#aaffaa'}}>
//                 {' '}nested green background.
//               </Text>
//             </Text>
//           </Text>
//         </Text>
//       </Text>
//     );
//   },
// }, {
//   title: 'numberOfLines attribute',
//   render: function() {
//     return (
//       <View>
//         <Text numberOfLines={1}>
//           Maximum of one line, no matter how much I write here. If I keep writing, it{"'"}ll just truncate after one line.
//         </Text>
//         <Text numberOfLines={2} style={{marginTop: 20}}>
//           Maximum of two lines, no matter how much I write here. If I keep writing, it{"'"}ll just truncate after two lines.
//         </Text>
//         <Text style={{marginTop: 20}}>
//           No maximum lines specified, no matter how much I write here. If I keep writing, it{"'"}ll just keep going and going.
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Text highlighting (tap the link to see highlight)',
//   render: function() {
//     return (
//       <View>
//         <Text>Lorem ipsum dolor sit amet, <Text suppressHighlighting={false} style={{backgroundColor: 'white', textDecorationLine: 'underline', color: 'blue'}} onPress={() => null}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</Text> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
//       </View>
//     );
//   },
// }, {
//   title: 'allowFontScaling attribute',
//   render: function() {
//     return (
//       <View>
//         <Text>
//           By default, text will respect Text Size accessibility setting on iOS.
//           It means that all font sizes will be increased or descreased depending on the value of Text Size setting in
//           {" "}<Text style={{fontWeight: 'bold'}}>Settings.app - Display & Brightness - Text Size</Text>
//         </Text>
//         <Text style={{marginTop: 10}}>
//           You can disable scaling for your Text component by passing {"\""}allowFontScaling={"{"}false{"}\""} prop.
//         </Text>
//         <Text allowFontScaling={false} style={{marginTop: 20}}>
//           This text will not scale.
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Inline views',
//   render: function() {
//     return (
//       <View>
//         <Text>
//           This text contains an inline blue view <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} /> and
//           an inline image <Image source={require('./flux.png')} style={{width:50,height:50}} style={{width: 30, height: 11, resizeMode: 'cover'}}/>. Neat, huh?
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Text shadow',
//   render: function() {
//     return (
//       <View>
//         <Text style={{fontSize: 20, textShadowOffset: {width: 2, height: 2}, textShadowRadius: 1, textShadowColor: '#00cccc'}}>
//           Demo text shadow
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Ellipsize mode',
//   render: function() {
//     return (
//       <View>
//         <Text numberOfLines={1}>
//           This very long text should be truncated with dots in the end.
//         </Text>
//         <Text ellipsizeMode="middle" numberOfLines={1}>
//           This very long text should be truncated with dots in the middle.
//         </Text>
//         <Text ellipsizeMode="head" numberOfLines={1}>
//           This very long text should be truncated with dots in the beginning.
//         </Text>
//         <Text ellipsizeMode="clip" numberOfLines={1}>
//           This very looooooooooooooooooooooooooooong text should be clipped.
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Font variants',
//   render: function() {
//     return (
//       <View>
//         <Text style={{fontVariant: ['small-caps']}}>
//           Small Caps{'\n'}
//         </Text>
//         <Text style={{fontFamily: 'Hoefler Text', fontVariant: ['oldstyle-nums']}}>
//           Old Style nums 0123456789{'\n'}
//         </Text>
//         <Text style={{fontFamily: 'Hoefler Text', fontVariant: ['lining-nums']}}>
//           Lining nums 0123456789{'\n'}
//         </Text>
//         <Text style={{fontVariant: ['tabular-nums']}}>
//           Tabular nums{'\n'}
//           1111{'\n'}
//           2222{'\n'}
//         </Text>
//         <Text style={{fontVariant: ['proportional-nums']}}>
//           Proportional nums{'\n'}
//           1111{'\n'}
//           2222{'\n'}
//         </Text>
//       </View>
//     );
//   },
// }, {
//   title: 'Dynamic Font Size Adjustment',
//   render: function(): React.Element<any> {
//     return <AdjustingFontSize />;
//   },
// }];

// import React, {Component} from 'react';
// import {AppRegistry,Text,TextInput,View} from 'react-native';
//
// class PizzaTranslator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return(
//
//    <View style={{padding: 10}}>
//        <TextInput
//        style={{height:40}}
//        placeholder="Type here to translate!"
//        onChangeText={(text) => this.setState({text}) }
//        />
//        <Text style = {{height:42, padding:10}}>
//        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//        </Text>
//    </View>
//
//     );
//   }
//
// }
//
// AppRegistry.registerComponent('RNHighScores', () => PizzaTranslator);

// import React, { Component } from 'react';
// import { AppRegistry, ScrollView, Image, Text } from 'react-native'
//
// class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return(
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Text style={{fontSize:96}}>What's the best </Text>
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Image source={require('./flux.png')} style={{width:50,height:50}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }
//
//
// AppRegistry.registerComponent(
//   'RNHighScores',
//   () => IScrolledDownAndWhatHappenedNextShockedMe);

import React, {Component} from 'react';
import {AppRegistry,ListView, Text, View, Image, Dimensions} from 'react-native';

const windowDims = Dimensions.get('window'),
      itemSizeWidth   = (windowDims.width);
      itemSizeheight = itemSizeWidth/1.466;

class ListViewBasics extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
  }

  componentDidMount(){
    this.getMoviesFromApiAsync();
    // console.log("inside will mount");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function(){
    //   if(this.readyState == 4 && this.status == 200){
    //     var variable = JSON.parse(this.responseText);
    //     console.log("---------------------XMLHttpRequest");
    //     console.log(variable.results[0].name.first);
    //     // console.log(variable.city[0].location_id)
    //     this.setState({ dataSource: this.state.dataSource.cloneWithRows(variable.results)});
    //   }
    // };
    // xhr.open("GET", "https://randomuser.me/api/?results=10", true);
    //
    // xhr.setRequestHeader('Content-Type', 'application/json')
    //
    // xhr.send();
  }

  componentWillMount () {
    // console.log("inside will mount");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function(){
    //   if(this.readyState == 4 && this.status == 200){
    //     var variable = JSON.parse(this.responseText);
    //     console.log("---------------------XMLHttpRequest");
    //     console.log(variable.results[0].name.first);
    //     // console.log(variable.city[0].location_id)
    //     this.setState({ dataSource: this.state.dataSource.cloneWithRows(variable.results)});
    //   }
    // };
    // xhr.open("GET", "https://randomuser.me/api/?results=10", true);
    //
    // xhr.setRequestHeader('Content-Type', 'application/json')
    //
    // xhr.send();

    // this.getMoviesFromApiAsync();
  }



render(){
// var mySource = this.state.dataSource || [];

var mySource = this.state.dataSource || [];
if(mySource != []){
  var obj = mySource[0];
  return(
    <View style = {{flex:1,paddingTop:22,alignItems:'center'}}>
    <ListView
    dataSource={mySource}
    renderRow={(rowData) =>
      <View style={{flexDirection: "row", flex: 1,height:40}}>
       <Text>{rowData.gender}</Text>
      </View>
    }
    />
   <Text></Text>
    </View>

  );

}else{
  return(
    <View style = {{flex:1,paddingTop:22,alignItems:'center'}}>
   <Text>Testing</Text>
    </View>

  );

}
  }

 getMoviesFromApiAsync() {
  return fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("---------------------");
      console.log(responseJson.results[0].name.first);
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson.results)});
      return responseJson.results;
    })
    .catch((error) => {
      console.error(error);
    });
}

}

AppRegistry.registerComponent('RNHighScores',() => ListViewBasics);
