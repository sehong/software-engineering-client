import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';

const Navbar = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 120%;
    letter-spacing: -0.03em;
    padding: 15px 20px;
    float: right;
    &:hover {
        color: #ff534b;
        border-bottom: 1px solid #ff534b;
    }
    color: #181717;
    @media (max-width: 800px) {
        display: none;
    }
`;
const SideBtn = styled.button`
    height: 55px;
    color: blue;
    background: none;
    border: none;
    visible: false;
    display: none;
    text-decoration: none;
    @media (max-width: 800px) {
        display: inline-block !important;
    }
`;
const SideMenu = styled.p`
    margin-left: 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #ff534b;
    }
    @media (max-width: 800px) {
        display: inline-block !important;
    }
`;

function NavBar(props) {
    const DrawClose = () => {
        setVisible(false);
    };
    const Drawopen = () => {
        setVisible(true);
    };

    const [visible, setVisible] = useState(false);
    return (
        <div
            style={{
                display: 'flex',
                borderBottom: 'solid 1px #e8e8e8',
            }}
        >
            <div>
                {/* 로고 */}
                <Link to={'/'}>Logo</Link>
            </div>
            <div
                style={{
                    width: '100%',
                    paddingRight: '4%',
                }}
            >
                {/*메뉴바 컨테이너 */}

                <Navbar to={'/register'}>회원가입</Navbar>
                <Navbar to={'/introduce'}>소개</Navbar>
                <Navbar to={'/post'}>게시판</Navbar>
                <Navbar to={'/login'}>로그인</Navbar>
            </div>
            <SideBtn>
                <MenuOpenSharpIcon
                    style={{ fontSize: '30px' }}
                    onClick={Drawopen}
                />
            </SideBtn>
            <div>
                <Drawer anchor="right" open={visible} onClose={DrawClose}>
                    <p
                        style={{
                            padding: '10px 140px 10px 30px ',
                            borderBottom: 'solid 1px #e8e8e8',
                        }}
                    >
                        Basic Drawer
                    </p>
                    <SideMenu to={'/introduce'} onClick={DrawClose}>
                        소개
                    </SideMenu>
                    <SideMenu to={'/post'} onClick={DrawClose}>
                        게시판
                    </SideMenu>
                    <SideMenu to={'/login'} onClick={DrawClose}>
                        로그인
                    </SideMenu>
                </Drawer>
            </div>
        </div>
    );
}
export default NavBar;
