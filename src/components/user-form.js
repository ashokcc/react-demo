import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {submitUser} from '../store/actions/userAction';

class UserForm extends Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        gender:''
    };

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        //user
        let id = this.props.match.params.id;
        console.log(id);
        if(id && this.props.users.users && this.props.users.users.length){
            let user = this.props.users.users && this.props.users.users.find((item)=> item.id.toString() === id);
            this.setState(user);
        }
    }

    uniqueId(){
        function gUID(){
            return Math.floor((2 + Math.random()) * 0x1100).toString(16).substring(1);
        }
        return `${gUID()}-${gUID()}-${gUID()}`;
    }

    handleSubmit(e){
        let newUser = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone,
            id: this.uniqueId(),
            gender: this.state.gender
        };
        this.props.submitUser(newUser);
        this.props.history.push("/summary");
    }

    onInputChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onRadioSelection(e){
        this.setState({
            gender: e.target.value
        });
    }

    render (){
        return (
            <div className="row">
                <form className="col s11 offset-s1">
                    <div className="row">
                        <div className="input-field col s3">
                        <input id="fname" type="text" className="validate" value={this.state.fname} onChange={(e)=>{this.onInputChange(e)}} />
                            <label htmlFor="fname" className="active">First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <input id="lname" type="text" className="validate" value={this.state.lname} onChange={(e)=>{this.onInputChange(e)}} />
                            <label htmlFor="lname" className="active">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <input id="email" type="text" className="validate" value={this.state.email} onChange={(e)=>{this.onInputChange(e)}} />
                            <label htmlFor="email" className="active">Email Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <input id="phone" type="text" className="validate" value={this.state.phone} onChange={(e)=>{this.onInputChange(e)}} />
                            <label htmlFor="phone" className="active">Phone Number</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s3">
                            <label htmlFor="gender">Gender</label>
                            <p>
                                <label>
                                    <input name="gender" checked={this.state.gender === 'Male'} value="Male" type="radio"  onChange={(e)=> {this.onRadioSelection(e)}} />
                                    <span>Male</span>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input name="gender" checked={this.state.gender === 'Female'} type="radio" value="Female" onChange={(e)=> {this.onRadioSelection(e)}} />
                                    <span>Female</span>
                                </label>
                            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e)=>{ this.handleSubmit(e) }}>
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
        </div>
        )
    }
}
function mapStateToProps(state){

    return {
        users: state.users,
        user: state.user
    };
}
function mapDispatchToProps(dispatch){
    return {
        submitUser: bindActionCreators(submitUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);