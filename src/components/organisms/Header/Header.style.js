const styles = {
    headContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "10%",
        borderRadius: "0 0 13px 13px",
        backgroundColor: "#8098FF",
        padding: "0px 10px",
        fontFamily: "Oswald-Regular",
        textOverflow: "ellipsis",
        letterSpacing: "0.6px",
        color: "white",

    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
    },

    '@media (min-width: 600px)': {
        headContainer: {
            borderRadius: "0"

        },
        buttonContainer: {
            // display: "none"
        }

    }
}

export {
    styles
};