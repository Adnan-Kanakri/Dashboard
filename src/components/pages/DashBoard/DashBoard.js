import React, { useEffect } from 'react'
import * as actionType from "../../../store/actions/index"
import { connect } from 'react-redux'
import ReactLoading from "../../Loading/ReactLoading"
import styled from "./DashBoard.module.css"
import Header from '../../Header/Header'
import Table from "../../Table/Table"

export const DashBoard = (props) => {
    console.log(props)
    useEffect(() => {
        props.getApiUsers()
    }, [])
    return (
        <div>
            <Header />
            {props.task.success ? <div className={styled.center}>
                <ReactLoading />
            </div> :
                <div>
                    <h2>Latest Users</h2>
                    <div>
                        <Table data={props.task.users.data} />
                    </div>
                </div>}
        </div>

    )
}

const mapStateToProps = (state) => ({
    task: state.task
})

const mapDispatchToProps = dispatch => ({
    getApiUsers: () => dispatch(actionType.getApi())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (DashBoard)