  
import React from 'react' 
import './App.css';


class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      Person :{
        FullName:"Alaeddine Selmouna",
        Bio:"BIO",
        Profession:"Student",
        imgSrc:"./photo.jpg"
      },
      show: false,
      count:0,
    };
  }
  
  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
    
  }
  render() {
    return (
      <div className="App" style={{display:"flex", justifyContent:"center" , alignItems:'center', height:"100vh", backgroundColor:"grey"}}>
        <button style={{ margin:"2em", padding:"1em", borderRadius:"0.5em", cursor:"pointer", color: "#becccc",  backgroundColor:"black"}} onClick={()=>this.setState({show:!this.state.show})} >Show / Hide</button>
        <div> You have been here for {this.state.count} seconds</div>
            {this.state.show?
          <div style={{marginLeft:"7em", backgroundColor:"grey" ,border:'solid 0.2em  #becccc', width:"20em", height:'21em', borderRadius:"1em"}}>
            <img src={this.state.Person.imgSrc} style={{margin:"1em",width:"7em", border:'solid 0.2em #becccc' ,borderRadius:"50em"}} />
            <h2 style={{color:"#becccc"}} >{this.state.Person.FullName}</h2>
            <h6>{this.state.Person.Bio}</h6>
            <h3>{this.state.Person.Profession}</h3>
        </div>
        :null
        }

      </div>
    );
  }
}

export default App;