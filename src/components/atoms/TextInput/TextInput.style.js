const styles = {
    input: {
        [`& fieldset`]: {
            borderRadius: "10px",
        },
        marginLeft: "10px",
        width: "70%",
        boxShadow: "0 10px 6px -8px lightgray"


    },
    '@media (min-width: 400px)': {
        input: {
            [`& fieldset`]: {
                borderRadius: "10px",
                width: "100%",

            },
            width: "70%",
        




        }

    }

}


export {
    styles
};