import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Button } from "antd";
import { LeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import "./Setting.css";
import { connect } from "react-redux";
import history from "../../../helpers/history";
import DashboardMenu from "../../DashboardMenu/DashboardMenu";
import { memberActions } from "../../../actions/member.actions"; 

const { Header, Content, Footer } = Layout;

class Setting extends React.Component {

    handleClickBack = () => {
        history.push("/family");
    }

    handleClickLogout = () => {
        const { logout } = this.props;
        history.push("/login");
        logout();
    }

    render(){

        const inforLogin = JSON.parse(localStorage.getItem("inforLogin"));
        const { user } = inforLogin;

        return(
            <Layout style={{ minHeight: '100vh'}}>
                <DashboardMenu menuItem="1" />
                <Layout className="site-layout">
                    <Header className="site-layout-background" >
                        <Row style={{textAlign: "center"}}>
                            <Col flex="30px"> 
                                <Button onClick={this.handleClickBack} size="large" style={{marginLeft: "10px"}}> <LeftOutlined /> </Button> 
                            </Col>
                            <Col flex="auto"> <div className="title-header">Setting</div> </Col>
                        </Row>
                    </Header>
                    <Content >
                        <Link to={{ pathname:"/family/setting/my-account", state: { "fromSetting": true, "member": user } }} >
                            <div className="panel-container">
                                <span className="panel-content"> < i className="fa fa-user-o custom-icon" /> My Account </span> 
                                <CaretRightOutlined className="caretright-icon"/> 
                            </div>
                        </Link>
                        <Link to="/family/setting/update-family" >
                            <div className="panel-container">
                                <span className="panel-content"> <i className="fa fa-home custom-icon" /> Family Account </span> 
                                <CaretRightOutlined className="caretright-icon"/> 
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="panel-container">
                                <span className="panel-content"> <i className="fa fa-question-circle-o custom-icon" /> Helper Center </span> 
                                <CaretRightOutlined className="caretright-icon"/> 
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="panel-container">
                                <span className="panel-content"> <i className="fa fa-commenting-o custom-icon" /> Feedback </span> 
                                <CaretRightOutlined className="caretright-icon"/> 
                            </div>
                        </Link>
                        <div className="panel-container" onClick={this.handleClickLogout}>
                            <span className="panel-content"> <i className="fa fa-sign-out custom-icon" /> Log Out </span> 
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> </Footer>
                </Layout>
            </Layout>
        );
    }
}

const actionCreators = {
    logout: memberActions.logout
}

export default connect(null, actionCreators)(Setting);