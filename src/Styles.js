import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


//Players
let player1 = 'purple';
let player2 = 'yellow';

//Board
let primaryBoard = '#DADEE0';
let secondaryBoard = '#DADEE0';
let shadowBoard = 'rgba(0,0,0,0.2)';

let Style = StyleSheet.create({

    /**
     * Styles used in utils function getColor
     */
    player1: {
        backgroundColor: player1
    },

    player2: {
        backgroundColor: player2
    },

    Button: {
        margin: 10,
    },
    /**
     * Styles for MyScene
     */
    containerMenu: {
        flex: 1,
        paddingTop: 75,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    welcome: {
        fontSize: 50,
        margin: 10,
        color: '#000',
    },

    subTitle: {
        fontSize: 50,
        marginTop: 30,
        color: '#000'
    },

    /**
     * Styles ViewContainer component
     */
    ViewContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: primaryBoard
    },

    /**
     * Styles for GameStatusBar component
     */
    GameStatusBarContainer: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: '#0064A6',
        alignItems: 'center',
        justifyContent: 'center'
    },

    GameStatusBarPlayerContainer: {
        flexDirection: 'column',

    },

    GameStatusBarTurn1: {
        width: 10,
        height: 70,
        margin: 10,
        backgroundColor: player1,
    },

    GameStatusBarTurn2: {
        width: 10,
        height: 70,
        margin: 10,
        backgroundColor: player2,
    },
    GameStatusBarPlayerName: {
        color: "#FFF",
        fontSize: 24,
        alignSelf: 'center',
    },
    /**
     * Styles for ViewBoardContainer and ViewBoardContainerSingle component
     */
    BoardContainer: {
        flex: 7,
        backgroundColor: primaryBoard,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Board: {
        backgroundColor: secondaryBoard,
        zIndex: -30
    },


    Row: {
        flexDirection: "row",
        alignItems: 'center',
        zIndex: -10

    },

    Column: {
        flexDirection: "column",
        alignItems: 'center',

    },

    /**
     * Styles LinhaHorizontal
     */
    LinhaHorizontalContainer: {
        backgroundColor: shadowBoard,
        //marginRight: 5,
        //marginLeft: 5,
        zIndex: -15
    },


    /**Styles LinhaVertical */
    LinhaVerticalContainer: {
        backgroundColor: shadowBoard,
        zIndex: -15
    },

    /**Styles Circulo */
    Circulo: {
        backgroundColor: "black"
    },


    /**
     * Styles Square
     */
    Square: {
        opacity: 0.2,
        zIndex: -10
    },
    SquareContainer: {
        opacity: 1,
        backgroundColor: primaryBoard,
        zIndex: -20
    },


    /**
    * Styles ChooseGameScene
    */
    ChooseGamecontainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
    },

    ChooseGameStatusBar: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#0064A6',
        justifyContent: 'center'
    },

    ChooseGameSecondView: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    ChooseGameTitle: {
        fontSize: 35,
        color: '#FFF',
    },

    ChooseGamePlayer: {
        fontSize: 30,
        margin: 10,
        color: 'white'
    },

    chooseGameSceneTouchableOpacity1: {
        backgroundColor: '#0099FF',
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        elevation: 5
        /* shadowColor: 'black',
         shadowOffset: {
             width: 200,
             height: 200
         },
         shadowRadius: 200,
         shadowOpacity: 1.0*/
    },

    chooseGameSceneTouchableOpacity2: {
        backgroundColor: '#0099FF',
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        elevation: 5
    },

    /**
     * Styles WinnerView
     */

    WinnerViewContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    WinnerViewTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    },

    /**
     * Styles ViewChooseSize component
     */
    ViewChooseSize: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    },

    ViewChooseSizeTouchableOpacity: {
        backgroundColor: '#0099FF',
        margin: 10,
        borderRadius: 10
    },

    ViewChooseSizeButton: {
        fontSize: 30,
        margin: 15,
        color: 'white'
    },

    /**
     * Styles ViewChoosePlayer component
     */
    ViewChoosePlayer: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    ViewChoosePlayerButton: {
        fontSize: 30,
        margin: 10,
        color: 'white',
    },

    ViewChoosePlayerTouchableOpacity: {
        backgroundColor: '#0099FF',
        borderRadius: 10,
        margin: 10,
    },

    /**
     * Styles Loading component
     */
    overlay: {
        opacity: 0.5,
        backgroundColor: 'black',
        width: width,
        height: height,
        zIndex: 100
    },

    overlayImg: {
        position: 'absolute',
        bottom: height/3,
        left: (width/2)-(width/3/2),
        width: width/3,
        zIndex: 1000
    },

    overlayContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },

    hidden: {
        width: 0,
        height: 0,
    },


});

export default Style;