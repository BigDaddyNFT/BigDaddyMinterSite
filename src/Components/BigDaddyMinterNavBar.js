import React from "react";
import '../BigDaddyCSS.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { useBigDaddyMinterContext } from '../Provider/BigDaddyMinterContext';
import { CNavbar, CNavbarBrand, CNavbarText, CContainer, CRow, CCol, CFormLabel } from '@coreui/react';
import * as fcl from "@onflow/fcl";


function BigDaddyMinterNavBar() {
    const { isLoggedIn, user, fusdBalance } = useBigDaddyMinterContext();
   

    const handleLogOut = () => {
        fcl.unauthenticate();
      };

    return (

        <CNavbar colorScheme="light" className="bg-light d-flex justify-content-between">
            <CContainer fluid>
                <div className="d-flex justify-content-start">
                    <CRow className="mb-3" xs={{ gutterX: 5 }}>
                        {isLoggedIn && (
                            <CCol>
                                <CRow>
                                    <CFormLabel className="navbar-text-gradient-user-menu" style={{ margin: '0px'}}>Address: </CFormLabel>
                                    <CFormLabel className="navbar-text-gradient-user-menu">{user.addr}</CFormLabel>
                                </CRow>
                                <CRow>
                                    <CFormLabel className="navbar-text-gradient-user-menu" style={{ margin: '0px'}}>Balance: </CFormLabel>
                                    <CFormLabel className="navbar-text-gradient-user-menu">{fusdBalance} FUSD</CFormLabel>
                                </CRow>
                            </CCol>
                        )}
                        <CCol>
                            <CNavbarBrand href="#">
                                <img
                                    src={"/bigdaddymintersite/logo-4.png"}
                                    alt=""
                                    width="160"
                                    height="80"
                                    className="d-inline-block align-center"
                                />
                            </CNavbarBrand>
                        </CCol>
                    </CRow>
                </div>
                <div className="d-flex justify-content-center flex-grow-1">
                    <CNavbarText className="navbar-text-gradient">BigDaddy Minter Page</CNavbarText>
                </div>
                <div className="d-flex justify-content-end">
                {isLoggedIn && (
                    <button onClick={handleLogOut} className="bigdaddy-button menu">Log Out</button>
                )}
                </div>
            </CContainer>
        </CNavbar>
    );
}

export default BigDaddyMinterNavBar;