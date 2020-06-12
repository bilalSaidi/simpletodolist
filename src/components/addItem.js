import React , {Component} from 'react' ; 

class AddItem extends Component {

    state = ({
        name : '' ,
        lastName : '' ,
        age : ''
    });
    handleChnage = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
        
    }
    handlesubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === '' || e.target.lastName.value === '' || e.target.age.value === '' ){
            return false;
        }else{
            this.props.addItem(this.state);
            this.setState({
                name : '' ,
                lastName : '' ,
                age : ''
            });
        }
        
    };
    render(){
        return(
            <div className="AddItem">
                <form className="formAddItem" onSubmit={this.handlesubmit}>
                    <input type="text" id="name" placeholder="Enter First Name "  onChange={this.handleChnage} value={this.state.name}/>
                    <input type="text" id="lastName" placeholder="Enter Last Name " onChange={this.handleChnage} value={this.state.lastName}/>
                    <input type="number" id="age" placeholder="Enter  Your Age " onChange={this.handleChnage} value={this.state.age}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem;