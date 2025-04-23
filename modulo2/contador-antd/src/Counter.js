import React from 'react';
import { Card, Typography, Layout, Button } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render(){
        return (
            <>
                <Card title={this.props.name} style={{ width: 300, margin: '50px auto', textAlign: 'center' }}>
                    <Title style={{fontSize: '24px'}}>Valor actual { this.state.count }</Title>
                </Card>
                <Layout>
                    <Content style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '80px',
                        backgroundColor: 'white'
                    }}>
                        <Button type='primary' onClick={this.increment}>Incrementar</Button>
                        <Button type='primary' onClick={this.decrement}>Decrementar</Button>
                    </Content>
                </Layout>

            </>
        );
    }

}

export default Counter;