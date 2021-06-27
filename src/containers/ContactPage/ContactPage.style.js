const styles = {
    contactContainer: {
        height: "100%",
    },
    head: {
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "10%",
        borderBottom: "1px solid lightgray",
        fontWeight: "800px",
        backgroundImage: "radial-gradient( circle 848.6px at 10% 20%,  rgba(140,58,255,1) 0%, rgba(181,59,253,1) 50.1% )",        
        borderRadius: "0 0 13px 13px"
    },
    header:{
        fontFamily : "Oswald-Regular"
    },
    listContainer: {
        width: "98%",
        height: "80.5%",
        overflowY: "scroll",
        position: "relative",
        marginLeft: "1%",
        '&::-webkit-scrollbar': {
            display: "none",
          },
    },
    '@media (min-width: 400px)': {
        contactContainer: {
            width: "25%",
            borderRight: "1px solid gray",

        },

            head: {
                height: "9%",
                borderRadius: "0",

               
    
            },
            
        
        },


}

export {
    styles
};

