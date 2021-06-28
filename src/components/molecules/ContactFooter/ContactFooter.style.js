const styles = {
    footer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderTop: "1px solid lightgray",
        width: "100%",
        height: "10%",
        position: "absolute",
        backgroundColor: "#8098FF",
        color: "white",

    },
    subContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    


    },

    '@media (min-width: 400px)': {
        footer: {
            width: "25%",
        },
    }
}

export {
    styles
};

