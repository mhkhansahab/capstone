const styles = {
    container: {
        margin: "auto",
        width: "80%",

        },
    form: {
        display: "flex",
        flexDirection: "column",
        
    },
    heading: {
        textAlign: "center"

    },
    '@media (min-width: 350px)': {
        container: {
            width: "70%",
    
            },
        },
        '@media (min-width: 600px)': {
            container: {
                width: "35%",
        
                },
            }
    }

export {
    styles
};

