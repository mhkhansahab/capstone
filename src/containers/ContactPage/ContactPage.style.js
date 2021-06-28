const styles = {
    contactContainer: {
        height: "100%",

    },
    header:{
        fontFamily : "Oswald-Regular",
        textOverflow: "ellipsis" ,
        color: "white",
    },
    listContainer: {
        width: "98%",
        height: "80%",
        overflowY: "scroll",
        position: "relative",
        marginLeft: "1%",
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
            borderRight: "1px solid gray",


        }

    }
}

export {
        styles
    };

