const styles = {
    contactContainer: {
        height: "100%",
        backgroundColor:"#F6FAFD",
        position: "relative",
        minWidth: "320px",
        width:"100%",
        margin: "0 auto",
        borderRight: "1px solid lightgray",
        borderLeft: "1px solid lightgray",
    },
    header:{
        display: "flex",
        flexDirection: "row",

    },
    listContainer: {
        height: "80%",
        overflowY: "scroll",
        position: "relative",
        '&::-webkit-scrollbar': {
            display: "none",
        },
    },
    loaderContainer: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    emptyDiv:{
    display: "flex",
    justifyContent: "center",
    marginTop: "70%",
    color : "#647AFE",
    fontFamily : "Lato-Regular"
    }
}

export {
        styles
    };

