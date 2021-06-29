const styles = {
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    display: "flex",
    padding: "8px",
    margin: "10px 10px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "-1px 0px 33px -16px rgba(0,0,0,0.69)",
    webkitBoxShadow: "-1px 0px 33px -16px rgba(0,0,0,0.69)",
    mozBoxShadow: "-1px 0px 33px -16px rgba(0,0,0,0.69)"   
    },
  titleBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "16px",
    color: "#8098FF",
    textAlign: "left",
    maxWidth: "90%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontFamily : "Lato-Regular"
  },
  subTitle: {
    fontSize: "12px",
    color: "#8098FF",
    fontFamily : "Lato-Light"
  },
  btn: {
    background: "#8098FF",
    color: "#fff",
    width: "fit-content",
    padding: "7px 10px",
    fontSize: "12px",
    margin: "0 2px",
    borderRadius: "5px",
    fontFamily : "Lato-Regular"
  },
  disabled: {
    background: "#8098FF",
    color: "#fff",
    width: "fit-content",
    padding: "7px 10px",
    fontSize: "12px",
    margin: "0 2px",
    borderRadius: "5px",
    fontFamily : "Lato-Regular"
  },
  btnContainer: {
    display: "flex",
  },
  question: {
    fontSize: "12px",
    textAlign: "left",
    maxWidth: "70%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#8098FF",
    fontFamily : "Lato-Light"
  },
  '@media (min-width: 600px)': {
    btn: {
      width: "25px",
      fontSize: "9px",
      padding: "6px 9px",

    },
    
    },
};

export { styles };
