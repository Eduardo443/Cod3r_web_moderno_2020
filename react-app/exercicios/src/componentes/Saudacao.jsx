import React, {Component} from 'react'

class Saudacao extends Component {
    
    
    constructor(props){
        super(props)
        
        this.state = {
            tipo: this.props.tipo,
            name: this.props.name
        }

        this.setTipo = this.setTipo.bind(this)
    }
    
    setTipo(e){
         this.setState({tipo: e.target.value})
    }
    setName(e){
        this.setState({name: e.target.value})
    }

    render(){
        const {name, tipo} = this.state
        return (
            <div>
                <h1>{tipo} {name}</h1>
                <hr />
                <p>Tipo</p>
                <input type="text" placeholder="Tipo..." value={tipo}
                    onChange={this.setTipo}/>
                <p>Nome</p>
                <input type="text" placeholder="nome..." value={name}
                    onChange={e => this.setName(e)} />
            </div>
        )
    }
}

export default Saudacao