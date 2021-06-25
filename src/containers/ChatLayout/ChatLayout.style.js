const styles = ({
    container: {
        height: "100%",
        justifyContent: "space-between",
        position: "relative",
        display: "flex",
        flexDirection: "row"
        
    },
    subContainer: {
        height: "100%",
        width: "100%",
        position: "relative",
        
    },
    sideBar: {
        width: "25%",
            height: "100%",
            display: "none",
            backgroundColor: "black",
    },

    '@media (min-width: 400px)': {
        container: {
            width: "75%",
        },
        
        },
   

}
);

export {
    styles
};
