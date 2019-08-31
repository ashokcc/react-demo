import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {editUser} from '../store/actions/userAction';

class UserSummary extends Component {

    constructor(props){
        super(props);
        this.handleEditUser = this.handleEditUser.bind(this);
    }

    handleEditUser(user){
        this.props.editUser(user);
        this.props.history.push(`/user/${user.id}`);
    }
    render(){
        let btn;
        if(this.props.user.id !== ''){
            btn =  (
                <div className="col s8 offset-s2">
                    <button 
                        className="waves-effect waves-light btn teal darken-1" onClick={(e)=>{this.handleEditUser(this.props.user)}}>
                            BACK
                    </button>
                </div>
            )
        }else{
            btn = (
                <div className="col s8 offset-s2">
                </div>
            );
        }

        return (
            <div className="row">
                {btn}
                <div className="col s8 offset-s2">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((user, index) => {

                                return <tr key={user.id}>
                                        <td>{user.fname } { user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.gender}</td>
                                        <td><button className="waves-effect waves-light btn" onClick={(e)=>{this.handleEditUser(user)}}>Edit</button></td>
                                    </tr>
                            })}                        
                        </tbody>
                    </table>
                </div>
            </div>    
        );
    }

}

function mapStateToProps(state){
    return {
        user:state.users.user,
        users: state.users.users || [],
    };
}

function mapDispatchToProps(dispatch){
    return {
        editUser: bindActionCreators(editUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSummary);
