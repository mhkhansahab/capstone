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

