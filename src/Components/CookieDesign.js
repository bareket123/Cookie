import React, {useEffect} from 'react';
import '../Styles/LoginStyle.scss';
import '../Styles/CookieDesign.css'
import { Stage, Layer, Circle } from 'react-konva';

const CookieDesign = () => {

    return (
        <div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Circle x={window.innerWidth/2} y={window.innerHeight/2} radius={200} fill="#E6BF83" />
                </Layer>
            </Stage>
            <button className={"modal-button"} style={{position: 'fixed', bottom: '50px', right: '10px'}}>Submit</button>

            <label style={{ bottom: '300px' }}>

                <input type="checkbox" style={{marginRight:"10px" }} />
                Milk Chocolate
            </label>
            <label style={{  bottom: '350px'}}>

                <input type="checkbox" style={{marginRight:"10px" }} />
                White Chocolate
            </label>
            <label style={{bottom: '400px' }}>

                <input type="checkbox" style={{marginRight:"10px" }} />
                 Salt Caramel
            </label>
            <label style={{ bottom: '450px' }}>

                <input type="checkbox" style={{marginRight:"10px" }} />
                Brown Cookie Dough
            </label>

                </div>
    );
};

export default CookieDesign;
