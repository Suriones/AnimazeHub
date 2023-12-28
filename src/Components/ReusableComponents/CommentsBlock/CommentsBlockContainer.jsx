import React, { useEffect } from "react";
import commentsBlock_style from "./CommentsBlock_style.module.scss"
import CommentsBlock from "./CommentsBlock.jsx";
import CommentPage from "./CommentPage/CommentPage.jsx";
import Comment from "./Comment/Comment.jsx"
import Loading from "../StateStatus/Loading/Loading.jsx"
import { time } from "../../../ExternalFunctions/ExternalFunctions.js";

const CommentsBlockContainer = React.memo((props) => {

    useEffect(() => {
        props.data.dispatch(props.data.commentsDAL.getAll(props.data.type, props.data.id));
    }, [props.data.id, props.data.refresh]);

    if (!props.data.commentsRequestStatus) return <Loading />

    const commentField = React.createRef();

    const setValueOfTheCommentAddingField = (value) => props.data.dispatch({ type: "setValueOfTheCommentAddingField", value: value });
    const mention = (username) => {
        if (props.data.authData.authStatus) {
            if (props.data.valueOfTheCommentAddingField[0] === "@") {
                props.data.dispatch({ type: "setValueOfTheCommentAddingField", value: `@${username}, ${commentField.current.value.substring((commentField.current.value).search(",") + 2, commentField.current.value.length)}` });
            } else {
                props.data.dispatch({ type: "setValueOfTheCommentAddingField", value: `@${username}, ${commentField.current.value}` });
            }
        }
    }

    const postComment = (text) => props.data.dispatch(props.data.commentsDAL.postComment(text, props.data.id, props.data.type, props.data.authData.login, time()));

    const pagesForward = () => props.data.dispatch({ type: "setActivePage", activePage: Math.floor(props.data.activePage / 10 + 1 - 0.01) * 10 + 1 });
    const pagesBack = () => props.data.dispatch({ type: "setActivePage", activePage: Math.floor(props.data.activePage / 10 - 0.01) * 10 });

    const setActivePage = (activePage) => props.data.dispatch({ type: "setActivePage", activePage: activePage });

    const visibleComments = () => {
        const returnedComments = [];

        for (let i = props.data.activePage * 5 - 5; i < props.data.comments.length && i < props.data.activePage * 5; i++) {
            returnedComments.push(<Comment text={props.data.comments[i].text} key={i + " comment"} username={props.data.comments[i].username} mention={mention} time={props.data.comments[i].time} />)
        }

        return returnedComments;
    }

    const visiblePages = () => {
        const allPages = [];

        if (props.data.comments.length) {
            for (let i = 1; i < (Math.ceil(props.data.comments.length / 5) + 1); i++) { // Наповнення массиву всіма можливими сторінками
                allPages.push(<CommentPage number={i} key={i + " page"} className={props.data.activePage === i ? commentsBlock_style.active : commentsBlock_style.notActive} onClick={setActivePage} />)
            }
        } else { // Якщо комментарів ще немає, відображати першу сторінку
            allPages.push(<CommentPage number={1} key={1 + " page"} className={commentsBlock_style.active} onClick={setActivePage} />);
        }

        const returnedPages = [];

        if (!Number.isInteger(props.data.activePage / 10)) {
            for (let i = (Math.floor(props.data.activePage / 10)) * 10 + 1; i <= allPages.length && returnedPages.length < 10; i++) { // Наповнення массиву сторінками, які будуть відображатись користовачу (1-10, 11-20...)
                returnedPages.push(allPages[i - 1]);
            }
        } else {
            for (let i = props.data.activePage - 9; i <= allPages.length && returnedPages.length < 10; i++) { // Обробка активної сторінки, кратної 10. Тоді потрібна інша умова
                returnedPages.push(allPages[i - 1]);
            }
        }

        return returnedPages;
    }

    const data = {
        addCommentStatus: !props.data.authData.authStatus,
        placeholder: props.data.authData.authStatus ? null : "You need to login/register!",
        postComment: postComment,
        valueOfTheCommentAddingField: props.data.valueOfTheCommentAddingField,
        setValueOfTheCommentAddingField: setValueOfTheCommentAddingField,
        visibleComments: visibleComments(),
        visiblePages: visiblePages(),
        pagesBack: pagesBack,
        pagesForward: pagesForward,
        backButtonStatus: props.data.activePage > 10 ? false : true,
        forwardButtonStatus: Math.ceil(props.data.activePage / 10) * 10 < Math.ceil(props.data.comments.length / 5) ? false : true,
        commentField: commentField
    }

    return <CommentsBlock data={data} />
})

export default CommentsBlockContainer;