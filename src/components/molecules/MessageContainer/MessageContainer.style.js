const styles = {
    messageContainer:{
        width: "96%",
        height: "79%",
        overflowY: "scroll",
        position: "relative",
        display: "flex",
        backgroundColor:"#F6FAFD",
        flexDirection: "column",
        padding : "0 2%",
        '&::-webkit-scrollbar': {
            display: "none",
          },
    },
    skeletonContainer : {
        display : "flex",
        flexDirection : "column"
    },
    left : {
        margin : "5px 0",
        alignSelf : "flex-start"
    },
    right : {
        margin : "5px 0",
        alignSelf : "flex-end"
    }

}

export {
    styles
};