const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid lightgray",
        width: "100%",
        height: "10%",
        position: "absolute",
        bottom: "0",
        color: "white",
        backgroundColor:"#8098FF"
    },
    '@media (min-width: 400px)': {
        container: {
            width: "25%",
        },
    }
    
}

export {
    styles
};