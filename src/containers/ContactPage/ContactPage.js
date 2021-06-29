import { withStyles } from "@material-ui/styles";
import { styles } from "./ContactPage.style";
import ContactList from "../../components/molecules/ContactList/ContactList";
import RequestList from "../../components/molecules/RequestList/RequestList";
import ContactFooter from "../../components/molecules/ContactFooter/ContactFooter";
import CounselorFooter from "../../components/molecules/CounselorFooter/CounselorFooter";
import Header from "../../components/organisms/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getYourChats,
  mergeID,
  initializeCurrentChat,
} from "./../../store/services/chatServices";
import { getAllUsers } from "./../../store/services/authServices";
import {
  acceptRequest,
  getAllRequests,
} from "../../store/services/requestServices";
import { withRouter } from "react-router";
import { setChatUser } from "../../store/actions/authActions";

const ContactPage = ({ classes, history, ...props }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const chats = useSelector((state) => state.chatReducer.chats);
  const user = useSelector((state) => state.userReducer.currentUser);
  const requests = useSelector((state) => state.requestReducer.requests);
  const section = props.location.search.split("=")[1];

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getYourChats(user.uid));
    dispatch(getAllRequests());
  }, []);

  const acceptor = (singleUser, uid, question, requestID) => {
    dispatch(acceptRequest(singleUser, uid, question, requestID));
    dispatch(setChatUser(singleUser));
    const id = mergeID(singleUser.uid, uid);
    dispatch(initializeCurrentChat(id));
    history.push({
      pathname: "/chat",
      search: `?id=${id}`,
    });
  };

  const goToChat = (userData) => {
    dispatch(setChatUser(userData));
    const id = mergeID(userData.uid, user.uid);
    dispatch(initializeCurrentChat(id));
    history.push({
      pathname: "/chat",
      search: `?id=${id}`,
    });
  };

  return (
    <>
      <div className={classes.contactContainer}>
        <Header>
          <h3 className={classes.header}>Hello, {user.nickname}</h3>
        </Header>

        <div className={classes.listContainer}>
          {section !== "requests" ? (
            <div>
              {chats.length !== 0 ? (
                chats.map((item) => {
                  // console.log(chats)
                  const key = Object.keys(item)[0];
                  return users.map((element) => {
                    const userArr = Object.entries(element);
                    return userArr.map((userData) => {
                      const singleUser = userData[1];
                      if (key.includes(singleUser.uid)) {
                        if (user.uid !== singleUser.uid) {
                          return (
                            <ContactList
                              name={singleUser.nickname}
                              key={singleUser.uid}
                              onClick={() => goToChat(singleUser)}
                            ></ContactList>
                          );
                        }
                      }
                    });
                  });
                })
              ) : (
                <div className={classes.emptyDiv}>No Chats Available</div>
              )}
            </div>
          ) : (
            <div>
              {requests.length !== 0 ? (
                requests.map((item) => {
                  const requestArr = Object.entries(item);

                  return requestArr.map((singleRequest) => {
                    const requestID = singleRequest[0];
                    const requestData = singleRequest[1];
                    const userID = requestData.uid;

                    return users.map((element) => {
                      const userArr = Object.entries(element);
                      return userArr.map((userData) => {
                        const singleUser = userData[1];

                        if (userID === singleUser.uid) {
                          if (user.uid !== singleUser.uid) {
                            return user.role === "User" ? null : (
                              <RequestList
                                name={singleUser.nickname}
                                question={requestData.question}
                                key={singleUser.uid}
                                showMine={false}
                                onClick={() =>
                                  acceptor(
                                    singleUser,
                                    user.uid,
                                    requestData.question,
                                    requestID
                                  )
                                }
                              ></RequestList>
                            );
                          } else {
                            return (
                              <RequestList
                                name={singleUser.nickname}
                                question={requestData.question}
                                key={singleUser.uid}
                                showMine={true}
                                onClick={() =>
                                  acceptor(
                                    singleUser,
                                    user.uid,
                                    requestData.question,
                                    requestID
                                  )
                                }
                              ></RequestList>
                            );
                          }
                        }
                      });
                    });
                  });
                })
              ) : (
                <div className={classes.emptyDiv}>No Request Available</div>
              )}
            </div>
          )}
        </div>
        {user.role === "Counselor" ? <CounselorFooter /> : <ContactFooter />}
      </div>
    </>
  );
};

export default withStyles(styles)(withRouter(ContactPage));
