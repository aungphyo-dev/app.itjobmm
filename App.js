import {WebView} from "react-native-webview"
import {ActivityIndicator, StatusBar,StyleSheet} from "react-native"

const App =  () => (
    <WebView
        source={{uri: "https:jk-mobile.vercel.app"}}
        style={{
            marginTop: StatusBar.currentHeight
        }}
        renderLoading={LoadingIndicator}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
    />
)

export default App

const styles = StyleSheet.create({
    IndicatorStyle: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});
export const LoadingIndicator = () => {
    return (
        <ActivityIndicator
            color="#3235fd"
            size="large"
            style={styles.IndicatorStyle}
        />
    );
};

