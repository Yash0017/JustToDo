/*
 *   Copyright (c) 2022 Yash Yogesh Gaidhani
 *   All rights reserved.
 *   This work belongs to Yash Yogesh Gaidhani
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import { Header, Card, Icon, CheckBox } from 'react-native-elements';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Todo_list = [
  {
    Title: "To complete Peper",
    Details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere efficitur velit, et euismod metus facilisis sed. Aliquam eu metus fringilla, eleifend est eget, finibus mi. Maecenas vitae blandit libero, a bibendum arcu. Praesent viverra, dolor eu bibendum condimentum, ex urna consequat nibh, posuere venenatis ligula velit egestas ipsum. Praesent mi risus, tincidunt sed ultrices vel, cursus nec quam. Praesent tempus efficitur nulla nec ultrices. Donec venenatis viverra turpis, mollis consectetur augue placerat vel. Morbi sagittis, turpis a elementum dignissim, eros nunc cursus tortor, ut maximus metus arcu facilisis lorem. Morbi eget nisl eu nunc dignissim posuere. Nam et lobortis odio. Integer euismod egestas lectus, molestie vestibulum elit. Etiam at pretium turpis. Nullam gravida turpis non sem accumsan, at lacinia lorem varius. Ut porta mattis sem, vel consequat ligula. Morbi faucibus aliquam feugiat.",
    completed: false,
  },  
  {
    Title: "To create apps",
    Details: "Maecenas bibendum in dui tempus finibus. Aliquam sit amet erat sit amet diam bibendum efficitur. Nullam auctor non sapien sit amet rutrum. Ut quis sapien nisi. Aenean suscipit risus quis elit dapibus, non sollicitudin nisi commodo. Nulla ultrices justo sed dolor ultricies, non viverra ligula efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu libero nec dolor mollis scelerisque eget non eratPhasellus sagittis orci nulla, sed viverra ipsum pellentesque sit amet. Nulla aliquet a est vitae dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean fermentum tortor ut justo fringilla luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur malesuada eros felis, quis commodo felis fringilla blandit. Proin malesuada magna dui, eget posuere magna tincidunt non. Ut volutpat libero sit amet pretium malesuada.",
    completed: true,
  },
  {
    Title: "Task 3",
    Details: "Praesent vitae eleifend augue, eget fermentum quam. Vivamus libero est, commodo eu odio a, tincidunt sagittis nisi. Mauris in arcu non lorem ornare interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sapien convallis, varius mi vel, mollis nisi. Praesent porta urna justo, a imperdiet neque tincidunt id. Sed porttitor mauris non consectetur dapibus. Ut facilisis lacus eros, condimentum eleifend tellus mattis sed. Praesent venenatis efficitur orci, nec pharetra orci consectetur tempus. Duis eget odio tellus.",
    completed: false,
  },
  {
    Title: "Demo Task",
    Details: "hIn et risus id est sollicitudin fringilla. Fusce eros sapien, pellentesque et metus eleifend, accumsan suscipit dui. Vivamus pulvinar hendrerit risus et tincidunt. Proin lobortis ultrices volutpat. Vivamus interdum ligula ac ante faucibus, vitae tristique nisi interdum. Mauris congue bibendum congue. Cras lacinia sem vitae tortor sagittis consectetur. Morbi quis sapien a nunc gravida sodales. Pellentesque ac quam mauris. Aliquam vel malesuada leo. Proin non bibendum ligula. Vivamus purus risus, dignissim vitae lorem id, vulputate rutrum metus. Fusce eleifend semper vulputate. Nunc placerat ligula quis egestas ullamcorper.",
    completed: true,
  },
  {
    Title: "To leave Veritas",
    Details: "Praesent imperdiet at tortor in bibendum. Etiam a odio eu metus luctus hendrerit. Nunc ac suscipit velit, sed condimentum magna. Quisque nec tortor eu sem posuere commodo. Nunc velit nulla, vestibulum a laoreet a, venenatis facilisis neque. Suspendisse potenti. Duis vel gravida velit. Aliquam erat volutpat. Nulla elit velit, finibus vitae efficitur vel, tincidunt et felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget rutrum lectus. Fusce aliquet quis erat nec bibendum.",
    completed: false,
  },
]

const App = () => {
  return (
    <>
        <Header 
            statusBarProps={{
                barStyle: 'dark-content',
                backgroundColor: '#ffffff',
            }}
            centerComponent={<Text style={styles.heading}>My Tasks</Text>}
            rightComponent={<Icon name="add" size={height * 0.05} marginTop={height * 0.025} marginRight={width * 0.03} />}
            containerStyle={{
              backgroundColor: '#ffffff', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: height * 0.17,
            }}
        />
        <ScrollView style={styles.main_view} alignItems="center" justifyContent="flex-start" >
              <View>
                {Todo_list.map((task) => {
                  return <Tasks task={task} key={task.Title} />;
                })}
              </View>
        </ScrollView>
    </>
);
}


const Tasks = ({task}) => {
  const [todo_task, setTodo_Task] = useState(task);
  const [completed, setCompleted] = useState(task.completed);
  const [visiable, setVisiable] = useState(false);
  const [expand, setExpand] = useState('expand-more');
  const offset = useSharedValue(height * 0.1);

  const Animate = useAnimatedStyle(() => {
    return {
      height: offset.value,
    }
  })

  const oncomplete = () => {
    setCompleted(!completed);
  }

  const onExpand = () => {
    if (expand === 'expand-more') {
      offset.value = withSpring(height * 0.35);
      setExpand('expand-less');
      setVisiable(true);
    } else if (expand === 'expand-less') {
      offset.value = withSpring(height * 0.1);
      setExpand('expand-more');
      setVisiable(false);
    }
  };

  return (
      <Animated.View style={[styles.card_style, Animate]} >
        <View style={styles.flex_style}>
          <View style={{height: height * 0.1}}>
            <Icon name={expand} onPress={() => {onExpand()}} />
          </View>
          <View style={{width: width * 0.6, alignItems: 'flex-start', paddingLeft: width * 0.05}}>
            <Text style={{color: '#24252a', fontSize: height * 0.023}}>{todo_task.Title}</Text>
          </View>
          <View style={{height: height * 0.1}}>
            <CheckBox checked={completed} containerStyle={{paddingBottom: 0}} onPress={() => {oncomplete()}} />
          </View>
        </View>
        <View style={{flex: 1}}>
        <ScrollView>
            <Text>{todo_task.Details}</Text>
        </ScrollView>
        </View>
      </Animated.View>
  );
}



const styles = StyleSheet.create({
  heading: {
      color: '#24252a',
      textAlign: 'center',
      fontSize: height * 0.035,
      marginTop: height * 0.025,
  },
  main_view: {
      backgroundColor: '#ffffff',
      width: width,
  },
  card_style: {
    width: width * 0.9,
    borderWidth: 2,
    borderColor: '#e1e3e6',
    marginBottom: height * 0.05,
    padding: height * 0.01,
    borderRadius: 20,
  },
  flex_style: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default App;
