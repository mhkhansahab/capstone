const styles = {
    messageContainer:{
        width: "94%",
        padding: "0 3%",
        height: "78%",
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
        alignSelf : "flex-end",
    }

}

export {
    styles
};