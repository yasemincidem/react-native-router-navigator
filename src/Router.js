/**
 * Created by yasemin on 24/04/2017.
 */
import React, {Component} from "React";
import {Navigator, Text,TouchableOpacity} from "react-native";
import {Route} from "./Route";
class Router extends Component {
    render() {
        const routes = [
            {title: 'First Scene', index: 0},
            {title: 'Second Scene', index: 1},
        ];
        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route, navigator) =>
                    <TouchableOpacity onPress={() => {
                        if (route.index === 0) {
                            navigator.push(routes[1]);
                        } else {
                            navigator.pop();
                        }
                    }}>
                    <Text>Hello {route.title}!</Text>
                    </TouchableOpacity>
                }
                style={{padding: 100}}
            />
        );
    }
}
export {Router};