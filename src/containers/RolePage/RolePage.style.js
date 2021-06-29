const styles = {
    container: {
        width: "100%",
        height: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        position: "relative",
        backgroundColor: "#8098FF",
    },

    subContainer: {
        width: "95%",
        height: "95%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        position: "relative",

    },
    heading: {
        margin: "0px",
    },
    '@media (min-width: 350px)': {
        subContainer: {
            width: "80%",
            height: "85%",


        },
    },
    '@media (min-width: 500px)': {
        subContainer: {
            width: "70%",
            height: "80%",


        },
    },
    '@media (min-width: 700px)': {
        subContainer: {
            width: "60%",
            height: "70%",


        },
    },
    '@media (min-width: 900px)': {
        subContainer: {
            width: "45%",
            height: "70%",
        },
    }

}

export {
    styles
};

