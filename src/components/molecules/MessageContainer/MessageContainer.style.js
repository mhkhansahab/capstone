const styles = {
    messageContainer:{
        width: "98%",
        height: "79%",
        overflowY: "scroll",
        position: "relative",
        display: "flex",
        backgroundColor:"#F6FAFD",
        flexDirection: "column",
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