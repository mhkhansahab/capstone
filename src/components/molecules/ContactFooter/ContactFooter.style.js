const styles = {
    footer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid lightgray",
        width: "100%",
        height: "10%",
        position: "absolute",
        backgroundImage: "radial-gradient( circle 848.6px at 10% 20%,  rgba(140,58,255,1) 0%, rgba(181,59,253,1) 50.1% )",
        color: "white",
        // borderRadius: "13px 13px 0 0"
    
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

