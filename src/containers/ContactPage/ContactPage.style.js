const styles = {
    contactContainer: {
        height: "100%",
        backgroundColor:"#F6FAFD",
        position: "relative",
        minWidth: "320px",
        margin: "0 auto",
        maxHeight: "700px",

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
    '@media (min-width: 400px)': {
        contactContainer: {
            width: "25%",
            borderRight: "1px solid lightgray",
            borderLeft: "1px solid lightgray",



        }

    }
}

export {
        styles
    };

