import React from "react";

class CoursesPage extends React.Component {
    
        
    state={
        course:{
            title:"english"
        }
    }
       
    
    handleChange=(event)=>{
        const course ={...this.state.course,title:event.target.value};
        this.setState({course});

    }
    handleSubmit=(event)=>{
        event.preventDefault();
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>course</h2>
                <h3>add course</h3>
                <input type="text" onChange={this.handleChange}
                vaule={this.state.course.title}>
                </input>
                <input type="submit" value="save"></input>
            </form>
        );
    }
}
 



export default CoursesPage;