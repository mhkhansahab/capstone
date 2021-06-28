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
        backgroundImage: "radial-gradient( circle 848.6px at 10% 20%,  rgba(140,58,255,1) 0%, rgba(181,59,253,1) 50.1% )",
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

