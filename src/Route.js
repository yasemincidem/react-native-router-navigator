import React, {Component, PropTypes} from "React";
import {View, Text} from "react-native";

class Route extends Component {

    static propTypes = {
        key:PropTypes.string.isRequired,
        tabBarStyle: View.propTypes.style,
        tabBarSelectedItemStyle: View.propTypes.style,
        tabBarIconContainerStyle: View.propTypes.style,
        tabBarShadowStyle: View.propTypes.style,
        tabSceneStyle: View.propTypes.style,
        tabStyle: View.propTypes.style,
        tabTitleStyle: Text.propTypes.style,
        tabSelectedTitleStyle: Text.propTypes.style,
        tabTitle: PropTypes.string,
    };

    render() {
        return null;
    }
}
export {Route};