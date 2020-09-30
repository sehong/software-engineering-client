import React, { useEffect } from 'react';
import './App.css';
import './Introduction.css';
// const Introduction = ({ name }) => {
const Introduction = (props) => {
    const { name, myName } = props;

    useEffect(() => {
        console.log('what is props?', name);
    }, []);

    return (
        <>
            <div>
                <b>
                    <hr></hr>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p className="a">M</p>
                        <p className="fonts">an&ensp;</p>
                        <p className="a">S</p>
                        <p className="fonts">haring&ensp;</p>
                        <p className="a">S</p>
                        <p className="fonts">tart-up&ensp;</p>
                        <p className="a">I</p>
                        <p className="fonts">nformation&ensp;</p>
                    </div>
                </b>
                <div className="fonts">
                    <b>
                        <p style={{ fontSize: 20 }}>창업 정보는 Where?</p>
                    </b>
                    <br></br>
                    <p>창업을 준비하는 사람들이 손쉽게</p>
                    <p>정보를 찾을 수 있도록 창업 정보를 공유합니다.</p>
                    <br></br>
                    <b>
                        <p style={{ fontSize: 32, color: 'blue' }}>
                            I can do it! Start-up
                        </p>
                    </b>
                    <hr></hr>
                </div>
            </div>
        </>
    );
};

export default Introduction;