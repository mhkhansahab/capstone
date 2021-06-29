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
        fontFamily : "Roboto-Regular",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",

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
}

export {
        styles
    };

