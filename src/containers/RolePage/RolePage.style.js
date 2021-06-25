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
       
        
        },
    // background:{
    //     width: "100%",
    //     height: "32%",
    //     background: "radial-gradient( circle 848.6px at 10% 20%,  rgba(140,58,255,1) 0%, rgba(181,59,253,1) 50.1% )",
    //     position: "absolute",
    //     top: "0",
    //     zIndex: "-10",
    //     clipPath: "polygon( 0 0, 100% 0, 100% 90%, 0 calc(90% - 20vw))",

    // },
    subContainer: {
        width: "70%",
        height: "65%",
        opacity: "0.97",
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

    '@media (min-width: 400px)': {
        background: {
            clipPath: "polygon( 0 0, 100% 0, 100% 100%, 0 calc(100% - 15vw))",
    
            },
        },

    '@media (min-width: 500px)': {
        background: {
            clipPath: "polygon( 0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw))",
    
            },
        }
    
    }

export {
    styles
};

