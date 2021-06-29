const styles = ({
    container: {
        height: "100%",
        justifyContent: "space-between",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F6FAFD",
        width: "100%",
        minWidth: "320px",
        maxWidth: "320px",
        maxHeight: "680px",
        margin: "0 auto",
        borderRight: "1px solid lightgray",
        borderLeft: "1px solid lightgray",


    },
    subContainer: {
        height: "100%",
        width: "100%",
        position: "relative",

    },
    sideBar: {
        width: "25%",
        height: "100%",
        display: "none",
        backgroundColor: "black",
    },
    header: {
        backgroundColor: "#8098FF",
        padding: "0px 10px",
        height: "10%"

    },
    

    '@media (min-width: 800px)': {
        container: {
            width: "75%",
            maxWidth: "1000px"



        },


    },


}
);

export {
    styles
};
