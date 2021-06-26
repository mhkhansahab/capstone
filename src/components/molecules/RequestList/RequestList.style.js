const styles = {
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    display: "flex",
    padding: "8px",
    margin: "5px 10px",
    border: "1px solid lightblue",
    borderRadius: "10px",
    background:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(162,102,246,1) 0%, rgba(203,159,249,1) 90% )",
  },
  titleBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "16px",
    color: "white",
    textAlign: "left",
    maxWidth: "90%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  subTitle: {
    fontSize: "12px",
    color: "lightblue",
  },
  btn: {
    background: "white",
    color: "blue",
    width: "fit-content",
    padding: "7px 10px",
    fontSize: "12px",
    margin: "0 2px",
    borderRadius: "5px",
  },
  disabled: {
    background: "white",
    color: "blue",
    width: "fit-content",
    padding: "7px 10px",
    fontSize: "12px",
    margin: "0 2px",
    borderRadius: "5px",
  },
  btnContainer: {
    display: "flex",
  },
  question: {
    fontSize: "12px",
    color: "lightblue",
    textAlign: "left",
    maxWidth: "70%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
};

export { styles };
