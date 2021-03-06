import React, { Component } from "react"

class Pedia extends Component {
    
    render() {
        var numRows = Math.ceil(80/16);
        var rows = []
        for (var i = 0; i < numRows; i++) {
            rows.push([])
        }
        
        // From each creature, construct an item in the Critterpedia. These divs are the squares
        // in the Pedia grid.
        var items = this.props.items.map((item, i) => {
            // Name of the image to ues for this tile
            var fname = "assets/images/" + this.props.type + "/" + (i + 1) + ".png"

            var disabled = false
            if (this.props.now) {
                disabled = !item.availableNow()
            }
            
            if (this.props.today) {
                disabled = disabled || !item.availableToday()
            }

            if (this.props.leaving) {
                disabled = disabled || !item.isLeaving()
            }

            if (this.props.new) {
                disabled = disabled || !item.isNew()
            }

            if (this.props.uncaught) {
                disabled = disabled || this.props.caught[this.props.type].includes(i)
            }

            return(
                <div 
                    key={"item-"+i} 
                    className={disabled ? "pedia-item disabled" : "pedia-item"} 
                    title={item.name}
                    onClick={() => this.props.openItem(i)}
                >
                    <div className="d-flex justify-content-center align-items-center" style={{position: "relative", width:"100%", height: "100%"}}>
                        <img src={fname} alt={item.name}/>
                        {
                            // Include checkmark if caught already
                            this.props.caught[this.props.type].includes(i) && 
                            <span role="img" className="check" aria-label="Emoji: checkmark">
                                ✅
                            </span>
                        }
                    </div>
                </div>
            )
        })

        items.forEach((item, i) => {
            rows[i % numRows].push(item)
        })

        var sections = rows.map((row, i) => <section key={i} className="pedia-row pr-2">
            {row}
        </section>)

        return <div className="main d-flex flex-column align-items-start p-2">{sections}</div>
    }
}

export default Pedia