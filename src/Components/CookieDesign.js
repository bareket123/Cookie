import React, {useEffect, useState} from 'react';
import '../Styles/LoginStyle.scss';
import '../Styles/CookieDesign.css'
import { Stage, Layer, Circle } from 'react-konva';

const CookieDesign = () => {
    const goldBrown = "#E6BF83";
    const darkBrown = "#6f4e37";
    const redVelvet = "#6e1212";
    const chocolateChip = "#3d1c02";
    const milkChocolateChip = "#8b572a";
    const saltCaramelChip="#b8860b";
    const whiteChocolate="#ede6d6";
    const [cookieColor , setCookieColor] = useState(goldBrown);
    const [cookieChipColor , setCookieChipColor] = useState(null);
    const chipsCordi=[
        {x:window.innerWidth / 2,y:window.innerHeight / 3.99},
        {x:window.innerWidth / 1.66,y:window.innerHeight / 2.5},
        {x:window.innerWidth / 2.599,y:window.innerHeight / 2.6},
        {x:window.innerWidth / 2.1111,y:window.innerHeight / 2.11111},
        {x:window.innerWidth / 2.5,y:window.innerHeight / 1.7},
        {x:window.innerWidth / 1.888,y:window.innerHeight / 1.66},
        {x:window.innerWidth / 1.666,y:window.innerHeight / 1.39},
        {x:window.innerWidth / 2.229,y:window.innerHeight / 1.339},
        {x:window.innerWidth / 2.01199,y:window.innerHeight / 1.22},

    ]
    // const [cookieTexture, setCookieTexture] = useState(null);



    return (
        <div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Circle
                        x={window.innerWidth / 2}
                        y={window.innerHeight / 2}
                        radius={200}
                        fill={cookieColor}
                        shadowColor="rgba(0,0,0,0.5)" // Add shadow for depth
                        shadowBlur={10}
                        shadowOffsetX={5}
                        shadowOffsetY={5}
                    />
                    {
                        chipsCordi.map((chip)=>{
                            return (
                                <Circle
                                    x={chip.x}
                                    y={chip.y}
                                    radius={30}
                                    fill={cookieChipColor}
                                    shadowColor="rgba(0,0,0,0.5)" // Add shadow for depth
                                    shadowBlur={5}
                                    shadowOffsetX={2}
                                    shadowOffsetY={2}
                                    draggable // Make circles draggable for demonstration
                                    onDragMove={(e) => console.log('Dragging', e)}
                                />                            )
                        })
                    }
                </Layer>
            </Stage>
            <button className={"modal-button"} style={{position: 'fixed', bottom: '50px', right: '10px'}}>Submit
            </button>
            <label style={{top: '200px', textDecoration: 'underline'}}>Type Of Dough:
                <label style={{top: '230px'}}>
                    <input type="checkbox" style={{marginRight: "10px"}}
                           onChange={(event) => {
                               if (event.target.checked) {
                                   setCookieColor(darkBrown);
                               } else {
                                   setCookieColor(goldBrown)
                               }
                           }}/>
                    Dark Brown
                </label>
                <label style={{top: '260px'}}>
                    <input type="checkbox" style={{marginRight: "10px"}}
                           onChange={(event) => {
                               if (event.target.checked) {
                                   setCookieColor(redVelvet);
                               } else {
                                   setCookieColor(goldBrown)
                               }
                           }}
                    />
                    Red Velvet
                </label>
            </label>

            <label style={{top: '310px', textDecoration: 'underline'}}>Extras:
                <label style={{top: '340px'}}>
                    <input type="checkbox" style={{marginRight: "10px"}} onChange={
                        (event) => {
                        if (event.target.checked) {
                            setCookieChipColor(chocolateChip);
                        } else {
                            setCookieChipColor(null)
                        }
                    }}/>Dark Chocolate
                </label>
                <label style={{top: '370px'}}>
                    <input type="checkbox" style={{marginRight: "10px"}} onChange={
                        (event) => {
                            if (event.target.checked) {
                                setCookieChipColor(milkChocolateChip);
                            } else {
                                setCookieChipColor(null)
                            }
                        }}
                    />Milk Chocolate
                </label>
                <label style={{top: '400px'}}>
                   <input type="checkbox" style={{marginRight: "10px"}} onChange={
                        (event) => {
                            if (event.target.checked) {
                                setCookieChipColor(whiteChocolate);
                            } else {
                                setCookieChipColor(null)
                            }
                        }}/>White Chocolate
                </label>
                <label style={{top: '430px'}}>
                    <input type="checkbox" style={{marginRight: "10px"}} onChange={
                        (event) => {
                            if (event.target.checked) {
                                setCookieChipColor(saltCaramelChip);
                            } else {
                                setCookieChipColor(null)
                            }
                        }}/>Salt Caramel
                </label>
            </label>

            <label style={{top: '480px', textDecoration: 'underline'}}>Dough Texture:
                <label style={{top: '510px'}}>
                <input type="checkbox" style={{marginRight: "10px"}}/>Soft
                </label>
                <label style={{top: '540px'}}>
                    <input type="checkbox" style={{marginRight: "10px"}}/>Crunchy
                </label>
                <label style={{top: '570px'}}>
                    <input type="checkbox" style={{marginRight: "10px"}}/>Cakey
                </label>
            </label>

        </div>

    );
};

export default CookieDesign;


